function opentap(e, tapId){
	var i, tapcontents, tablink;
	tapcontents = document.getElementsByClassName("TapContent");

	for (i = 0; i < tapcontents.length; i++)
		tapcontents[i].style.display = 'none';


	tapcontents[tapId].style.display = 'block';
    tapcontents[tapId].classList.add('animated', 'fadeInUp');    

	tablinks = document.getElementsByClassName("tap-link");
  	for (i = 0; i < tablinks.length; i++){
    	tablinks[i].className = tablinks[i].className.replace(" active", " ");
  	}
	e.currentTarget.className += " active";
}