let suma = (num1,num2,num3)=> {
    return num1+num2+num3;
}

console.log(suma(3,5,8));

class Car{
    constructor(doors){
        this.doors=doors;
    
    }
    countDoor = (cant) => {
        this.doors+= cant
        return this.doors
    }
}

let a=new Car(0)
a.countDoor(2)
console.log(a);

let miCoche ={
    door:0,
    attachADoor: () => {this.door+1},
}

console.log(miCoche.attachADoor());