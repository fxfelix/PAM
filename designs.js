document.getElementById('sizePicker').onsubmit = function(event) {
  event.preventDefault();
  getValues();
};


function addEvents(array) {

  const color = document.getElementById('colorPicker');
  console.log(color.value);

  for (var i = 0; i < array.length; i++) {

      console.log(array[i]);
      document.getElementById(array[i]).addEventListener("click", function(clickedCell) {
      let cell = clickedCell.target;
      cell.style.backgroundColor = color.value;
      });
  };

};


function getValues() {
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
};


function makeGrid(height, width) {

  let canvas = document.getElementById('pixelCanvas');
  let container = "";
  let cellids = [];

  for (var x = 0; x < height; x++ ) {
      container += ("<tr>");
      for (var y = 0; y < width; y ++) {
          container += ("<td id="+ x + y +"></td>");
          var sign = x.toString() + "" + y.toString();
          cellids.push(sign);
      };
  };
  container += ('</tr>');
  canvas.innerHTML = container;
  addEvents(cellids);

};







