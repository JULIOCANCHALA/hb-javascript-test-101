import {
    generateRandomColor,
    filterNegativeNumbers,
    functionalfilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    functionalisPalindrome,
    Person,
    printOutPersonAge
} from './index.js';

describe('generateRandomColor', () => {
    it('should work', () => {
        const aux = {
            r: expect.any(Number),
            g: expect.any(Number),
            b: expect.any(Number)
        }
        expect(generateRandomColor()).toMatchObject(aux); //to Check that a JavaScript object matches a subset of the properties of an object
    });
});

describe('filterNegativeNumbers', () => {
    it('show array without negative numbers', () => {
        const aux = [-1, -2, -5, 76, 4, 0, 2, 3, 0, -5];
        const res = [76, 4, 0, 2, 3, 0];
        expect(filterNegativeNumbers(aux)).toEqual(res);
        expect(functionalfilterNegativeNumbers(aux)).toEqual(res);
        expect(filterNegativeNumbers([0])).toEqual([0]);
        expect(functionalfilterNegativeNumbers([0])).toEqual([0]);
    })

    it('show empty array if all values are negatives', () => {
        expect(filterNegativeNumbers([-2, -50, -3])).toEqual([]);
        expect(functionalfilterNegativeNumbers([-2, -50, -3])).toEqual([]);
    })

    it('should not modify the original array', () => {
        const arr = [1, 2, -3, 4, -20, 0];
        const copy = arr;
        filterNegativeNumbers(arr);
        expect(arr).toEqual(copy);
    })

    it('should not modify the original array - functional', () => {
        const arr = [0, 0, 1, 13, -2, 4, 0];
        const copy = arr;
        functionalfilterNegativeNumbers(arr);
        expect(arr).toEqual(copy);
    })

})

describe('mapNumbersIntoStrings', () => {
    it('show array of strings', () => {
        const arr = [1, 2, -3, 4, -20, 0];
        const res = ['1', '2', '-3', '4', '-20', '0'];
        expect(mapNumbersIntoStrings(arr)).toEqual(res);
        expect(functionalMapNumbersIntoStrings(arr)).toEqual(res);
    })

    it('show empty array if original array is empty', () => {
        expect(filterNegativeNumbers([])).toEqual([]);
        expect(functionalfilterNegativeNumbers([])).toEqual([]);
    })

    it('should not modify the original array', () => {
        const arr = [1, 2, -3, 4, -20, 0];
        const copy = arr;
        mapNumbersIntoStrings(arr);
        expect(arr).toEqual(copy);
    })

    it('should not modify the original array - functional', () => {
        const arr = [0, 0, 1, 13, -2, 4, 0];
        const copy = arr;
        functionalMapNumbersIntoStrings(arr);
        expect(arr).toEqual(copy);
    })

})

describe('printType', () => {
    beforeEach(() => {
        console = {
            log: jest.fn() // Spy function for the console.log
        }
    })

    it('show type of input', () => {
        printType('a');
        expect(console.log).toBeCalledWith('string');
    })
})

describe('isPalindrome', () => {
    it('show true with a palindrome word', () => {
        expect(isPalindrome('maadaam')).toBeTruthy(); //.toBeTruthy is for to ensure a value is true. 
        expect(functionalisPalindrome('maadaam')).toBeTruthy();
    });
    it('show true with a palindrome phrase', () => {
        expect(isPalindrome("A man, a plan, a canal. Panama")).toBeTruthy();
        expect(functionalisPalindrome("A man, a plan, a canal. Panama")).toBeTruthy();
    });
});

describe('Class Person', () => {
    let newperson;

    beforeEach(() => {
        newperson = new Person('Julio', 22); //Creating Person for use later in two instances

        global.console = {
            log: jest.fn() // Spy function for the console.log
        };
    });

    it('verifying constructor', () => {
        expect(newperson).toMatchObject({
            name: 'Julio',
            age: 22
        });
    });

    it('should show name in the console', () => {
        newperson.printName();
        expect(global.console.log).toHaveBeenCalledWith('Julio'); //spy function called with 'John'
    });
});

describe('printOutPersonAge', () => {
    beforeEach(() => {
        global.console = {
            log: jest.fn() // Spy function for the console.log
        }
    });

    it('should show the age in the console', () => {
        printOutPersonAge(new Person('Julio', 22));
        expect(global.console.log).toHaveBeenCalledWith(22); //spy function called with '100'
    });
});