//getting local storage value if checked or not
var jsonString = localStorage.getItem("userChecked");

var gotChecked = JSON.parse(jsonString);
console.log(gotChecked);
// Seeing if it works
if(gotChecked == 1){
    document.getElementById("togAbort").checked = true
    console.log("it equal 1");
}

if(gotChecked == 0){
    console.log("it equal 0");
}
// getting settings
function getSettings(){
    getObject();
    console.log("gotSettings");
  }
  function getObject(){
    getObject = function(){}; // kill it as soon as it was called
    document.getElementById("settings").innerHTML='<object type="text/html" style="height: 300px;" data="../data/settings.html" ></object>';
    console.log("gotObject");
  };