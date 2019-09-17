const fs= require("fs");
//fs.readFileSync("document.json",
//	(data)=>{
//		if(err) throw err;
//		console.log("data ", JSON.parse(data).length);
//	}
//);
const file=(err,data) => {
	if(err) throw err;
	console.log("uno")
	const dataP= JSON.parse(data);
	console.log("data ", dataP.length)
};
console.log("dos")
fs.readFile("document.json", file);
console.log("tres")
let a=1+2;
console.log ("a=", a);