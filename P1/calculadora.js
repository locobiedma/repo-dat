// hello-4.js

$(document).ready(function() {
    var op_izquierda="";
    var op_derecha="";
    var estado=1;
    var resultado;

    $("#uno").click(function(event) {

	$("#display").append(1);
	if (estado == 1){
	        op_izquierda = op_izquierda + "1";
	        console.log("op_izquierda es: " + op_izquierda);
	        op_izquierda_num = parseInt(op_izquierda);
	        console.log("op_izquierda_numero es: " + op_izquierda_num);
	}
	else if (estado == 2){
	        op_derecha = op_derecha + "1";
	        console.log("op_derecha es: " + op_derecha);
	        op_derecha_num = parseInt(op_derecha);
	        console.log("op_derecha_numero es: " + op_derecha_num);
	}
    });
    
     $("#dos").click(function(event) {

	$("#display").append(2);
	if (estado == 1){
	        op_izquierda = op_izquierda + "2";
	        console.log("op_izquierda es: " + op_izquierda);
	        op_izquierda_num = parseInt(op_izquierda);
	        console.log("op_izquierda_numero es: " + op_izquierda_num);
	}
	else if (estado == 2){
	        op_derecha = op_derecha + "2";
	        console.log("op_derecha es: " + op_derecha);
	        op_derecha_num = parseInt(op_derecha);
	        console.log("op_derecha_numero es: " + op_derecha_num);
	}
    });
    $("#tres").click(function(event) {

	$("#display").append(3);
	if (estado == 1){
	        op_izquierda = op_izquierda + "3";
	        console.log("op_izquierda es: " + op_izquierda);
	        op_izquierda_num = parseInt(op_izquierda);
	        console.log("op_izquierda_numero es: " + op_izquierda_num);
	}
	else if (estado == 2){
	        op_derecha = op_derecha + "3";
	        console.log("op_derecha es: " + op_derecha);
	        op_derecha_num = parseInt(op_derecha);
	        console.log("op_derecha_numero es: " + op_derecha_num);
	}
    });
    $("#cuatro").click(function(event) {

	$("#display").append(4);
	if (estado == 1){
	        op_izquierda = op_izquierda + "4";
	        console.log("op_izquierda es: " + op_izquierda);
	        op_izquierda_num = parseInt(op_izquierda);
	        console.log("op_izquierda_numero es: " + op_izquierda_num);
	}
	else if (estado == 2){
	        op_derecha = op_derecha + "4";
	        console.log("op_derecha es: " + op_derecha);
	        op_derecha_num = parseInt(op_derecha);
	        console.log("op_derecha_numero es: " + op_derecha_num);
	}
    });
    $("#cinco").click(function(event) {

	$("#display").append(5);
	if (estado == 1){
	        op_izquierda = op_izquierda + "5";
	        console.log("op_izquierda es: " + op_izquierda);
	        op_izquierda_num = parseInt(op_izquierda);
	        console.log("op_izquierda_numero es: " + op_izquierda_num);
	}
	else if (estado == 2){
	        op_derecha = op_derecha + "5";
	        console.log("op_derecha es: " + op_derecha);
	        op_derecha_num = parseInt(op_derecha);
	        console.log("op_derecha_numero es: " + op_derecha_num);
	}
    });
    $("#seis").click(function(event) {

	$("#display").append(6);
	if (estado == 1){
	        op_izquierda = op_izquierda + "6";
	        console.log("op_izquierda es: " + op_izquierda);
	        op_izquierda_num = parseInt(op_izquierda);
	        console.log("op_izquierda_numero es: " + op_izquierda_num);
	}
	else if (estado == 2){
	        op_derecha = op_derecha + "6";
	        console.log("op_derecha es: " + op_derecha);
	        op_derecha_num = parseInt(op_derecha);
	        console.log("op_derecha_numero es: " + op_derecha_num);
	}
    });
    $("#siete").click(function(event) {

	$("#display").append(7);
	if (estado == 1){
	        op_izquierda = op_izquierda + "7";
	        console.log("op_izquierda es: " + op_izquierda);
	        op_izquierda_num = parseInt(op_izquierda);
	        console.log("op_izquierda_numero es: " + op_izquierda_num);
	}
	else if (estado == 2){
	        op_derecha = op_derecha + "7";
	        console.log("op_derecha es: " + op_derecha);
	        op_derecha_num = parseInt(op_derecha);
	        console.log("op_derecha_numero es: " + op_derecha_num);
	}
    });
    $("#ocho").click(function(event) {

	$("#display").append(8);
	if (estado == 1){
	        op_izquierda = op_izquierda + "8";
	        console.log("op_izquierda es: " + op_izquierda);
	        op_izquierda_num = parseInt(op_izquierda);
	        console.log("op_izquierda_numero es: " + op_izquierda_num);
	}
	else if (estado == 2){
	        op_derecha = op_derecha + "8";
	        console.log("op_derecha es: " + op_derecha);
	        op_derecha_num = parseInt(op_derecha);
	        console.log("op_derecha_numero es: " + op_derecha_num);
	}
    });
    $("#nueve").click(function(event) {

	$("#display").append(9);
	if (estado == 1){
	        op_izquierda = op_izquierda + "9";
	        console.log("op_izquierda es: " + op_izquierda);
	        op_izquierda_num = parseInt(op_izquierda);
	        console.log("op_izquierda_numero es: " + op_izquierda_num);
	}
	else if (estado == 2){
	        op_derecha = op_derecha + "9";
	        console.log("op_derecha es: " + op_derecha);
	        op_derecha_num = parseInt(op_derecha);
	        console.log("op_derecha_numero es: " + op_derecha_num);
	}
    });
    $("#cero").click(function(event) {

	$("#display").append(0);
	if (estado == 1){
	        op_izquierda = op_izquierda + "0";
	        console.log("op_izquierda es: " + op_izquierda);
	        op_izquierda_num = parseInt(op_izquierda);
	        console.log("op_izquierda_numero es: " + op_izquierda_num);
	}
	else if (estado == 2){
	        op_derecha = op_derecha + "0";
	        console.log("op_derecha es: " + op_derecha);
	        op_derecha_num = parseInt(op_derecha);
	        console.log("op_derecha_numero es: " + op_derecha_num);
	}
    });
    
    $("#sumar").click(function(event) {

	$("#display").append("+");
	
	if (estado == 2){
	        //op_izquierda = op_izquierda_num + op_derecha_num;
	        op_izquierda_num = parseInt(op_izquierda) + parseInt(op_derecha);
                console.log("op_izquierda es: " + op_izquierda);  
                op_derecha = "";      
	}
	if(estado == 1){
                estado = 2;
        }
    });
    
    $("#restar").click(function(event) {

	$("#display").append("-");
	
	if (estado == 2){
	        op_izquierda_num = parseInt(op_izquierda) - parseInt(op_derecha);
                console.log("op_izquierda es: " + op_izquierda);  
                op_derecha = "";      
	}
	if(estado == 1){
                estado = 2;
        }
    });
    
    
    $("#igual").click(function(event) {
        console.log("al llegar a = el izquierdo es: " + op_izquierda_num + "y el derecho: " + op_derecha_num)
        resultado = op_izquierda_num + op_derecha_num;
        console.log("el resultado es: " + resultado);
        $("#display").append(" = ");
	$("#display").append(resultado);

    });
});
