btn=document.createElement("Button");
btn.innerHTML="click";
document.body.appendChild(btn);

flex=document.createElement("p");
document.body.appendChild(flex);
	
btn.onclick=function()
{
	var random_number=(Math.random()*6)
	random_number = Math.floor(random_number);
	flex.innerHTML=random_number;
}
random()

