/* eslint-disable no-unused-vars */

function concatString() {
    return Array.from(concatString.arguments).join('');
}

function yourFunctionRunner(...functions) {
    let returns = '';
    
    functions.forEach(func => {returns += func()});

    return returns;
}

function makeAdder(adderNum) {
    return function makeAdder(num) {
        return adderNum + num;
    }
}

function once(func) {
    let called = false;

    return function callFuncOnce() {
        if (!called) {
            called = true;
            return func();
        }

        return 'the function has already been called...';
    }
}

function createObjectWithClosures() {
    let value = 0;
    
    return {
        oneIncrementer() {value += 1},

        tensIncrementer() {value += 10},

        getValue() {return value},
        
        setValue(newValue) {value = newValue}
    }
}

function dontSpillTheBeans(secret) {
    return {
        getSecret() {return secret},

        setSecret(newSecret) {secret = newSecret}
    }
}