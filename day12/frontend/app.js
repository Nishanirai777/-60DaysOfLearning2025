//factory  function
function personMaker(name,age){
    const person ={
        name: name,
        agr:age,
        talk(){
            console.log(`hi,my name is ${this.name}`);
        },
    };
    return person;
}
let p1 = personMaker("nisha", 22);