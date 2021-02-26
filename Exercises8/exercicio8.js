//Descending order/

function descendingOrder(n){
    var convert = n.toString();
    var novoArray = convert.split('');
    var organizar = novoArray.sort();
    var reverso = organizar.reverse();
    var juntarArray = reverso.join('');
    var backNumber = Number(juntarArray);
    
    
    return backNumber;
}
console.log(descendingOrder(1957354));