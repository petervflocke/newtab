##Introduction:

Home Page or a new tab page with most used quick links.


###Screenshot


###Config

In the file `source.js` define a matrix of col x row. For each tile provide:

- (Optional) Titel 
- url with a link
- link to the icon


```javascript
var col = 6; /* x */
var row = 4; /* y */

     /* [x][y] */
bookmark[0][0] = {
	'title':'',
	'url':'http://de.pons.com/?l=depl',
	'thumb':'img/pons.png'
};

bookmark[1][0] = {
	'title':'',
	'url':'http://dict.leo.org/?lang=de&lp=ende',
	'thumb':'img/leo.png'
};
```
