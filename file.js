function sayHello () {
  var p = document.getElementById ("hello");
  p.innerHTML = "Hello, World!";
}
  function sayPopup () {
    alert("Hello, World!");
}
function sayStranger () {
     var txt;
    var person = prompt("Please enter your name:");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person;
    }
    document.getElementById("name").innerHTML = txt;
}
console.log("Hello World!");
