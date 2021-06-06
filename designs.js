// THis function changes the color of the event target when clicked
function colorChange(event){
  // update the color in case user picks a new color before clocking the cell
  let selectedColor = document.querySelector("#colorPicker").value;
  // change the background color of the cell
  event.target.style.backgroundColor = selectedColor;
}


/* This function makes the grid. It takes three
parameters - a table, number of rows or height
and number of columns or Width
*/
function makeTable(tbl, height, width){
  // clear out previous HTML in the table
  tbl.innerHTML = '';
  // you need to create a variable that is the body of the table
  let tblBody = document.createElement("tbody");
  // for loop to create rows in the table
  for (var i=0; i < height; i++){
    // create a new row to which we would add cells
    let tableRow = document.createElement("tr");
    // for loop to add required cells in each row
    for (var j=0; j< width; j++){
      // create a new cell for the row
      let cell = document.createElement("td");
      //assign width, height, and border to the cell
      cell.style.width = "15px";
      cell.style.height = "8px";
      cell.style.border = "1px solid black";
      // calls the colorChange function when a cell is clicked
      cell.addEventListener('click', colorChange);
      //append cell to the row
      tableRow.appendChild(cell);
    }
    //add the row to the table
    tblBody.appendChild(tableRow);
  }
  // add the table body to the table getElementById
  tbl.appendChild(tblBody);
}

/* A function that captures the chosen
height, and width when "submit" is clicked and calls
the makeTable function to create table
*/
function makeGrid(event){
  // verify whether the event was generated when "submit" was clicked
  if (event.target.type === "submit") {
    // prevents the page from changing
    event.preventDefault();
    // selecting the table with ID pixelCanvas
    let artGrid = document.querySelector("#pixelCanvas");
    // assigns chosen values to width and height
    let selectedHeight = document.querySelector("#inputHeight").value;
    let selectedWidth = document.querySelector("#inputWidth").value;
    // calls the makeTable function to create the grid
    makeTable(artGrid,selectedHeight, selectedWidth);
  }
}

document.querySelector("#sizePicker").addEventListener('click', makeGrid);
