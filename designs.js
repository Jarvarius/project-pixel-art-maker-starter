// Select color input
// Select size input
let submit = document.getElementById("sizePicker");

let table = document.getElementById("pixelCanvas");

sizePicker.addEventListener("submit", function (event) {
  event.preventDefault();
  makeGrid();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
   
  for (var v = 0; v < height; v++) {
    tr = document.createElement("tr");
    for (var t = 0; t < width; t++) {
      td = document.createElement("td");
      tr.insertAdjacentElement("afterbegin", td);
      td.addEventListener("click", function (event) {
        let colorvalue = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor = colorvalue;
      });
    }
    table.insertAdjacentElement("afterbegin", tr);
  }
}
