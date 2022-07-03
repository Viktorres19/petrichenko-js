'use strict';

/* try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(error) {
    console.log(error); // ReferenceError: a is not defined at script.js:5:17
    console.log(error.name); // ReferenceError
    console.log(error.message); // a is not defined
    console.log(error.stack); // ReferenceError: a is not defined at script.js:5:17
} finally {

}

console.log('Still normal'); */

// if more than 1 page
try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}

console.log('normal');