const fs= require("fs");
const express=require("express")
//const app=express();
//const PORT=9000;
//fs.readFileSync("document.json",
//	(data)=>{
//		if(err) throw err;
//		console.log("data ", JSON.parse(data).length);
//	}
//);
//const file=(err,data) => {
//	if(err) throw err;
//	console.log("uno")
//	const dataP= JSON.parse(data);
//	console.log("data ", dataP.length)
//};
//console.log("dos")
//fs.readFile("document.json", file);
//console.log("tres")
//let a=1+2;
//console.log ("a=", a);
//app.get("/",(req,res)=>{
//	console.log("Got GET /");
//	res.send("HOLA JHON")
//});
//app.listen(PORT, ()=>
//{
//	console.log(`my app is running at http://localhosto:${PORT}`);
//});
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});