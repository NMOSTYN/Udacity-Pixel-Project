// create variables for table size selection
let userSubmit = document.getElementById ("sizePicker");

// create variables for select size input
let tableHeight = document.getElementById("inputHeight");
let tableWidth = document.getElementById("inputWidth");

// create variable for HTML table
let table = document.getElementById ("pixelCanvas");

// define function to create table & clear Grid
function makeGrid(tableWidth, tableHeight) {
    table.innerHTML = '';
    for ( let i = 0; i < tableWidth; i++) {
        let newRow = table.insertRow (0);
        for ( let x = 0; x < tableHeight; x ++){
            let height = newRow.insertCell (0);
            height.addEventListener ("click", function (addColor){
                let tableColor = document.getElementById ("colorPicker").value;
                height.style.backgroundColor = tableColor;
            })       
}}}

// add submit listener event
userSubmit.addEventListener ("submit", function (event){ event.preventDefault();
    makeGrid (tableHeight.value, tableWidth.value)
});