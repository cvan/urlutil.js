# URL Util

Gadget url utility of future.

## API Reference

<a name="module_UrlUtil.getScheme"></a>
### UrlUtil.getScheme(input) ⇒ <code>String</code>
Extracts the scheme from a value.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>String</code> - The found scheme.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input value. |

<a name="module_UrlUtil.hasScheme"></a>
### UrlUtil.hasScheme(input) ⇒ <code>Boolean</code>
Checks if an input has a scheme (like http:// ftp://).

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Whether or not the input has a scheme.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input value. |

<a name="module_UrlUtil.isNotURL"></a>
### UrlUtil.isNotURL(input) ⇒ <code>Boolean</code>
Checks if a string is not a url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Returns true if this is not a valid url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input value. |

<a name="module_UrlUtil.getUrlFromInput"></a>
### UrlUtil.getUrlFromInput(input) ⇒ <code>String</code>
Converts an input string into a url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>String</code> - The formatted url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input value. |

<a name="module_UrlUtil.isURL"></a>
### UrlUtil.isURL(input) ⇒ <code>Boolean</code>
Checks if a given input is a valid url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Whether or not this is a valid url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

<a name="module_UrlUtil.isViewSourceUrl"></a>
### UrlUtil.isViewSourceUrl(input) ⇒ <code>Boolean</code>
Checks if a url is a view-source url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Whether or not this is a view-source url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

<a name="module_UrlUtil.isDataUrl"></a>
### UrlUtil.isDataUrl(input) ⇒ <code>Boolean</code>
Checks if a url is a data url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Whether or not this is a data url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

<a name="module_UrlUtil.isImageDataUrl"></a>
### UrlUtil.isImageDataUrl(input) ⇒ <code>Boolean</code>
Checks if a url is an image data url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>Boolean</code> - Whether or not this is an image data url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

<a name="module_UrlUtil.getUrlFromViewSourceUrl"></a>
### UrlUtil.getUrlFromViewSourceUrl(input) ⇒ <code>String</code>
Converts a view-source url into a standard url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>String</code> - A normal url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The view-source url. |

<a name="module_UrlUtil.getViewSourceUrlFromUrl"></a>
### UrlUtil.getViewSourceUrlFromUrl(input) ⇒ <code>String</code>
Converts a url into a view-source url.

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>String</code> - The view-source url.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

<a name="module_UrlUtil.getHostname"></a>
### UrlUtil.getHostname(input) ⇒ <code>String</code>
Extracts the hostname or returns undefined

**Kind**: static method of <code>[UrlUtil](#module_UrlUtil)</code>  
**Returns**: <code>String</code> - The host name.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | The input url. |

