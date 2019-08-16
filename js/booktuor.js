//dataBase
var dataBase = new Array();
					  //ID 		NameTuor			Itinerary					prie
	dataBase[0] = new Array("100","9 Day Vietnam Tour","9 Day Vietnam Tour Itinerary",645)
	dataBase[1] = new Array("101","13 Day Highlights of Vietnam with Sapa Trek","13 Day Highlights of Vietnam Tour Itinerary",970)
	dataBase[2] = new Array("102","14 Day Spectacular Vietnam Tour","14 Day Spectacular Vietnam Itinerary",1200)
	dataBase[3] = new Array("201",'10 Day Highlights of Vietnam tour','10 Day Vietnam Tour starts from Hanoi',529)
	dataBase[4] = new Array("202","4 Day Southern Vietnam Tour","4 Day Southern Vietnam Itinerary",175)
	dataBase[5] = new Array("203","5 Day Southern Vietnam Tour","5 Day Southern Vietnam Tour Itinerary",255)
	dataBase[6] = new Array("204","6 Day Northern Vietnam Tour","6 Day Northern Vietnam Tour Itinerary ",230)

	var ID = localStorage.getItem("id"); //get ID
	// search ID in dataBase
	for (var i = 0; i < dataBase.length;i++) 
	{
		if(dataBase[i][0] == ID )
		{
			ID = i
		}
	}
	
	output();

	//set date book tuor;
	var time = new Date();
	day = time.getDate();

	alert(day);








	function convertToVND(mony)
	{
		return mony*23175.95;
	}

	// format Number
	function formatNumber(nStr, decSeperate, groupSeperate) {
            nStr += '';
            x = nStr.split(decSeperate);
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
            }
            return x1 + x2;
        }

	function totalAmount()
	{
		var adults=parseFloat(document.getElementById('adults').value);
		var free75 = parseFloat(document.getElementById('free75').value);
		var total = dataBase[ID][3];
		total = dataBase[ID][3]*adults + dataBase[ID][3]*free75*0.75;
		document.getElementById('total').innerHTML= formatNumber(total,'.',',') + ' usd'  + " &emsp;  " +  formatNumber(convertToVND(total).toFixed(0),'.',',') + ' vnd';
	}

	function output()
	{
		document.getElementById('tuor').innerHTML= dataBase[ID][1];
		document.getElementById('itineraries').innerHTML= dataBase[ID][2];
		document.getElementById('price').innerHTML= dataBase[ID][3] + ' usd';
		document.getElementById('total').innerHTML = dataBase[ID][3] + ' usd' + " &emsp;  " +  formatNumber(convertToVND(dataBase[ID][3]).toFixed(0),'.',',') + ' vnd' ;
	}
 


