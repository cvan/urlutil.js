/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const rscheme = /^(?:[a-z\u00a1-\uffff0-9-+]+)(?::|:\/\/)/i;
const defaultScheme = 'http://';

export function getScheme(input) {
  // This function returns one of followings
  // - scheme + ':' (ex. http:)
  // - scheme + '://' (ex. http://)
  // - null
  return (rscheme.exec(input) || [])[0];
}

export function hasScheme(input) {
  return !!getScheme(input);
}

export function isNotURL(input) {
  // in bug 904731, we use <input type='url' value=''> to
  // validate url. However, there're still some cases
  // need extra validation. We'll remove it til bug fixed
  // for native form validation.
  //
  // for cases, ?abc and "a? b" which should searching query
  var case1Reg = /^(\?)|(\?.+\s)/;
  // for cases, pure string
  var case2Reg = /[\?\.\s\:]/;
  // for cases, data:uri and view-source:uri
  var case3Reg = /^(data|view-source)\:/;

  var str = input.trim();
  if (case1Reg.test(str) || !case2Reg.test(str) ||
      getScheme(str) === str) {
    return true;
  }
  if (case3Reg.test(str)) {
    return false;
  }
  // require basic scheme before form validation
  if (!hasScheme(str)) {
    str = defaultScheme + str;
  }

  try {
    var url = new URL(str);
    return !url;
  } catch(e) {
    return true;
  }
}

export function getUrlFromInput(input) {
  input = input.trim();

  // If there's no scheme, prepend the default scheme
  if (!hasScheme(input)) {
    input = defaultScheme + input;
  }

  if (isNotURL(input)) {
    return input;
  }

  return new URL(input).href;
}

export function isURL(input) {
  return !isNotURL(input);
}

export function isViewSourceUrl(url) {
  return url.toLowerCase().startsWith('view-source:');
}

export function isDataUrl(url) {
  return url.toLowerCase().startsWith('data:');
}

export function isImageDataUrl(url) {
  return url.toLowerCase().startsWith('data:image/');
}

export function getUrlFromViewSourceUrl(input) {
  if (!isViewSourceUrl(input)) {
    return input;
  }
  return getUrlFromInput(input.substring('view-source:'.length));
}

export function getViewSourceUrlFromUrl(input) {
  if (isViewSourceUrl(input)) {
    return input;
  }

  // Normalizes the actual url before the view-source: scheme like prefix.
  return 'view-source:' + getUrlFromViewSourceUrl(input);
}

/**
 * Extracts the hostname or returns undefined
 */
export function getHostname(input) {
  try {
    return new URL(input).host;
  } catch (e) {
    return undefined;
  }
}
