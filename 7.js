
class Calculator {

    static result=0;

    constructor(initValue) {
        this.initValue = initValue;
        if(initValue===0){
            return this.initValue=1;
        }
    }
    add(number){
        Calculator.result===0?Calculator.result=this.initValue+number:Calculator.result+=number;
        return this;
    }
    subtract(number){
        Calculator.result===0?Calculator.result=this.initValue-number:Calculator.result-=number;
        return this;
    }
    multiply(number){
        Calculator.result===0?Calculator.result=this.initValue*number:Calculator.result*=number;
        return this;
    }
    pow(number){
        Calculator.result===0?Calculator.result=this.initValue**number:Calculator.result**=number;
        return this;
    }
    calcResult(){
        console.log(Calculator.result);
    }
}

const calculator = new Calculator(2);

calculator.multiply(4).pow(2).subtract(1).add(1).calcResult();

/*
let user = {
    name: "John",
    surname: "Smith",
    age:25,

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

let manager=user.fullName="Andrey Hirsa";
console.log(manager)*/

