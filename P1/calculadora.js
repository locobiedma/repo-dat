$(document).ready(function() {
    var op_izquierda="";
    var op_derecha="";
    var estado=1;
    var resultado;
    var op="";
    var bloqueado = false;

    $("#uno").click(function(event) {
    	console.log("bloqueado es: " + bloqueado);
    	if (bloqueado == false){
		$("#display").append(1);
		if (estado == 1){
			op_izquierda = op_izquierda + "1";
			op_izquierda_num = parseInt(op_izquierda);
		}
		else if (estado == 2){
			op_derecha = op_derecha + "1";
			op_derecha_num = parseInt(op_derecha);
		}
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 97) || (e.keyCode == 49)){
		if (bloqueado == false){
			$("#display").append(1);
			if (estado == 1){
				op_izquierda = op_izquierda + "1";
				op_izquierda_num = parseInt(op_izquierda);
			}
			else if (estado == 2){
				op_derecha = op_derecha + "1";
				op_derecha_num = parseInt(op_derecha);
			}
		}
	}
    });
    
     $("#dos").click(function(event) {
     	if (bloqueado == false){
		$("#display").append(2);
		if (estado == 1){
			op_izquierda = op_izquierda + "2";
			op_izquierda_num = parseInt(op_izquierda);
		}
		else if (estado == 2){
			op_derecha = op_derecha + "2";
			op_derecha_num = parseInt(op_derecha);
		}
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 98) || (e.keyCode == 50)){
		if (bloqueado == false){
			$("#display").append(2);
			if (estado == 1){
				op_izquierda = op_izquierda + "2";
				op_izquierda_num = parseInt(op_izquierda);
			}
			else if (estado == 2){
				op_derecha = op_derecha + "2";
				op_derecha_num = parseInt(op_derecha);
			}
		}
	}
    });
    
    $("#tres").click(function(event) {
    	if (bloqueado == false){
		$("#display").append(3);
		if (estado == 1){
			op_izquierda = op_izquierda + "3";
			op_izquierda_num = parseInt(op_izquierda);
		}
		else if (estado == 2){
			op_derecha = op_derecha + "3";
			op_derecha_num = parseInt(op_derecha);
		}
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 99) || (e.keyCode == 51)){
		if (bloqueado == false){
			$("#display").append(3);
			if (estado == 1){
				op_izquierda = op_izquierda + "3";
				op_izquierda_num = parseInt(op_izquierda);
			}
			else if (estado == 2){
				op_derecha = op_derecha + "3";
				op_derecha_num = parseInt(op_derecha);
			}
		}
	}
    });
    
    $("#cuatro").click(function(event) {
    	if (bloqueado == false){
		$("#display").append(4);
		if (estado == 1){
			op_izquierda = op_izquierda + "4";
			op_izquierda_num = parseInt(op_izquierda);
		}
		else if (estado == 2){
			op_derecha = op_derecha + "4";
			op_derecha_num = parseInt(op_derecha);
		}
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 100) || (e.keyCode == 52)){
		if (bloqueado == false){
			$("#display").append(4);
			if (estado == 1){
				op_izquierda = op_izquierda + "4";
				op_izquierda_num = parseInt(op_izquierda);
			}
			else if (estado == 2){
				op_derecha = op_derecha + "4";
				op_derecha_num = parseInt(op_derecha);
			}
		}
	}
    });
    
    $("#cinco").click(function(event) {
    	if (bloqueado == false){
		$("#display").append(5);
		if (estado == 1){
			op_izquierda = op_izquierda + "5";
			op_izquierda_num = parseInt(op_izquierda);
		}
		else if (estado == 2){
			op_derecha = op_derecha + "5";
			op_derecha_num = parseInt(op_derecha);
		}
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 101) || (e.keyCode == 53)){
		if (bloqueado == false){
			$("#display").append(5);
			if (estado == 1){
				op_izquierda = op_izquierda + "5";
				op_izquierda_num = parseInt(op_izquierda);
			}
			else if (estado == 2){
				op_derecha = op_derecha + "5";
				op_derecha_num = parseInt(op_derecha);
			}
		}
	}
    });
    
    $("#seis").click(function(event) {
    	if (bloqueado == false){
		$("#display").append(6);
		if (estado == 1){
			op_izquierda = op_izquierda + "6";
			op_izquierda_num = parseInt(op_izquierda);
		}
		else if (estado == 2){
			op_derecha = op_derecha + "6";
			op_derecha_num = parseInt(op_derecha);
		}
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 102) || (e.keyCode == 54)){
		if (bloqueado == false){
			$("#display").append(6);
			if (estado == 1){
				op_izquierda = op_izquierda + "6";
				op_izquierda_num = parseInt(op_izquierda);
			}
			else if (estado == 2){
				op_derecha = op_derecha + "6";
				op_derecha_num = parseInt(op_derecha);
			}
		}
	}
    });
    
    $("#siete").click(function(event) {
    	if (bloqueado == false){
		$("#display").append(7);
		if (estado == 1){
			op_izquierda = op_izquierda + "7";
			op_izquierda_num = parseInt(op_izquierda);
		}
		else if (estado == 2){
			op_derecha = op_derecha + "7";
			op_derecha_num = parseInt(op_derecha);
		}
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 103) || (e.keyCode == 55)){
		if (bloqueado == false){
			$("#display").append(7);
			if (estado == 1){
				op_izquierda = op_izquierda + "7";
				op_izquierda_num = parseInt(op_izquierda);
			}
			else if (estado == 2){
				op_derecha = op_derecha + "7";
				op_derecha_num = parseInt(op_derecha);
			}
		}
	}
    });
    
    $("#ocho").click(function(event) {
    	if (bloqueado == false){
		$("#display").append(8);
		if (estado == 1){
			op_izquierda = op_izquierda + "8";
			op_izquierda_num = parseInt(op_izquierda);
		}
		else if (estado == 2){
			op_derecha = op_derecha + "8";
			op_derecha_num = parseInt(op_derecha);
		}
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 104) || (e.keyCode == 56)){
		if (bloqueado == false){
			$("#display").append(8);
			if (estado == 1){
				op_izquierda = op_izquierda + "8";
				op_izquierda_num = parseInt(op_izquierda);
			}
			else if (estado == 2){
				op_derecha = op_derecha + "8";
				op_derecha_num = parseInt(op_derecha);
			}
		}
	}
    });
    
    $("#nueve").click(function(event) {
    	if (bloqueado == false){
		$("#display").append(9);
		if (estado == 1){
			op_izquierda = op_izquierda + "9";
			op_izquierda_num = parseInt(op_izquierda);
		}
		else if (estado == 2){
			op_derecha = op_derecha + "9";
			op_derecha_num = parseInt(op_derecha);
		}
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 105) || (e.keyCode == 57)){
		if (bloqueado == false){
			$("#display").append(9);
			if (estado == 1){
				op_izquierda = op_izquierda + "9";
				op_izquierda_num = parseInt(op_izquierda);
			}
			else if (estado == 2){
				op_derecha = op_derecha + "9";
				op_derecha_num = parseInt(op_derecha);
			}
		}
	}
    });
    
    $("#cero").click(function(event) {
    	if (bloqueado == false){
		$("#display").append(0);
		if (estado == 1){
			op_izquierda = op_izquierda + "0";
			op_izquierda_num = parseInt(op_izquierda);
		}
		else if (estado == 2){
			op_derecha = op_derecha + "0";
			op_derecha_num = parseInt(op_derecha);
		}
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 96) || (e.keyCode == 48)){
		if (bloqueado == false){
			$("#display").append(0);
			if (estado == 1){
				op_izquierda = op_izquierda + "0";
				op_izquierda_num = parseInt(op_izquierda);
			}
			else if (estado == 2){
				op_derecha = op_derecha + "0";
				op_derecha_num = parseInt(op_derecha);
			}
		}
	}
    });
    
    
      
    $("#sumar").click(function(event) {
    	if (bloqueado == false){
		$("#display").append("+");
		main();
		op = "sumar";
	}
    });
    
    $(document).keydown(function(e){
    	if (bloqueado == false){
		if ((e.keyCode == 107) || (e.keyCode == 43)){
			$("#display").append("+");
			main();
			op = "sumar";
		}
	}
    }); 
    
    $("#restar").click(function(event) {
    	if (bloqueado == false){
		$("#display").append("-");
		main();
		op = "restar";
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 109) || (e.keyCode == 45)){
		if (bloqueado == false){
			$("#display").append("-");
			main();
			op = "restar";
		}
	}
    }); 
    
    $("#dividir").click(function(event) {
    	if (bloqueado == false){
		$("#display").append("/");
		main();
		op = "dividir";
	}
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 111) || (e.keyCode == 47)){
		if (bloqueado == false){
			$("#display").append("/");
			main();
			op = "dividir";
		}
	}
    }); 
    
    $("#multiplicar").click(function(event) {
    	if (bloqueado == false){
		$("#display").append("x");
		main();
		op = "multiplicar";
	}
    });
    
    $(document).keydown(function(e){
    	if (bloqueado == false){
		if ((e.keyCode == 106) || (e.keyCode == 42)){
			$("#display").append("x");
			main();
			op = "multiplicar";
		}
	}
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
   	if (bloqueado == false){
	    	console.log("en resultado el 1 es: " + op_izquierda_num + " y el 2: " + op_derecha_num);
		if (op == "sumar")
			resultado = op_izquierda_num + op_derecha_num;
		else if (op == "restar")
			resultado = op_izquierda_num - op_derecha_num;
		else if (op == "multiplicar")
			resultado = op_izquierda_num * op_derecha_num;
		else if (op == "dividir")
			resultado = op_izquierda_num / op_derecha_num;
			if (op_derecha_num == 0){
				$("#display").empty();
				$("#display").append("SINTAX ERROR - PULSA C");
				bloqueado = true;
			}
		if (bloqueado == false){
	       	 	$("#display").append(" = ");
			$("#display").append(resultado);
		}
	}
    });
    
    $(document).keydown(function(e){
    	if (bloqueado == false){
		if ((e.keyCode == 13) || (e.keyCode == 13)){
			if (op == "sumar")
				resultado = op_izquierda_num + op_derecha_num;
			else if (op == "restar")
				resultado = op_izquierda_num - op_derecha_num;
			else if (op == "multiplicar")
				resultado = op_izquierda_num * op_derecha_num;
	       	 	else if (op == "dividir")
				resultado = op_izquierda_num / op_derecha_num;
				if (op_derecha_num == 0){
					$("#display").empty();
					$("#display").append("SINTAX ERROR - PULSA BORRAR");
					bloqueado = true;
				}
			if (bloqueado == false){
	       	 		$("#display").append(" = ");
				$("#display").append(resultado);
			}
		}
	}
    }); 
    
    $("#borrar").click(function(event) {
    	reiniciar();
    });
    
    $(document).keydown(function(e){
	if ((e.keyCode == 8) || (e.keyCode == 8)){
		reiniciar();
	}
    }); 
    
     var reiniciar = function () {
	op = "";
    	op_izquierda = "";
    	op_derecha = "";
    	estado = 1; 
    	bloqueado = false;
        $("#display").empty();
    };
});
