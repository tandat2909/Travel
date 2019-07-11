	var stt = 0;
	var max = document.getElementsByClassName('run').length;
	var min = 0;

	function prev () {
		stt--;
		if(stt < min)
		{
			
			document.getElementById(stt+1).style.display="none";
			stt = max;
			document.getElementById(stt).style.display="block";
			//document.getElementById(stt).attr('class',animation);
		}
		else
		{
			document.getElementById(stt+1).style.display="none";
			if(stt-1 == -1)
			document.getElementById(0).style.display="block";
			else
			document.getElementById(stt).style.display="block";
			//document.getElementById(stt).attr('class',animation);
			
		}
		
		console.log('item prev: ' + stt  );
	}

	function next () {
		stt++;
		if(stt > max)
		{
			
			document.getElementById(stt-1).style.display="none";
			stt = min;
			document.getElementById(stt).style.display="block";
			//document.getElementById(stt).attr('class',animation);
		}
		else
		{
			document.getElementById(stt-1).style.display="none";
			if(stt + 1 == max + 1)
			document.getElementById(max).style.display="block";
			else
			document.getElementById(stt).style.display="block";
			//document.getElementById(stt).attr('class',animation);
		
		}
		
		console.log('item next: ' + stt  );
	}

	setInterval(next().click, 4000);