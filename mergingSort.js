'use strict';

let array = [37, 50, 53, 27, 22, 51, 17, 26, 61, 73, 15, 14];
function merge(left, right) {
    let arr = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right]
}
function mergeSort(array) {

    let half = array.length / 2;

    if(array.length < 2){
        return array
    }

    let left = array.splice(0, half)
    return merge ( mergeSort(array), mergeSort(left) )
}
    console.log(mergeSort(array));