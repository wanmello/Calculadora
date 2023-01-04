window.onload = function(){
  
    var valor, sinal, resultado;

    document.getElementById("btn1").onclick = function() {
       valor = document.getElementById('fresult').value;
       document.getElementById('fresult').value = valor + "1";
    };

    document.getElementById("btn2").onclick = function() {
        valor = document.getElementById('fresult').value;
        document.getElementById('fresult').value = valor + "2";
    };

    document.getElementById("btn3").onclick = function() {
        valor = document.getElementById('fresult').value;
        document.getElementById('fresult').value = valor + "3";
    };

    document.getElementById("btn4").onclick = function() {
        valor = document.getElementById('fresult').value;
        document.getElementById('fresult').value = valor + "4";
    };

    document.getElementById("btn5").onclick = function() {
        valor = document.getElementById('fresult').value;
        document.getElementById('fresult').value = valor + "5";
    };

    document.getElementById("btn6").onclick = function() {
        valor = document.getElementById('fresult').value;
        document.getElementById('fresult').value = valor + "6";
    };

    document.getElementById("btn7").onclick = function() {
        valor = document.getElementById('fresult').value;
        document.getElementById('fresult').value = valor + "7";
    };

    document.getElementById("btn8").onclick = function() {
        valor = document.getElementById('fresult').value;
        document.getElementById('fresult').value = valor + "8";
    };

    document.getElementById("btn9").onclick = function() {
        valor = document.getElementById('fresult').value;
        document.getElementById('fresult').value = valor + "9";
    };

    document.getElementById("btn0").onclick = function() {
        valor = document.getElementById('fresult').value;
        document.getElementById('fresult').value = valor + "0";
    };

    document.getElementById("btnAdd").onclick = function() {
        resultado = document.getElementById('fresult').value;
        document.getElementById('fresult').value = "";
        sinal = "+";
    };

    document.getElementById("btnSub").onclick = function() {
        resultado = document.getElementById('fresult').value;
        document.getElementById('fresult').value = "";
        sinal = "-";
    };

    document.getElementById("btnMult").onclick = function() {
        resultado = document.getElementById('fresult').value;
        document.getElementById('fresult').value = "";
        sinal = "*";
    };

    document.getElementById("btnDiv").onclick = function() {
        resultado = document.getElementById('fresult').value;
        document.getElementById('fresult').value = "";
        sinal = "/";
    };

    document.getElementById("btnResult").onclick = function() {
        valor = document.getElementById('fresult').value;
        document.getElementById('fresult').value = eval(resultado + sinal + valor);
    };

    document.getElementById("btnReset").onclick = function() {
        document.getElementById('fresult').value = "";
        resultado = "";
        valor = "";
    };
}