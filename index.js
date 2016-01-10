var aData = [];
for(var i=1;i<=16;i++){
	aData.push('./img/'+i+'.jpg');
}

//
function create(aData){
	var sHtml = '';
	for(var i=0,len=aData.length;i<len;i++){
		sHtml+='<li style="background-image:url('+aData[i]+')"></li>'
	}
	picList.innerHTML=sHtml;
}
create(aData);
