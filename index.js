/*1. Function that is capable of generate a random RGB color object*/
export function generateRandomColor(){
    return {
        "r":Math.floor(Math.random()*255),
        "g":Math.floor(Math.random()*255),
        "b":Math.floor(Math.random()*255)
    };
}

/*2. Function that is capable of filtering out numbers less than 0 from an array of numbers*/
/*Loops*/
export function filterNegativeNumbers(arr){
    var i=0;
    const arr2=[];
    for(i=0;i<arr.length;i++){
        if (arr[i]>=0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
/*Array methods*/
export function functionalfilterNegativeNumbers(arr){
    return arr.filter(function(item){return item >= 0;})    
}

/*3. Function that is capable of maping an array of numbers into strings*/
/*Loops*/
export function mapNumbersIntoStrings(arr){
    var i=0;
    const arr2=[];
    for(i=0;i<arr.length;i++){
            arr2.push(arr[i].toString());
    }
    return arr2;
}

/*Array methods*/
export function functionalMapNumbersIntoStrings(arr){
    return arr.map(function(item){return item.toString()})
}

/*4. Create a function that is capable of printing into the console the type of the passed variable*/
export function printType(item){
    console.log(typeof item);
}

/*5. Function that is capable of identify if the passed string is a palindrome or not */
/*Loops*/
export function isPalindrome(str){
    var i=0;
    var str2=str.replace(/[^aA-z0-9]/ig,'');
    str2=str2.toLowerCase();
    var cnt=0;
    var result=false;
    for(i=0;i<(Math.floor(str2.length/2));i++){
        if(str2[i]===str2[str2.length-i-1]){
            cnt++;
        }
    }
    if(cnt==Math.floor(str2.length/2)){
        result=true;
    }
    return result;
}

/*Array methods*/
export function functionalisPalindrome(str){
    var str2=str.replace(/[^aA-z0-9]/ig,'');
    str2=str2.toLowerCase();
    return str2===str2.split('').reverse().join('');
}


/*6. Class in Javascript that represents a person capable of having “name” and “age” as instance variables*/
export class Person{
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
    printName(){
        console.log(this.name);
    }
    get Age(){
        return this.age;
    }
}

export function printOutPersonAge(person){
    console.log(person.Age);
}