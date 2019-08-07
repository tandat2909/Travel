//=========get ID ==========

var dataBase = new Array();

	dataBase[0] = new Array("100","9 Day Vietnam Tour","9 Day Vietnam Tour Itinerary",645)
	dataBase[1] = new Array("101","13 Day Highlights of Vietnam with Sapa Trek","13 Day Highlights of Vietnam Tour Itinerary",970)



	function getId(id)
	{
		for (var i = 0; i < dataBase.length;i++) 
		{
			if(dataBase[i][0] == id )
				return i;
		}
	}

	function totalAmount(){
		var ID = getId('100');

		var adults=parseFloat(document.getElementById('adults').value);
		var free75 = parseFloat(document.getElementById('free75').value);
		var total = dataBase[ID][3];
		total = dataBase[ID][3]*adults + dataBase[ID][3]*free75*0.6;
		document.getElementById('total').innerHTML= total.toFixed(1) + ' 	usd';

	}


	function output()
	{
		var ID = getId('100');
		console.log(ID);
		document.getElementById('tuor').innerHTML= dataBase[ID][1];
		document.getElementById('itineraries').innerHTML= dataBase[ID][2];
		document.getElementById('price').innerHTML= dataBase[ID][3] + ' usd';
		document.getElementById('total').innerHTML = dataBase[ID][3] + ' usd';
	}







