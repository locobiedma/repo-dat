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

localStorage.setItem("punt_maxima", 4578899);
var foo = localStorage.getItem("punt_maxima");
console.log("la puntuacion es: " + foo);
localStorage.setItem("punt_maxima", 45);
var foo = localStorage.getItem("punt_maxima");
console.log("ahora es: " + foo);


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

// monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

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

var monster = {
	speed: 50 // movement in pixels per second
};


var princess = {};

var stone = {};
var princessesCaught = 0;
var muertes = 0;

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
	stone.x = 30 + (Math.random() * (canvas.width - 64));
	stone.y = 30 + (Math.random() * (canvas.height - 64));
	
	//impedir que la piedra se salga de los bordes
	if(stone.y < 35){stone.y = stone.y + 35}
	if(stone.y > 413){stone.y = stone.y - 35}
	if(stone.x < 27){stone.x = stone.y + 27}
	if(stone.x > 448){stone.x = stone.y - 27}
	
	//Posicion de las mostruos
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
	
	//impedir que el monstruo se salga de los bordes
	if(monster.y < 35){monster.y = monster.y + 35}
	if(monster.y > 413){monster.y = monster.y - 35}
	if(monster.x < 27){monster.x = monster.y + 27}
	if(monster.x > 448){monster.x = monster.y - 27}
	
	
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
	
	
};

// Update game objects
var update = function (modifier) {

	//chocar con la piedra por debajo
	if ((hero.y <= stone.y + 30) && (hero.y > stone.y)){ 
		if((hero.x + 32 >= stone.x && hero.x + 32 <= stone.x + 30) || (hero.x >= stone.x && hero.x <= stone.x + 30)){
			var subir = false;
		}
		else{
			var subir = true;
		}
			
	}
	else{
		var subir = true;
	}
	
	//chocar la piedra por encima
	if ((hero.y + 32 <= stone.y + 30) && (hero.y + 32 > stone.y)){ 
		if((hero.x + 32 >= stone.x && hero.x + 32 <= stone.x + 30) || (hero.x >= stone.x && hero.x <= stone.x + 30)){
			var bajar = false;
		}
		else{
			var bajar = true;
		}
			
	}
	else{
		var bajar = true;
	}
	
	//chocar la piedra por la izquierda
	if ((hero.x + 32 <= stone.x + 30) && (hero.x + 32 >= stone.x)){ 
		if((hero.y + 32 >= stone.y && hero.y + 32 <= stone.y + 30) || (hero.y >= stone.y && hero.y <= stone.y + 30)){
			var derecha = false;
		}
		else{
			var derecha = true;
		}
			
	}
	else{
		var derecha = true;
	}
	
	//chocar la piedra por la derecha
	if ((hero.x <= stone.x + 30) && (hero.x >= stone.x)){ 
		if((hero.y + 32 >= stone.y && hero.y + 32 <= stone.y + 30) || (hero.y >= stone.y && hero.y <= stone.y + 30)){
			var izquierda = false;
		}
		else{
			var izquierda = true;
		}
			
	}
	else{
		var izquierda = true;
	}
	
	//El monstruo esta debajo del heroe
	if (monster.y >= hero.y + 16)
		var monstruo_debajo = true;
		
	//El monstruo esta a la izquierda del heroe
	if (monster.x >= hero.x + 16)
		var monstruo_izquierda = true;
	
		
	if ((38 in keysDown) && (hero.y >= 35) && (subir == true)) { // Player holding up
		hero.y -= hero.speed * modifier;
		if (monstruo_debajo == true){

			monster.y -= monster.speed * modifier;
		}
		else
			monster.y += monster.speed * modifier;
	}
	if ((40 in keysDown) && (hero.y < 413) && (bajar == true)) { // Player holding down
		hero.y += hero.speed * modifier;
		if ((monstruo_debajo == true)){
			monster.y -= monster.speed * modifier;
		}
		else
			monster.y += monster.speed * modifier;
	}
	if ((37 in keysDown) && (hero.x > 27) && (izquierda == true)) { // Player holding left
			hero.x -= hero.speed * modifier;
			if(monstruo_izquierda == true)
				monster.x -= monster.speed * modifier;
			else
				monster.x += monster.speed * modifier;
	}
	if ((39 in keysDown) && (hero.x < 448) && (derecha == true)) { // Player holding right
			hero.x += hero.speed * modifier;
			if(monstruo_izquierda == true)
				monster.x -= monster.speed * modifier;
			else
				monster.x += monster.speed * modifier;
	}

	// el heroe coge a la princesa
	if (
		hero.x <= (princess.x + 16)
		&& princess.x <= (hero.x + 16)
		&& hero.y <= (princess.y + 16)
		&& princess.y <= (hero.y + 32)
	) {
		++princessesCaught;
		monster.speed += 10;
		reset();
	}
	
	// el monstruo mata al heroe
	if (
		hero.x <= (monster.x + 16)
		&& monster.x <= (hero.x + 16)
		&& hero.y <= (monster.y + 16)
		&& monster.y <= (hero.y + 32)
	) {
		++muertes;
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
	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}


	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Princesas salvadas: " + princessesCaught, 32, 32);
	ctx.fillText("Muertes: " + muertes, 32, 64);
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
