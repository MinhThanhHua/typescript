let sumTC = (a: number, b:number, c?: number) => {
    return  a + b + (c || 0)
}

console.log('Optinal params: ', sumTC(1, 3))
console.log(sumTC(1, 3, 5))

let sumDf = (a: number, b:number, c: number = 0) => {
    return  a + b + c
}
console.log('Default params: ', sumDf(3, 3))

// rest params
let sumArr = (...a: number[]) => {
    let total = 0;
    a.forEach(value => {
        total += value
    })
    return total;
}
console.log('Rest params: ', sumArr(3, 3))

// overload function
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
    return a + b;
};
console.log('Use string: ', addNew(1, 1))
console.log('Use number: ', addNew('sss', 'aaaa'))
