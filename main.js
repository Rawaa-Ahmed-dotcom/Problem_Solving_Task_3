function sum() {
    let size = +prompt("Enter the size of the array : ");
    let array = [];
    let result = 0;
    for(let i = 0; i < size; i++) {
        let item = +prompt(`Enter item ${i+1}`);
        array.push(item);
        result += item;
    }
    return `The summation is : ${result}`;
}
console.log(sum());




function upperCase() {
    let size = prompt("Enter the size of the array : ");
    let array = [];
    let newArray = [];
    for(let i = 0; i < size; i++) {
        let item = prompt(`Enter item ${i + 1}`);
        array.push(item);
        newArray.push(item.toUpperCase());
    }
    return `The UpperCase array is : ${newArray}`;
}
console.log(upperCase());




function maxNumber() {
    let size = +prompt("Enter the size of the array : ");
    let array = [];
    for(let i = 0; i < size; i++ ) {
        let item = +prompt(`Enter item ${i + 1}`);
        array.push(item);
    }
    let max;
    for(let j = 0; j < array.length ; j++) {
        max = array[0];
        if(array[j] > max){
            max = array[j] ;
        }
    }
    return `The maximum number is : ${max}`;
}
console.log(maxNumber());





function minNumber() {
    let size = +prompt("Enter the size of the array : ");
    let array = [];
    for(let i = 0; i < size; i++ ) {
        let item = +prompt(`Enter item ${i + 1}`);
        array.push(item);
    }
    let min;
    for(let j = 0; j < array.length ; j++) {
        min = array[0];
        if(array[j] < min){
            min = array[j] ;
        }
    }
    return `The minimum number is : ${min}`;
}
console.log(minNumber());



function average() {
    let size = +prompt("Enter the size of the array");
    let array = [];
    let average;
    let result = 0;
    for(let i = 0; i < size; i++) {
        let item = +prompt(`Enter item ${i + 1}`);
        array.push(item);
        result += item;
    }
    average = result / size;
    return `The Average is : ${average}`;
}
console.log(average());




function sumEvenNumbers() {
    let size = prompt("Enter the size of the array: ");
    let array  = [];
    let result = 0;
    for(let i = 0; i < size; i++) {
        let item = +prompt(`Enter item ${i + 1}`);
        array.push(item);
        if(item % 2 === 0) {
            result += item;
        }
    }
    return `The summtion of even numbers is : ${result}`;
}
console.log(sumEvenNumbers());




function secondMaxNumber() {
    let size = +prompt("Enter the size of the array : ");
    let array = [];
    let max;
    for(let i = 0; i < size; i++) {
        let item = +prompt(`Enter item ${i + 1}`);
        array.push(item);
    }
    for(let j = 0; j < array.length ; j++) {
        max = array[0];
        if(array[j] >  max) {
        max = array[j];
        }
    }
    array.pop(max);
    let secondMax;
    for(let x = 0; x < array.length; x++) {
        secondMax = array[0];
        if(array[x] > secondMax) {
        secondMax = array[x];
        }
    }
    return `The Second Maximum number is : ${secondMax}`;
}
console.log(secondMaxNumber());



let array = [1, 2, 3, 4, 5];
function arrange(array) {
    let oddArray = [];
    let evenArray = [];
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            oddArray.push(array[i]);
        } 
        if(array[i] % 2 === 0) {
            evenArray.push(array[i]);
        }
    }
    newArray = oddArray.concat(evenArray);
    return `The Arranged Array is : ${newArray}`;
}
console.log(arrange(array));