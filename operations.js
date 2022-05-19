module.exports.multiply = (x,y)=> x * y
module.exports.add =(x, y)=> x + y
 
module.exports.multiplyAsync =(a, b, callback)=>
    setTimeout(()=>callback(a * b), 1000)
