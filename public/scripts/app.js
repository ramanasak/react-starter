"use strict";

console.log("app.js is running");
//JSX jsvascript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        " this is JSX from src/app.js"
    ),
    React.createElement(
        "h2",
        null,
        " this is second tag h2"
    )
);
//  this is jsx , below is the equivalent babel script 
var name = "dynamic ramana";
var count = 0;
var addOne = function addOne() {
    count++;
    console.log("+1 count=", count);
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    console.log("-1 count=", count);
    renderCounterApp();
};
var reset = function reset() {
    console.log("reset=", count);
    count = 0;
    renderCounterApp();
};
// var templatetwo = (
//     <div> 
//     <p>  </p> 

//     <h2> count : {count}</h2>
//     {/* <button id="my-id2" className="button">+1</button> */}
//     <button onClick={minusOne}>-1</button>
//     <button onClick={addOne}>+1</button>
//     <button onClick={reset}>reset</button>
//     </div>
//      );

//console.log(templatetwo)
var appRoot = document.getElementById('app');
//ReactDOM.render(template,appRoot) 


var renderCounterApp = function renderCounterApp() {

    var templatetwo = React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "  "
        ),
        React.createElement(
            "h2",
            null,
            " count : ",
            count
        ),
        React.createElement(
            "button",
            { id: "my-id", className: "button", onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );
    ReactDOM.render(templatetwo, appRoot);
    //ReactDOM.render(template,appRoot) 
};

renderCounterApp();
