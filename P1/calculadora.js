$(document).ready(function() {
    var op_izquierda="";
    var op_derecha="";
    var estado=1;
    var resultado;
    var op="";
    var bloqueado = false;
    
    var tengo_punto_primero = false;
    var tengo_punto_segundo = false;
    var contador_primero = 0;
    var contador_segundo = 0;

    $("#uno").click(function(event) {
    	numeros(1, "1");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 97) || (e.keyCode == 49))
		numeros(1, "1");
    });
    
    $("#dos").click(function(event) {
     	numeros(2, "2");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 98) || (e.keyCode == 50))
		numeros(2, "2");
    });
    
    $("#tres").click(function(event) {
    	numeros(3, "3");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 99) || (e.keyCode == 51))
		numeros(3, "3");
    });
    
    $("#cuatro").click(function(event) {
    	numeros(4, "4");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 100) || (e.keyCode == 52))
		numeros(4, "4");
    });
    
    $("#cinco").click(function(event) {
    	numeros(5, "5");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 101) || (e.keyCode == 53))
		numeros(5, "5");
    });
    
    $("#seis").click(function(event) {
    	numeros(6, "6");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 102) || (e.keyCode == 54))
		numeros(6, "6");
    });
    
    $("#siete").click(function(event) {
    	numeros(7, "7");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 103) || (e.keyCode == 55))
		numeros(7, "7");
    });
    
    $("#ocho").click(function(event) {
    	numeros(8, "8");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 104) || (e.keyCode == 56))
		numeros(8, "8");
    });
    
    $("#nueve").click(function(event) {
    	numeros(9, "9");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 105) || (e.keyCode == 57))
		numeros(9, "9");
    });
    
    $("#cero").click(function(event) {
    	numeros(0, "0");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 96) || (e.keyCode == 48))
		numeros(0, "0");
    });
    
    $("#punto").click(function(event) {
    	Punto();
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 110) || (e.keyCode == 46)){
		Punto();
	}
    });
      
    $("#sumar").click(function(event) {
    	operacion("+", "sumar");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 107) || (e.keyCode == 43))
		operacion("+", "sumar");
    }); 
    
    $("#restar").click(function(event) {
    	operacion("-", "restar");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 109) || (e.keyCode == 45))
		operacion("-", "restar");
    }); 
    
    $("#dividir").click(function(event) {
    	operacion("/", "dividir");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 111) || (e.keyCode == 47))
		operacion("/", "dividir");
    }); 
    
    $("#multiplicar").click(function(event) {
    	operacion("x", "multiplicar");
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 106) || (e.keyCode == 42))
		operacion("x", "multiplicar");
    }); 
    
    var main = function () {
	if (estado == 2){
		if (op == "sumar")
	        	op_izquierda_num = (op_izquierda_num) + (op_derecha_num);

                else if(op == "restar")
	        	op_izquierda_num = (op_izquierda_num) - (op_derecha_num);

                else if(op == "multiplicar")
	        	op_izquierda_num = (op_izquierda_num) * (op_derecha_num);

                else if(op == "dividir")
	        	op_izquierda_num = (op_izquierda_num) / (op_derecha_num);
                op_derecha = "";      
	}
	if(estado == 1)
                estado = 2;
    };
    
    $("#igual").click(function(event) {
    	Resultado();
    });
    
    $(document).keydown(function(e){
    	if (bloqueado == false){
		if ((e.keyCode == 13) || (e.keyCode == 13))
			Resultado();
	}
    }); 
    
    $("#borrar").click(function(event) {
    	reiniciar();
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 8) || (e.keyCode == 8))
		reiniciar();
    }); 
    
     var reiniciar = function () {
	op = "";
    	op_izquierda = "";
    	op_derecha = "";
    	estado = 1; 
    	bloqueado = false;
        $("#display").empty();
    };
    
    
    var numeros = function(numero, texto){
    	console.log("bloqueado es: " + bloqueado);
    	if (bloqueado == false){
		$("#display").append(numero);
		if (estado == 1){
			op_izquierda = op_izquierda + texto;
			op_izquierda_num = parseInt(op_izquierda);
			if(tengo_punto_primero == true){
				console.log("Aumento el contador de la izquierda");
				contador_primero ++;
			}		
		}
		else if (estado == 2){
			op_derecha = op_derecha + texto;
			op_derecha_num = parseInt(op_derecha);
			if(tengo_punto_segundo == true){
				contador_segundo ++;
			}
		}
	}
    };
    
    var operacion = function(texto, operacion){
    	if (bloqueado == false){
		$("#display").append(texto);
		main();
		op = operacion;
	}
    };
    
    var evaluarPuntos = function(){
    	if (tengo_punto_primero == true){
	   	op_izquierda_num = (op_izquierda_num / (Math.pow(10,contador_primero)));
	   	tengo_punto_primero = false;
	   	contador_primero=0;
	   }
	   if (tengo_punto_segundo == true){
	   	op_derecha_num = (op_derecha_num / (Math.pow(10,contador_segundo)));
	   	tengo_punto_segundo = false;
	   	contador_segundo=0;
	   }
    };
    
    var calcularResultado = function(){
    	if (op == "sumar")
		resultado = op_izquierda_num + op_derecha_num;
	else if (op == "restar")
		resultado = op_izquierda_num - op_derecha_num;
	else if (op == "multiplicar")
		resultado = op_izquierda_num * op_derecha_num;
	else if (op == "dividir"){
		resultado = op_izquierda_num / op_derecha_num;
		if (op_derecha_num == 0){
			$("#display").empty();
			$("#display").append("MATH ERROR - PULSA BORRAR");
			bloqueado = true;
		}
	}
    };
    
    var Resultado = function(){
    	if (bloqueado == false){
   		if((op_izquierda != "")&&(op_derecha != "")){
   			evaluarPuntos();
   			console.log("En igual el primero es: " + op_izquierda_num + " y el segundo " + op_derecha_num);
			calcularResultado();
			if (bloqueado == false){
		       	 	$("#display").append(" = ");
				$("#display").append(resultado);
			}
		}
		else{
			$("#display").empty();
			$("#display").append("SINTAX ERROR - PULSA BORRAR");
			bloqueado = true;
		}
	}
    };
    
    var Punto = function(){
    	if (bloqueado == false){
    		if (estado == 1){
    			tengo_punto_primero = true;
    			console.log("pongo a true el primero de las comas");
    		}
    		else 
    			tengo_punto_segundo = true;
		$("#display").append(".");
	}
    };
});
