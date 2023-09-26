import {Boston} from"./boston.js";
var newBoston=Boston.data
var ele="";
for(let i=0;i<newBoston.length;i++)
{
    ele=ele+"<h1>"+newBoston[i][8]+"</h1>" +"<h1>"+newBoston[i][11]+"</h1>"
    console.log(newBoston[i][8])
   }      
document.getElementById("app").innerHTML=ele;