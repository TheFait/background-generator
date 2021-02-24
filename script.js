var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var randButton = document.getElementById("random");

function updateBackground() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", updateBackground);

color2.addEventListener("input", updateBackground);

color1.value = "#ff0000";
color2.value = "#ffff00";

updateBackground();

function RGBToHex(r,g,b) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
  
	if (r.length == 1)
	  r = "0" + r;
	if (g.length == 1)
	  g = "0" + g;
	if (b.length == 1)
	  b = "0" + b;
  
	return "#" + r + g + b;
  }

  console.log(Math.floor(Math.random()*255))

  randButton.addEventListener("click", () => {
		color1.value = RGBToHex(Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255));
		color2.value = RGBToHex(Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255));
		updateBackground();
});