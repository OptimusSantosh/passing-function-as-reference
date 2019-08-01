// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function getA(x) {
    console.log('yes');
    x();
}


function y(){
    console.log('no');
    this.getA(this.z);
}

function z(){
    console.log("Hello");
}

this.y();