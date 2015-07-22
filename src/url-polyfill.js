// Simple parseURI fallback from: http://blog.stevenlevithan.com/archives/parseuri
(function (global) {
  'use strict';

  if (global.URL) { return; }

  var options = {
    strictMode: false,
    key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
    q:   {
      name:   "queryKey",
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  };


  class URL {
    constructor(str) {
      console.log('parsing url');
      var o = options,
        m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        i   = 14;

      while (i--) this[o.key[i]] = m[i] || "";

      this[o.q.name] = {};
      this[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) this[o.q.name][$1] = $2;
      });

      // Match URL spec.
      this.href = this.source;

      return this;
    }
  };

  global.URL = URL;

}(this));
