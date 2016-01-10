var aData = [];
for(var i=1;i<=16;i++){
	aData.push('./img/'+i+'.jpg');
}

//
function create(aData){
	var sHtml = '';
	var aRemove=[];
	for(var i=0,len=aData.length;i<len;i++){
		sHtml+='<li style="background-image:url('+aData[i]+')"></li>'
	}
	picList.innerHTML=sHtml;
	var aLi = picList.getElementsByTagName('li');
	var oBtn = page.getElementsByClassName('btn');
	oBtn[1].addEventListener('touchend',fnEnd,false);
	oBtn[0].addEventListener('touchend',fnRemove,false);
	function fnEnd(){
		this.innerHTML = '取消';
		
		for(var i=0,len=aLi.length;i<len;i++){
			aLi[i].index=i;
			aLi[i].addEventListener('touchend',selected,false);
		}
	}
	function selected(){
		this.style.opacity='0.5';
		oBtn[0].style.display='block';
	}
	function fnRemove(){
		
	}

}
create(aData);
