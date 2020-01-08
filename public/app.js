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
    console.log("count=", count);
};
var templatetwo = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        "  "
    ),
    React.createElement(
        "button",
        { id: "my-id", className: "button" },
        "-1"
    ),
    React.createElement(
        "h2",
        null,
        " count : ",
        count
    ),
    React.createElement(
        "button",
        { id: "my-id2", className: "button" },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    )
);
console.log(templatetwo);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//ReactDOM.render(templatetwo,appRoot)
