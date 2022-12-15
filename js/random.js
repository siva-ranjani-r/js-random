/*function random()
{
	var random_number=(Math.random()*6)
	random_number = Math.floor(random_number);
	return random_number;
	console.write(random_number);
}
random()*/
var limit=parseInt(prompt("Enter the value"));
var string=" ";
for(i=0;i<limit;i++)
{
	for(j=0;j<limit;j++)
	{
		if(i = 0 || i == limit- 1) 
		{
			string += "*";
		}
		else
		{
			string +=" ";
		}
	}
	string="\n";
	document.write(string);
}
