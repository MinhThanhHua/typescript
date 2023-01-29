class Person {
    firstName: string
    lastName: string
    old: number
    
    constructor(firstName: string, lastName: string, old: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.old = old
    }
    
    getFullName = () => {
        return this.firstName + this.lastName + this.old
    }
}

let thanhhm28 = new Person('Hua Minh', ' Thanh ', 28)
console.log(thanhhm28)
console.log(thanhhm28.getFullName())