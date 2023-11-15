var a=1
function foo(){
    var a=2
    function bar(a){
        console.log(a);
    }
    bar(3)
}
foo()
