//getting local storage value if checked or not
let jsonString = localStorage.getItem("userChecked");

let gotChecked = JSON.parse(jsonString);
console.log(gotChecked);
// Seeing if it works
if(gotChecked == 1){
    console.log("it equal 1");

    window.top.onblur = () => {
      if (!document.hasFocus()) {
          window.top.location.href = "https://classroom.google.com/h";
      }
  }
  document.getElementById("togAbort").checked = true;
}

if(gotChecked == 0){
    console.log("it equal 0");
    document.title = 'Google';
}
// getting settings
function getSettings(){
    getObject();
    console.log("gotSettings");
  }
  function getObject(){
    getObject = function(){}; // kill it as soon as it was called
    document.getElementById("settings").innerHTML='<object type="text/html" style="height: 250px; width: 250px;" data="../data/settings.html" ></object>';
    console.log("gotObject");
  };


//zoom in + out thanks Daggie Blanqx - Douglas Mwangi stack overflow.
function zoomIn(){
                var body = document.querySelector("body");
                var currWidth = body.clientWidth;
                if(currWidth == 1000000){
                    alert("Maximum zoom-in level of 1 Million reached.");
                } else{
                    body.style.width = (currWidth + 50) + "px";
                } 
            }
            function zoomOut(){
                var body = document.querySelector("body");
                var currWidth = body.clientWidth;
                if(currWidth == 500000){
                    alert("Maximum zoom-out level reached.");
                } else{
                    body.style.width = (currWidth - 50) + "px";
                }
            }
