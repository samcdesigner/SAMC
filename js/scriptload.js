(function(){
  var preload = document.getElementById("preload");
	var loading = 0;
	var id = setInterval(frame, 64);

	function frame(){
		if (loading == 250){
			clearInterval(id);
			window.open("portfolio", "_self");
		} else {
			loading = loading + 1;
			if(loading == 248) {
				preload.style.animation = "fadeout 1s ease";
			}
		}
	}
})();
