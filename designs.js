// Select color input
// Select size input
var submit =  document.getElementById('sizePicker');

var table = document.getElementById('pixelCanvas');

submit.addEventListener("submit",function(event){
    event.preventDefault();
    makeGrid();
});

// When size is submitted by the user, call makeGrid()


function makeGrid() {
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;

    for (var v = 0; v < height; v++){
        tr = document.createElement("tr");
        for (var t = 0; t < width; t++){
             td = document.createElement("td");
             tr.insertAdjacentElement("afterbegin",td);
            td.addEventListener("click",function(event){
                
                        var colorvalue = document.getElementById("colorPicker").value;
                        event.target.style.backgroundColor = colorvalue;
                
            });
        }
        table.insertAdjacentElement("afterbegin",tr);
    }

}
