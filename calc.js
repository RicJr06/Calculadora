function Calcular(info){

    var n1 = parseInt(document.formcalc.n1.value);
    var n2 = parseInt(document.formcalc.n2.value);
    var res = 0;

    if (info == 1){
        res = n1+n2;
    }
    if (info == 2){
        res = n1-n2;
    }
    if (info == 3){
        res = n1*n2;
    }
    if (info == 4){
        res = n1/n2;
    }

    document.formcalc.resultado.value = res;
}
