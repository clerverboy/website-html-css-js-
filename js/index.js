var arr = document.querySelectorAll(".box-page");
for(var n=0;n<arr.length;n++)
{
	for(var r=0;r<3;r++)
	{
		for(var l=0;l<3;l++)
		{
			var divs = document.createElement("div");
			divs.style.cssText = "width: 100px;height:100px; border:2px solid #fff;box-sizing:border-box;position:absolute;background-image:url(../images/p"+(n+1)+".jpg);background-size:300px 300px";
			arr[n].appendChild(divs);
			
			divs.style.left = l*100+"px";
			divs.style.top = r*100+"px";

			divs.style.backgroundPositionX = -l*100+"px";
			divs.style.backgroundPositionY = -r*100+"px";
		}
	}
}