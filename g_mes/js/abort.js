function getValue() {
    var isChecked = document.getElementById("togAbort").checked;
     
    if(isChecked){
      window.top.onblur = () => {
        if (!document.hasFocus()) {
            window.top.location.href = "https://classroom.google.com/h";
            document.title = 'Classes';
        }
    }
    } else {
        window.top.onblur = function () { 
             document.title = 'Classes';
         }
    }
    var x = document.getElementById("abort1");
   
    if (x.style.display === "block") {
      x.style.display = "block";
   
    } else {
      x.style.display = "block";
    }
 }

 function getSettings() {
   console.log("display test");
    var x = document.getElementById("settings");
   
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

 }
function getSettings(){
  getObject();
  console.log("gotSettings");
}
function getObject(){
  getObject = function(){}; // kill it as soon as it was called
  document.getElementById("settings").innerHTML='<object type="text/html" style="height: 300px;" data="../data/settings.html" ></object>';
  console.log("gotObject");
};

