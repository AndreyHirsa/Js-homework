let result=0;

class Calculator {
    constructor(initValue) {
        this.initValue = initValue;
        if(initValue===0){
            return this.initValue=1;
        }
    }
    add(number){
        result===0?result=this.initValue+number:result+=number;
        return this
    }
    subtract(number){
        result===0?result=this.initValue-number:result-=number;
        return this
    }
    multiply(number){
        result===0?result=this.initValue*number:result*=number;
        return this
    }
    pow(number){
        result===0?result=this.initValue**number:result**=number;
        return this
    }
    calcResult(){
        console.log(result)
    }
}

const calculator = new Calculator(2);

calculator.multiply(4).pow(2).subtract(1).add(1).calcResult()