function getDecimal(){
    let x = document.getElementById("myNum").value;
    let choice = document.getElementById("numbers").value;
    let valid = false;

  
    switch(choice) {
        case "Binary":
          valid = isBinary(x);
          break;
        case "Octal":
          valid = isOctal(x);
          break;
        case "Hexadecimal":
          valid = isHex(x);
          break;
        default:
          valid = false;
      }



    if (choice == "Binary" && valid == true){
        document.getElementById("solution").innerHTML = "Good Binary";
        document.getElementById("solution").style.color = "green";
        let decimal = 0, power = x.length-1;
        for (let i=0; i<x.length; i++){
            let c = x.charAt(i);
            c = parseInt(c);

            if (c == 1){
                decimal = decimal + Math.pow(2, power);
            }
            power--;
        }
        
        //Print decimal to h2 tag
        document.getElementById("calculation").innerHTML = "The decimal value is "+decimal;
    }

    if (choice == "Binary" && valid == false){
        document.getElementById("solution").innerHTML = "Not Binary";
        document.getElementById("solution").style.color = "red";
        document.getElementById("calculation").innerHTML = "The decimal value cannot be calculated ";

    }

    if (choice == "Octal" && valid == true){
        document.getElementById("solution").innerHTML = "Good Octal";
        document.getElementById("solution").style.color = "green";
        let decimal = 0, power = x.length-1;
        for (let i=0; i<x.length; i++){
            z = x.charAt(i);
            c = parseInt(z);

            if (c >= 1 && c <= 7){
                decimal = decimal + ( c * Math.pow(8, power));
            }
            power--;
        }
        
        //Print decimal to h2 tag
        document.getElementById("calculation").innerHTML = "The decimal value is "+decimal;
       
    }

    if (choice == "Octal" && valid == false){
        document.getElementById("solution").innerHTML = "Not Octal";
        document.getElementById("solution").style.color = "red";
    }

    if (choice == "Hexadecimal" && valid == true){
        document.getElementById("solution").innerHTML = "Good Hexadecimal";
        document.getElementById("solution").style.color = "green";

        let decimal = 0, power = x.length-1;
        for (let i=0; i<x.length; i++){
            let f = x.charAt(i);
            c = parseInt(f);

            if (c >= 1 && c <= 9 ){
                decimal = decimal + (c * Math.pow(16, power));
            }
            else if (f == 'A') {
                decimal = (decimal) + (10 * Math.pow(16, power));
            }
            else if (f == 'B') {
                decimal = (decimal) + (11 * Math.pow(16, power));
            }
            else if (f == 'C') {
                decimal = decimal + (12 * Math.pow(16, power));
            }
            else if (f == 'D') {
                decimal = decimal + (13 * Math.pow(16, power));
            }
            else if (f == 'E') {
                decimal = decimal + (14 * Math.pow(16, power));
            }
            else if (f == 'F') {
                decimal = decimal + (15 * Math.pow(16, power));
            }
            power--;
        }
        
        document.getElementById("calculation").innerHTML = "The decimal value is "+decimal;

    }

    if (choice == "Hexadecimal" && valid == false){
        document.getElementById("solution").innerHTML = "Not Hexadecimal";
        document.getElementById("solution").style.color = "red";
    }
   
}

function isBinary(bNumber){
    for (let i=0; i<bNumber.length; i++){
        let c = bNumber.charAt(i);
        if (c != '0' && c != '1'){
            return false;
        }
    }
    return true;
}

function isOctal(oNumber){
    for (let i=0; i<oNumber.length; i++){
        let b = oNumber.charAt(i);
        if (b < '0' || b > '7'){
            return false;
        }
    }
    return true;
}

function isHex(hexNumber){
    for (let i=0; i<hexNumber.length; i++){
        let b = hexNumber.charAt(i);
        if (b >= '0' && b <= '9' || b >= 'A' && b < 'G'){
            return true;
        }
    }
    return false;
}
