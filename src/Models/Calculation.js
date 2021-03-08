module.exports = class Calculation{
    #result = "";
    constructor(a, b, operation){
        this.a = a;
        this.b = b;
        this.operation = operation;
        this.#result = this.operation(this.a, this.b);
    }
    GetResults(){
        return this.#result;
    }
}