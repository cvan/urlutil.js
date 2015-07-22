# URL Util

A simple class for parsing and dealing with URLs.

## Developing

Install necessary dependencies by running `npm install`.

To build the project simply run `gulp`. This will run babel on the JS and export bundles to the dist/ folder. This also updates README.md with the latest API documentation.

## API Reference

<a name="module_UrlUtil..UrlUtil"></a>
### UrlUtil~UrlUtil
**Kind**: inner class of <code>[UrlUtil](#module_UrlUtil)</code>  

* [~UrlUtil](#module_UrlUtil..UrlUtil)
  * [new UrlUtil()](#new_module_UrlUtil..UrlUtil_new)
  * [.getScheme(input)](#module_UrlUtil..UrlUtil.getScheme) ⇒ <code>String</code>
  * [.hasScheme(input)](#module_UrlUtil..UrlUtil.hasScheme) ⇒ <code>Boolean</code>
  * [.isNotURL(input)](#module_UrlUtil..UrlUtil.isNotURL) ⇒ <code>Boolean</code>
  * [.getUrlFromInput(input)](#module_UrlUtil..UrlUtil.getUrlFromInput) ⇒ <code>String</code>
  * [.isURL(input)](#module_UrlUtil..UrlUtil.isURL) ⇒ <code>Boolean</code>
  * [.isViewSourceUrl(input)](#module_UrlUtil..UrlUtil.isViewSourceUrl) ⇒ <code>Boolean</code>
  * [.isDataUrl(input)](#module_UrlUtil..UrlUtil.isDataUrl) ⇒ <code>Boolean</code>
  * [.isImageDataUrl(input)](#module_UrlUtil..UrlUtil.isImageDataUrl) ⇒ <code>Boolean</code>
  * [.getUrlFromViewSourceUrl(input)](#module_UrlUtil..UrlUtil.getUrlFromViewSourceUrl) ⇒ <code>String</code>
  * [.getViewSourceUrlFromUrl(input)](#module_UrlUtil..UrlUtil.getViewSourceUrlFromUrl) ⇒ <code>String</code>
  * [.getHostname(input)](#module_UrlUtil..UrlUtil.getHostname) ⇒ <code>String</code>

<a name="new_module_UrlUtil..UrlUtil_new"></a>
#### new UrlUtil()
A simple class for parsing and dealing with URLs.

<a name="module_UrlUtil..UrlUtil.getScheme"></a>
#### UrlUtil.getScheme(input) ⇒ <code>String</code>
Extracts the scheme from a value.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>String</code> - The found scheme.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input value. |

<a name="module_UrlUtil..UrlUtil.hasScheme"></a>
#### UrlUtil.hasScheme(input) ⇒ <code>Boolean</code>
Checks if an input has a scheme (like http:// ftp://).

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Whether or not the input has a scheme.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input value. |

<a name="module_UrlUtil..UrlUtil.isNotURL"></a>
#### UrlUtil.isNotURL(input) ⇒ <code>Boolean</code>
Checks if a string is not a url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Returns true if this is not a valid url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input value. |

<a name="module_UrlUtil..UrlUtil.getUrlFromInput"></a>
#### UrlUtil.getUrlFromInput(input) ⇒ <code>String</code>
Converts an input string into a url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>String</code> - The formatted url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input value. |

<a name="module_UrlUtil..UrlUtil.isURL"></a>
#### UrlUtil.isURL(input) ⇒ <code>Boolean</code>
Checks if a given input is a valid url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Whether or not this is a valid url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

<a name="module_UrlUtil..UrlUtil.isViewSourceUrl"></a>
#### UrlUtil.isViewSourceUrl(input) ⇒ <code>Boolean</code>
Checks if a url is a view-source url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Whether or not this is a view-source url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

<a name="module_UrlUtil..UrlUtil.isDataUrl"></a>
#### UrlUtil.isDataUrl(input) ⇒ <code>Boolean</code>
Checks if a url is a data url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Whether or not this is a data url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

<a name="module_UrlUtil..UrlUtil.isImageDataUrl"></a>
#### UrlUtil.isImageDataUrl(input) ⇒ <code>Boolean</code>
Checks if a url is an image data url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Whether or not this is an image data url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

<a name="module_UrlUtil..UrlUtil.getUrlFromViewSourceUrl"></a>
#### UrlUtil.getUrlFromViewSourceUrl(input) ⇒ <code>String</code>
Converts a view-source url into a standard url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>String</code> - A normal url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The view-source url. |

<a name="module_UrlUtil..UrlUtil.getViewSourceUrlFromUrl"></a>
#### UrlUtil.getViewSourceUrlFromUrl(input) ⇒ <code>String</code>
Converts a url into a view-source url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>String</code> - The view-source url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

<a name="module_UrlUtil..UrlUtil.getHostname"></a>
#### UrlUtil.getHostname(input) ⇒ <code>String</code>
Extracts the hostname or returns undefined

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil..UrlUtil)</code>  
**Returns**: <code>String</code> - The host name.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

