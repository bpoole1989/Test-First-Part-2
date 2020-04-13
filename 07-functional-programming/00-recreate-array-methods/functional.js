/* eslint-disable no-unused-vars */

const forEach = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const doubler = (element) => element * 2;

const map = (arr, func) => {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(func(arr[i]));
    }

    return newArray;

}

const filter = (arr, func) => {
    let newArray = [];

    arr.forEach(elem => {if (func(elem)) newArray.push(elem)})

    return newArray;
}

const includes = (collection, checkElem) => {
    if (typeof collection === 'object') collection = Object.values(collection);

    doesInclude = false;

    collection.forEach(elem => {if (elem === checkElem) doesInclude = true});

    return doesInclude;
}

// alternate: 
// const includes = (collection, searchVal) => {
//   for (key in collection) {
//     if (collection.hasOwnProperty(key)) {
//       if (collection[key] === searchVal) {
//         return true;
//       }
//     }
//   }
//   return false;
// };


const countWords = (currentValue, str) => currentValue + str.split(' ').length;

const reduce = (arr, startValue, func) => {
    arr.forEach(elem => {startValue = func(startValue, elem)});

    return startValue;
}

const sum = (arr) => reduce(arr, 0, function(startValue, elem) {return startValue + elem});

const every = (arr, func) => reduce(arr, true, function(currentValue, nextValue) {return currentValue && func(nextValue)});

const some = (arr, func) => reduce(arr, false, function(currentValue, nextValue) {return currentValue || func(nextValue)});