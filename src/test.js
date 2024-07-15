
let person = {
    first :'John',
    last: 'Noo',
    fullName(){
        console.log(`${this.first} ${this.last}`)
    },
    hello(){console.log(this)},

    printFullame(){
        return this.fullName()
    }
    
   }

   let test = person.printFullame;
   const cb = person.hello.bind(person)
//    test();
//    person.hello()

   cb()
//    person.hello()