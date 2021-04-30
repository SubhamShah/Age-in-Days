function Age()
{
	var date=prompt('What is your birth date?');
	var age=(2021-date)*365;
	var h1=document.createElement('h1');
	var output=document.createTextNode('You are '+age+' days old');
	h1.setAttribute('id','Age');
	h1.appendChild(output);
	document.getElementById('box').appendChild(h1);
}
function set(){
	document.getElementById('Age').remove();
}