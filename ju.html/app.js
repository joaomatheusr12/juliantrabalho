function calmedia(){
    var numero_1 = parseInt(document.getElementById("nota-1").value);
    var numero_2 = parseInt(document.getElementById("nota-2").value);
    var med = document.getElementById("result");
    if(document.getElementById("media")){
        var calculo = (numero_1 + numero_2)/2;
        med.innerHTML = calculo;
    }
}