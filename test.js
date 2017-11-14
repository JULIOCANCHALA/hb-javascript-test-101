/*1. Function that is capable of generate a random RGB color object*/
function generateRandomNumber(){
    return {
        "R":Math.floor(Math.random()*255),
        "G":Math.floor(Math.random()*255),
        "B":Math.floor(Math.random()*255)
    };
}

/*2. Function that is capable of filtering out numbers less than 0 from an array of numbers*/
/*Loops*/
function filterNegativeNumbers(arr){
    const arr2=[];
    for(i=0;i<arr.length;i++){
        if (arr[i]>=0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
/*Array methods*/
function functionalfilterNegativeNumbers(arr){
    return arr.filter(function(item){return item >= 0;})    
}

/*3. Function that is capable of maping an array of numbers into strings*/
/*Loops*/
function mapNumbersIntoStrings(arr){
    const arr2=[];
    for(i=0;i<arr.length;i++){
            arr2.push(arr[i].toString());
    }
    return arr2;
}

/*Array methods*/
function functionalmapNumbersIntoStrings(arr){
    return arr.map(function(item){return item.toString()})
}

/*4. Create a function that is capable of printing into the console the type of the passed variable*/
function printType(item){
    console.log(typeof item);
}

/*5. Function that is capable of identify if the passed string is a palindrome or not */
function isPalindrome(str){
    var cnt=0;
    var result=false;
    for(i=0;i<(Math.floor(str.length/2));i++){
        if(str[i]===str[str.length-i-1]){
            cnt++;
        }
    }
    if(cnt==Math.floor(str.length/2)){
        result=true;
    }
    return result;
}


/*6. Class in Javascript that represents a person capable of having “name” and “age” as instance variables*/
class Person{
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
    printName(){
        console.log(this.name);
    }
    printAge(){
        console.log(this.age);
    }
}

function printOutPersonAge(person){
    person.printAge();
}

/* Function invocation */
console.log(generateRandomNumber());
console.log(filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(functionalfilterNegativeNumbers([3, -6, 5, 0, 34, 54, -7]));
console.log(mapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));
console.log(functionalmapNumbersIntoStrings([32, 0, -12, 4, 54, -7]));

printType(1);
printType('1');
printType([1]);

console.log(isPalindrome("anitalavalatina"));

const student=new Person('Julio',25);
student.printName();
student.printAge();

printOutPersonAge(student);