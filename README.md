##Introduction:

Home Page or a new tab page with most used quick links.


###Screenshot
![https://raw.githubusercontent.com/petervflocke/newtab/master/Screenshot.png](https://raw.githubusercontent.com/petervflocke/newtab/master/Screenshot.png  "new tab / home page")

###Config

In the file `source.js` define a matrix of col x row. For each tile provide:

- (optional) titel 
- url with a link
- link to the icon

It is neccessary to define only used/displayed tiles, the empy ones can be left.

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
All icons are stored in the ./img folder.
Google shortcats are "hardcoded"

###Install
Clone / get all files to your local hard drive and create a new tab or home page link.

This can be also installed on Internet if you have own place to host it.