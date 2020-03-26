const test = QUnit.test;

//FUNCTIONS

//addition function
function add(x, y) {
    return (x + y);
}

//subtraction function
function subtract(x, y) {
    return (x - y);
}

//multiply function
function multiple(x, y) {
    return (x * y); 
}

//divide function
function divide(x, y) {
    return (x / y); 
}

//isEven function
function isEven(x) {
    if(x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//getEvenNumbers function
function getEvenNumbers(x) {
    const numbers = [];
    for(let i = 1; i <= x; i++) {
        if(i % 2 === 0) {
            numbers.push(i);
        } 
    }
    return numbers;
}

//fizzBuzz
function fizzBuzz(x) {
    const array = [];
    for(let i = 1; i < x; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            array.push('fizzbuzz');
        } else if(i % 3 === 0) {
            array.push('fizz');
        } else if(i % 5 === 0) {
            array.push('buzz'); 
        } else {
            array.push(i);
        }
    }
    return array;
}


//TESTS

//add test
test('add function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;
    const y = 3;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(sum, expected);
});

// sub test 
test('subtract function', function(assert) {
    const x = 7;
    const y = 4;
    const expected = 3;

    const sub = subtract(x, y);

    assert.equal(sub, expected);
});

//multiple test
test('multiple function', function(assert) {
    const x = 4;
    const y = 3;
    const expected = 12;

    const mult = multiple(x, y);
    assert.equal(mult, expected);
});

//division test 
test('divide function', function(assert) {
    const x = 6; 
    const y = 2;
    const expected = 3;

    const div = divide(x, y);

    assert.equal(div, expected);

});

test('divide function', function(assert) {
    const x = 7; 
    const y = 0;
    const expected = Infinity;

    const div = divide(x, y);

    assert.equal(div, expected);
});

//isEven test
test('isEven function', function(assert) {
    const x = 6;
    const expected = true;

    const even = isEven(x);

    assert.equal(even, expected);
});

test('isEven function', function(assert) {
    const x = 7;
    const expected = false;

    const even = isEven(x);

    assert.equal(even, expected);
});

//getEvenNumbers
test('getEvenNumbers function', function(assert) {
    const x = 9;
    const expected = [2, 4, 6, 8];

    const evenNumbersFunction = getEvenNumbers(x);

    assert.deepEqual(evenNumbersFunction, expected);
});

//fizzBuzz Test
test('fizzBuzz test', function(assert) {
    const x = 16;
    const expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'];

    const fizzBuzzFunction = fizzBuzz(x);

    assert.deepEqual(fizzBuzzFunction, expected);
});
