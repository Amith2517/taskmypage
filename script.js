function nera() {

    let name = document.getElementById("one").value;
    let email = document.getElementById("two").value;
    let password = document.getElementById("three").value;

    if (name == "Nera Amith" && email === "amithlucky350@gmail.com" && password==="Nera@2517" ) {
        alert("success full")
       window.location.assign("same.html")
    }
    else {
        alert("worng entry invalid")


    }



}