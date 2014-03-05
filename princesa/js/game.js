// Original game from:
// http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
// Slight modifications by Gregorio Robles <grex@gsyc.urjc.es>
// to meet the criteria of a canvas class for DAT @ Univ. Rey Juan Carlos

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// princess image
var princessReady = false;
var princessImage = new Image();
princessImage.onload = function () {
	princessReady = true;
};
princessImage.src = "images/princess.png";

// stone image
var stoneReady = false;
var stoneImage = new Image();
stoneImage.onload = function () {
	stoneReady = true;
};
stoneImage.src = "images/stone.png";

// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};
var princess = {};

var stone = {};
var princessesCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a princess
var reset = function () {
	hero.x = canvas.width / 2; 
	hero.y = canvas.height / 2;

	// Throw the princess somewhere on the screen randomly
	princess.x = 32 + (Math.random() * (canvas.width - 64));
	princess.y = 32 + (Math.random() * (canvas.height - 64));
	
	//impedir que la princesa se salga de los bordes
	if(princess.y < 35){princess.y = princess.y + 35}
	if(princess.y > 413){princess.y = princess.y - 35}
	if(princess.x < 27){princess.x = princess.y + 27}
	if(princess.x > 448){princess.x = princess.y - 27}
	
	//Posicion de las piedras
	stone.x = 32 + (Math.random() * (canvas.width - 64));
	stone.y = 32 + (Math.random() * (canvas.height - 64));
	
	
	
	//impedir que la piedra toque a la princesa
	if ((stone.x + 30 <= princess.x + 32) && //abajo a la izquierda
		(stone.x + 30 >= princess.x) && 
		(stone.y <= princess.y) && 
		(stone.y >= princess.y + 32)){  
			console.log("lo cambio porque se tocaban");
			stone.x = stone.x - 15;
	}
	else if ((stone.x + 30 <= princess.x + 32) && //arriba a la izquierda
		(stone.x + 30 >= princess.x) &&
		(stone.y + 30 <= princess.y + 32) &&
		(stone.y + 30 >= princess.y)){
			console.log("lo cambio porque se tocaban");
			stone.x = stone.x - 15;
	}
	else if ((stone.x >= princess.x) && //arriba a la derecha
		(stone.x <= princess.x + 30) &&
		(stone.y + 30 <= princess.y + 30) &&
		(stone.y + 30 >= princess.y)){
			console.log("lo cambio porque se tocaban");
			stone.x = stone.x + 15;
	}
	else if ((stone.x <= princess.x + 32) && //abajo a la derecha
		(stone.x >= princess.x) &&
		(stone.y >= princess.y) &&
		(stone.y <= princess.y + 32)){
			console.log("lo cambio porque se tocaban");
			stone.x = stone.x + 15
	}
	
	//impedir que la piedra toque al principe
	if ((stone.x + 30 <= hero.x + 32) && //abajo a la izquierda
		(stone.x + 30 >= hero.x) && 
		(stone.y <= hero.y) && 
		(stone.y >= hero.y + 32)){  
			console.log("lo cambio porque se tocaban");
			stone.x = stone.x - 15;
	}
	else if ((stone.x + 30 <= hero.x + 32) && //arriba a la izquierda
		(stone.x + 30 >= hero.x) &&
		(stone.y + 30 <= hero.y + 32) &&
		(stone.y + 30 >= hero.y)){
			console.log("lo cambio porque se tocaban");
			stone.x = stone.x - 15;
	}
	else if ((stone.x >= hero.x) && //arriba a la derecha
		(stone.x <= hero.x + 30) &&
		(stone.y + 30 <= hero.y + 30) &&
		(stone.y + 30 >= hero.y)){
			console.log("lo cambio porque se tocaban");
			stone.x = stone.x + 15;
	}
	else if ((stone.x <= hero.x + 32) && //abajo a la derecha
		(stone.x >= hero.x) &&
		(stone.y >= hero.y) &&
		(stone.y <= hero.y + 32)){
			console.log("lo cambio porque se tocaban");
			stone.x = stone.x + 15
	}
	
	//impedir que la piedra se salga de los bordes
	if(stone.y < 35){stone.y = stone.y + 35}
	if(stone.y > 413){stone.y = stone.y - 35}
	if(stone.x < 27){stone.x = stone.y + 27}
	if(stone.x > 448){stone.x = stone.y - 27}
};

// Update game objects
var update = function (modifier) {
	if ((38 in keysDown) && (hero.y > 35)) { // Player holding up
		if (   !(   (stone.x <= hero.x + 35) && //abajo a la derecha
		(stone.x >= hero.x) &&
		(stone.y + 25 >= hero.y) &&
		(stone.y + 25 <= hero.y + 25) &&
		(stone.x + 30 <= hero.x + 32) &&
		(stone.x + 30 >= hero.x) &&
		(stone.y + 25 <= hero.y) &&
		(stone.y + 25>= hero.y + 32))    ) {
		
			hero.y -= hero.speed * modifier;
			
	}
			

	}
	if ((40 in keysDown) && (hero.y < 413)) { // Player holding down
		
			hero.y += hero.speed * modifier;

	}
	if ((37 in keysDown) && (hero.x > 27)) { // Player holding left
		
			hero.x -= hero.speed * modifier;

	}
	if ((39 in keysDown) && (hero.x < 448)) { // Player holding right
		
			hero.x += hero.speed * modifier;

	}

	// Are they touching?
	if (
		hero.x <= (princess.x + 16)
		&& princess.x <= (hero.x + 16)
		&& hero.y <= (princess.y + 16)
		&& princess.y <= (hero.y + 32)
	) {
		++princessesCaught;
		reset();
	}
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (princessReady) {
		ctx.drawImage(princessImage, princess.x, princess.y);
	}
	if (stoneReady) {
		ctx.drawImage(stoneImage, stone.x, stone.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Princesses caught: " + princessesCaught, 32, 32);
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
};

// Let's play this game!
reset();
var then = Date.now();
//The setInterval() method will wait a specified number of milliseconds, and then execute a specified function, and it will continue to execute the function, once at every given time-interval.
//Syntax: setInterval("javascript function",milliseconds);
setInterval(main, 1); // Execute as fast as possible
