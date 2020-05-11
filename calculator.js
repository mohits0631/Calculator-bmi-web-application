const express = require('express');

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
//post methods for the Server

app.post('/',function(req,res){
  console.log(req.body);

  var result = 0;

  switch (req.body.operator) {
    case '+': result = Number(req.body.num1) + Number(req.body.num2);
    break;
    case '-': result = Number(req.body.num1) - Number(req.body.num2);
    break;
    case '*': result = Number(req.body.num1) * Number(req.body.num2);
    break;
    case '/': result = Number(req.body.num1) / Number(req.body.num2);
    break;
    default: result = "unavailable: invalid operator";
  }
  
  res.send("The result is " + result);
})

app.post('/bmi',function(req,res){
  var h = Number(req.body.height);

  var w = Number(req.body.weight);

  var result = w/(h*h);

  res.send("Your BMI is " + result)
})
// get methods for the Server

app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.get('/bmi',function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})
//listen method for the server

app.listen(3000,function(){
  console.log("Server has started on port 3000.");
});
