//**Convertendo valores booleanos para strings "Yes" ou "No"/

function boolToWord( bool ){
    if (bool){
      return "Yes";
    } else {
      return "No";
    }
    
}

console.log(boolToWord(true));