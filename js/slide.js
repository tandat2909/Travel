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




	 var aaa = setInterval(function(){next();}, 3000);
        $("#next,#prev").on({
            mouseenter: function(){clearInterval(aaa);},
           mouseleave: function(){setInterval(function(){next();}, 3000);}
        });
function init()
{
	new WOW().init();
}

//an chatbot
	var chatbot = document.getElementById("uhchatboz")
	chatbot.onclick= function (){
		if(chatbot.style.bottom == "-320px")
			chatbot.style.bottom = "0px";
		else
			chatbot.style.bottom = "-320px";
	}
	
