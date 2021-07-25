//calling a function
function print(){
    console.log('hello world');
}
print();

//return statement

var res=add(4,10);
console.log(res);

function add(a,b){
    var sum=a+b;
    return sum;
}

//function expression

var res=add(3,4)
console.log(res);

var add =function(a,b){
    var sum=a+b;
    return sum;
}