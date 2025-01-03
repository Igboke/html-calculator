
const valuex = document.getElementById("myInput");

function appendToDisplay(key){
    valuex.value+=key;
}

function clearScreen(){
    valuex.value = "";
}

function calculate(){
    try{
        valuex.value=eval(valuex.value)
    }
    catch(Error){
        valuex.value = "Error"
    }
    
}