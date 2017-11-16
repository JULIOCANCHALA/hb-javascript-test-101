import{
    generateRandomColor,
    filterNegativeNumbers,
    functionalfilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    functionalisPalindrome
}from './index.js';

describe('generateRandomColor',()=>{
    it('should work',()=>{
        const aux={
            r:expect.any(Number),
            g:expect.any(Number),
            b:expect.any(Number)
        }
        expect(generateRandomColor()).toMatchObject(aux);
    });
});

describe('filterNegativeNumbers',()=>{
    it('show array without negative numbers',()=>{
        const aux=[-1,-2,-5,76,4,0,2,3,0,-5];
        const res=[76,4,0,2,3,0];
        expect(filterNegativeNumbers(aux)).toEqual(res);
        expect(functionalfilterNegativeNumbers(aux)).toEqual(res);
        expect(filterNegativeNumbers([0])).toEqual([0]);
        expect(functionalfilterNegativeNumbers([0])).toEqual([0]);
    })

    it('show empty array if all values are negatives',()=>{
        expect(filterNegativeNumbers([-2,-50,-3])).toEqual([]);
        expect(functionalfilterNegativeNumbers([-2,-50,-3])).toEqual([]);
    })

    it('should not modify the original array',()=>{
        const arr=[1,2,-3,4,-20,0];
        const copy=arr;
        filterNegativeNumbers(arr);
        expect(arr).toEqual(copy);
    })

    it('should not modify the original array - functional',()=>{
        const arr=[0,0,1,13,-2,4,0];
        const copy=arr;
        functionalfilterNegativeNumbers(arr);
        expect(arr).toEqual(copy);
    })

})

describe('mapNumbersIntoStrings',()=>{
    it('show array of strings',()=>{
        const arr=[1,2,-3,4,-20,0];
        const res=['1','2','-3','4','-20','0'];
        expect(mapNumbersIntoStrings(arr)).toEqual(res);
        expect(functionalMapNumbersIntoStrings(arr)).toEqual(res);
    })

    it('show empty array if original array is empty',()=>{
        expect(filterNegativeNumbers([])).toEqual([]);
        expect(functionalfilterNegativeNumbers([])).toEqual([]);
    })

    it('should not modify the original array',()=>{
        const arr=[1,2,-3,4,-20,0];
        const copy=arr;
        mapNumbersIntoStrings(arr);
        expect(arr).toEqual(copy);
    })

    it('should not modify the original array - functional',()=>{
        const arr=[0,0,1,13,-2,4,0];
        const copy=arr;
        functionalMapNumbersIntoStrings(arr);
        expect(arr).toEqual(copy);
    })

})

describe('printType',()=>{
    beforeEach(()=>{
        console={
            log:jest.fn()//recibe los parametros que recibe la funcion console.log
        }//hago esto para con la esa nueva funcion que reescribio al console.log saber si la llamaron y con que parametro la llamaron
    })

    it('show type of input',()=>{
        printType('a');
        expect(console.log).toBeCalledWith('string');
    })
})


