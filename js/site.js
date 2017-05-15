//Creating a title for K-COP
var head=document.createElement("head");
var title=document.createElement("title");
var titleText = document.createTextNode("Welcome to KCOP");
title.appendChild(titleText);
head.appendChild(title);
document.getElementsByTagName('html')[0].appendChild(head);

//Creating Body content for K-COP
var body=document.createElement("body");
var bhead=document.createElement("h1");
var bheadText=document.createTextNode("The Start of Something Big");
bhead.appendChild(bheadText);
body.appendChild(bhead);
document.getElementsByTagName('html')[0].appendChild(body);

//Changing Page styling
body.style.background="black";
bhead.style.color="white";

/*var bgroundColor=body.style.background="black";
var textColor=document.style.color="white";
documnent.getElementsByTagname("body")[0].appendChild(bgroundColor);*/
