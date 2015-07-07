window.onload = function()	{
	
	var divArray = [document.getElementById('homeLayer'),document.getElementById('secondLayer'),document.getElementById('thirdLayer'),document.getElementById('fourthLayer'),document.getElementById('fifthLayer')];
	function hideDiv(div)	{
		div.style.display = "none";
	}
	
	//This is for the muscle mechanics section
	document.getElementById('button1').onclick = function()	{
		for(var i = 0;i < divArray.length;i++)	{
			if(divArray[i].style.display = "block")	{
				hideDiv(divArray[i]);
				document.getElementById('secondLayer').style.display = "block";
			}
		}
	}
	
	//This is for the injury recovery section.
	document.getElementById('button2').onclick = function()	{
		for(var i = 0;i < divArray.length;i++)	{
			if(divArray[i].style.display = "block")	{
				hideDiv(divArray[i]);
				document.getElementById('thirdLayer').style.display = "block";
			}
		}
	}
	
	//This is for the warmups & stretches section.
	document.getElementById('button3').onclick = function()	{
		for(var i = 0;i < divArray.length;i++)	{
			if(divArray[i].style.display = "block")	{
				hideDiv(divArray[i]);
				document.getElementById('fourthLayer').style.display = "block";
			}
		}
	}
	
	//This is for the drills section
	document.getElementById('button4').onclick = function()	{
		for(var i = 0;i < divArray.length;i++)	{
			if(divArray[i].style.display = "block")	{
				hideDiv(divArray[i]);
				document.getElementById('fifthLayer').style.display = "block";
			}
		}
	}
	
	//This is for the home section
	document.getElementById('bigH1').onclick = function()	{
		for(var i = 0;i < divArray.length;i++)	{
			if(divArray[i].style.display = "block")	{
				hideDiv(divArray[i]);
				document.getElementById('homeLayer').style.display = "block";
			}
		}
	}
}