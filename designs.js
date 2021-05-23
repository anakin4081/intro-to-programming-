// Select color input
var ColorPicked = "not set";
var Canvas = []
var row = []
var cell = []
var indx = 1

// Select size input

const InputWidth = document.querySelector('#inputWidth');
const InputHeight = document.querySelector('#inputHeight');
const SubmitButton = document.querySelector('#inputSubmit');
const HTMLCanvas = document.querySelector('#canvas')

// Your code goes here! grid starts at 0
// When size is submitted by the user, call makeGrid()

SubmitButton.addEventListener('click', function(makeGrid) {
    makeGrid.preventDefault();
    console.log(InputWidth.value + "GH recieved  " + InputHeight.value + "GW recieved");
    for (var r = 0; r < InputWidth.value; r++) {
        console.log("stage 1");
        HTMLCanvas.insertRow()
        for (var c = 0; c < InputHeight.value; c++) {
            console.log("stage 2");
            HTMLCanvas.insertCell()
        }
    }
    console.log(Canvas);
});


const container = document.createElement('span');
container.textContent = Canvas;


//push element can help add length to the array and pop can remove
//document.createElement()  <<<---- this will be used to add the table to the site
//or have an event for refresh size of the table and have default
//addEventListner() will be needed for the code such as mouse clicks then respond with the var color to fill

//const mainHeading = document.querySelector('h1');
//
//mainHeading.addEventListener('click', function () {
//    console.log('The heading was clicked!');
//  });

//that there is the code to listen for certain events
//should be placedin make grid function input height and width and color after button has been clciked


// find and return the element with an ID of "header"
//document.querySelector('#header');

// find and return a list of elements with the class "header"
//document.querySelectorAll('.header');

//id for the canvas is pixelCanvas

