function calculate(){
    let fn = document.getElementById("firstname").value;
    let sn = document.getElementById("secondname").value;
    var love = Math.floor(Math.random()*100);
    if(fn != "" && sn != ""){
        document.getElementById("result").innerHTML = "";
        document.getElementById("result").innerHTML = fn + " and "+ sn + " is "+ love + "% match";
    }
    else{
        alert("Enter Name In The Field!!");
    }
}