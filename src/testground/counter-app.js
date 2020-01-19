console.log("app.js is running")
//JSX jsvascript XML
var template = (
<div> 
<p> this is JSX from src/app.js</p> 
<h2> this is second tag h2</h2>
</div>
 );
//  this is jsx , below is the equivalent babel script 
var name = "dynamic ramana";
let count=0;
const addOne=()=>{
    count++;
    console.log("+1 count=",count);  
    renderCounterApp();
};
const minusOne=()=>{
    count--;
    console.log("-1 count=",count);  
    renderCounterApp();
};
const reset=()=>{
    console.log("reset=",count);  
    count=0;
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


const renderCounterApp=()=>{

    var templatetwo = (
        <div> 
        <p>  </p> 
       
        <h2> count : {count}</h2>
        {/* <button id="my-id2" className="button">+1</button> */}
        <button id="my-id" className="button" onClick={minusOne}>-1</button>
        <button onClick={addOne}>+1</button>
        <button onClick={reset}>reset</button>
        </div>
         );
     ReactDOM.render(templatetwo,appRoot) 
    //ReactDOM.render(template,appRoot) 
}

renderCounterApp();
