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
document.getElementsByTagname("body")[0].style.background="black";
document.getElementsByTagname("h1").style.color=white;

