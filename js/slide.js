	var stt = 0;
	var max = document.getElementsByClassName('run').length;
	var min = 0;

	function itemID(stt){
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
			itemID(stt).style.display="block";		
		}
		
		console.log('item next: ' + stt);
	}




	setInterval(function(){next();}, 3000);
   



//an chatbot
	var chatbot = document.getElementById("uhchatboz")
	chatbot.onclick= function (){
		if(chatbot.style.bottom == "-320px")
			chatbot.style.bottom = "0px";
		else
			chatbot.style.bottom = "-320px";
	}

	
	
// set localStorage
		function setid(id)
		{
			localStorage.setItem("id", id);
		}
////////////////////////////////////////////////////////////
		
		 window.addEventListener("scroll", 
		 	function() 
		 	{
	           
	        
	            if (pageYOffset > 380) {
	                menu.style.backgroundColor = "#8c56c79c";

	            } else
	                menu.style.backgroundColor = "#4f3c3c4a";
        	}
        )