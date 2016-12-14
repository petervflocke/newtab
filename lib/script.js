function CreateTab()
{

  var myHTML	= '<div class="table">';

	for (var y=0; y < row; y++) {
		myHTML += '  <div class="table-row">';
		for(var x=0; x < col; x++){
			var title = bookmark[x][y]['title'];
			var url   = bookmark[x][y]['url'];
			var thumb = bookmark[x][y]['thumb'];
			if (url != '') {
			    myHTML += '<div class="table-cell">' + 
				      '<a href="' + 
				      url + '">\n' +
				      '<img class="big" src="' +
				      thumb + '" />' +
				      '<div id="title">'+
				      title + '</div>' +
				      '  </a>' +
				      '  </div>';
			} else { 
			  myHTML += '<div class="table-cell nohover"></div>'; 
			}
		};
		myHTML += '</div>';
	};
	myHTML += '</div>';
	document.getElementById("myDiv").innerHTML = myHTML;	
}

