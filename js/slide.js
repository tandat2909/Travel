	var stt = 0;
	var max = document.getElementsByClassName('run').length;
	var min = 0;

	function itemID(stt)
	{
		return document.getElementById(stt)
	}
	
	function prev () {
		stt--;
		if(stt < min)
		{
			
			itemID(stt+1).style.display="none";
			stt = max;
			itemID(stt).style.display="block";
		}
		else
		{
			itemID(stt+1).style.display="none";
			if(stt-1 == -1)
			itemID(0).style.display="block";
			else
			itemID(stt).style.display="block";
			
			
		}
		
		console.log('item prev: ' + stt  );
	}
	
	

	function next () {
		stt++;
		if(stt > max)
		{
			
			itemID(stt-1).style.display="none";
			stt = min;
			itemID(stt).style.display="block";
			
		}
		else
		{
			itemID(stt-1).style.display="none";
			if(stt + 1 == max + 1)
			itemID(max).style.display="block";
			else
			itemID(stt).style.display="block";
			
		
		}
		
		console.log('item next: ' + stt  );
	}

	setInterval(function(){next();}, 4000);


	


	
/*
	var a = document.getElementById("uhchatboz")
	a.onclick= function (){
		if(a.style.bottom == "-320px")
			a.style.bottom = "0px";
		else
			a.style.bottom = "-320px";
	}
	*/
