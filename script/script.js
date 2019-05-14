window.onload = function() {
	const menu = document.querySelector(".menu");
	const for_menu = document.querySelector(".menu_for_phones");
	const stripes = document.querySelectorAll(".stripe");
	console.log(stripes);
	var open = false;
	menu.addEventListener("click", function(){
			if (open) {
				for_menu.style.left = "-95%";
				stripes[0].style.transform = "rotate(0deg)";
				stripes[1].style.opacity = "1";
				stripes[2].style.transform = "rotate(0deg)";
				for (var i = 0; i < stripes.length; i++) {
					stripes[i].style.marginTop = "5px";
				}
			} else {
				for_menu.style.left = "50%";
				stripes[0].style.transform = "rotate(-45deg)";
				stripes[1].style.opacity = "0";
				stripes[2].style.transform = "rotate(45deg)";
				for (var i = 0; i < stripes.length; i++) {
					stripes[i].style.marginTop = "-8px";
				}
			}
			open = !open;
	});
}