var x="Hello World!"
console.log(x);

function a () {
    var x="Hello World! From a";
    b();
    console.log(x);
}

a();

function b () {
    console.log(x);
}