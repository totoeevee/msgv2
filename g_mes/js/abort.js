function getValue() {
    var isChecked = document.getElementById("togAbort").checked;
     
    if(isChecked){
        window.onblur = () => {
            if (!top.document.hasFocus()) {
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
   
    var x = document.getElementById("settings");
   
    if (x.style.display === "block") {
      x.style.display = "none";
   
    } else {
      x.style.display = "block";
    }

    document.getElementById("settings").innerHTML='<object type="text/html" data="../data/settings.html" ></object>';

 }
