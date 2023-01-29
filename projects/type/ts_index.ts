// 1. array
const arrayTS: string[] = ['string', 'left']
// arrayTS.push(23) ~> error
arrayTS.push('right')
console.log(arrayTS)

const arrTS: (string|number)[] = ['tesst']
arrTS.push(23)
console.log(arrTS)

// 2. number
let test: number = 6;
// test = 'asfd'; ~> compile error
test = 7.123
console.log(test)

// 3. string
const nameTS: string = "\":type\""
console.log(`check text is:`, nameTS.toLocaleUpperCase())


// 4. Boolean
let status1: boolean = false
console.log(status1)
let status2: boolean = Boolean('String')
console.log('Dump:', status2)

// 5. object
let newObject: {
    name: string,
    old: number
} = {
    name: 'Thanh',
    old: 28
}
// newObject.anotherName = 'New name of object' ~> error


// 6. tuple 
let arrTuple: [string, number]; 
// arrTuple = ['Test', '123'] ~> error
arrTuple = ['Test', 123]
console.log(arrTuple)

let arrTuple2: [string, number, number?]
arrTuple2 = ['Test1', 1]
arrTuple2 = ['Test1', 1, 2]
console.log(arrTuple2)

// 7. enum
enum DIRECTION {
    UP = 'up', 
    DOWN = 'DOWN', 
    LEFT = 'left', 
    RIGHT = 'right'
}

let showText = (directionTS: string) => {
    console.log(directionTS)
}
console.log('enum UP is: ', DIRECTION.UP)
console.log('enum DOWN is: ', DIRECTION.DOWN)
showText(DIRECTION.LEFT)

// 8. any
let stringName: any = 'string text type any'
console.log(stringName)
stringName = false
console.log(stringName)

// 9. void, set type function
const sum = (a: number, b: number): number => {
    return a + b;
}
const unType = (a: number, b: number): void => {
    console.log(a + b);
}
console.log(sum(1, 3));
unType(1, 3);

// 10. never ~> handle error
let throwError = (): never => {
    throw Error('has error occus')
}
// throwError();

// 11. union
let sumUnion = (a: string | number, b: string | number) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    } 
    throw new Error('error');
}
// short Cut
type anormalType = string | number;
let sumUnionType = (a: anormalType, b: anormalType) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    } 
    throw new Error('error');
}
console.log('union: set function handle param string & number: ', sumUnion(3, 3))
console.log(sumUnion('3', '3'))
console.log(sumUnionType('3', '3'))
