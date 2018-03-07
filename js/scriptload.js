(function(){
  var preload = document.getElementById("preload");
	var loading = 0;
	var id = setInterval(frame, 64);

	function frame(){
		if (loading == 200){
			clearInterval(id);
			window.open("portfolio.html", "_self");
		} else {
			loading = loading + 1;
			if(loading == 199) {
				preload.style.animation = "fadeout 1s ease";
			}
		}
	}
})();
