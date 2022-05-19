const operations = require("./operations");
 
it("should multiply two numbers", ()=>{
    const expectedResult = 15;
    const result = operations.multiply(3, 5);
    if(result!==expectedResult)throw new Error(`Expected ${expectedResult}, but got ${result}`);
});
it("should add two numbers", ()=>{
    const expectedResult = 16;
    const result = operations.add(9, 7);
    if(result!==expectedResult) throw new Error(`Expected ${expectedResult}, but got ${result}`);
});
 
it("shoud async multiply two numbers", (done)=>{ 
    const expectedResult = 12;
    operations.multiplyAsync(4, 3, (result)=>{
        if(result!==expectedResult)throw new Error(`Expected ${expectedResult}, but got ${result}`);
        done();
    });
});