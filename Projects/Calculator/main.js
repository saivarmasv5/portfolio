function opt(val){
    document.getElementById("display").value += val;
    
}
function solve(){
    let x = document.getElementById("display").value;
    let y = eval(x);
    document.getElementById("display").value = y;
}
function clr(){
    document.getElementById("display").value = ""
}
