
// const express = require("express");
// var app = express();
// app.get("/", (_, res)=>res.send("Hello Test")).listen(3000);
// module.exports.app = app;


const express = require("express");
var app = express();
 
app.get("/", function (request, response){
     
    response.send("Hello Test");
});
 
app.get("/error", function (request, response){
     
    response.status(404).send("NotFound");
});
 
app.get("/user", function (request, response){
     
    response.send({name:"Tom", age: 22});
});
 
app.listen(3000);
 
module.exports.app = app;

// Если необходимо проверить какие-то комплексные объекты, которые отправляются в ответе клиенту,
//  то в метод expect передается функция, в которую в качестве параметра передается объект ответа response.
//   А через объект response.body можно получить весь ответ и сравнить его с ожидаемым значением.
//    Для сравнения комплексных объектов можно применить метод deepEqual() или deepStrictEqual() библиотеки assert