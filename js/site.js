//Creating a title for K-COP
var head=document.createElement("head");
var title=document.createElement("title");
var titleText = document.createTextNode("Welcome to KCOP");
title.appendChild(titleText);
head.appendChild(title);
document.getElementsByTagName('html')[0].appendChild(head);

