!function(e){var t={};function n(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(l,i,function(t){return e[t]}.bind(null,i));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=(e,t,n,l,i=!1)=>({title:e,description:t,date:n,priority:l,status:i});let i={addTask:e=>{localStorage.setItem(""+e.title,JSON.stringify(e))},deleteTask:()=>console.log("To be Added")};i.addTask(l("Complete TOP","xd","tomorrow","High"));var d=i;var r=e=>{let t=e.split(/\D/g);return[t[2],t[1],t[0]].join("-")};var o=()=>{let e=document.getElementById("titleInput").value,t=document.getElementById("descripInput").value,n=r(document.getElementById("dateInput").value),i=document.getElementById("priorityInput").value;if(""!=e&&""!=t&&""!=n&&""!=i){let r=l(e,t,n,i);d.addTask(r)}location.reload()};var a=()=>{let e=[];return Object.keys(localStorage).forEach((function(t){let n=JSON.parse(localStorage.getItem(t)),i=l(n.title,n.description,n.date,n.priority);e.push(i)})),e};var c=e=>{console.log("Deleting "+e);let t=document.getElementById("taskDiv");localStorage.removeItem(e);let n=document.getElementById(e+"-div");t.removeChild(n)};var u=e=>{let t=document.getElementById("taskDiv"),n=document.createElement("div");n.setAttribute("id",e.title+"-div"),n.innerText=`${e.title} ${e.description} ${e.date} ${e.priority} ${e.status}`;let l=document.createElement("button");l.innerText="Delete",t.appendChild(n),n.appendChild(l),l.addEventListener("click",()=>{c(e.title)})};const p=document.querySelector(".modal");var m=()=>{if(p.style.display="block",null==p.firstChild){let e=document.createElement("div");e.className="container",e.setAttribute("id","formDiv");let t=document.createElement("label");t.innerText="Title";let n=document.createElement("input");n.setAttribute("id","titleInput");let l=document.createElement("label");l.innerText="Description";let i=document.createElement("input");i.setAttribute("id","descripInput");let d=document.createElement("label");d.innerText="Date";let r=document.createElement("input");r.setAttribute("id","dateInput"),r.setAttribute("type","date");let a=document.createElement("label");a.innerText="Priority";let c=document.createElement("select");c.setAttribute("id","priorityInput"),["Low","Medium","High"].forEach(e=>{let t=document.createElement("option");t.setAttribute("value",e);let n=document.createTextNode(e);t.appendChild(n),c.appendChild(t)});let u=document.createElement("button");u.innerText="Submit",u.addEventListener("click",()=>{console.log("submitting"),o(),p.style.display="none"});let m=document.createElement("button");m.innerText="Cancel",m.addEventListener("click",()=>{p.style.display="none"}),p.appendChild(e),e.appendChild(t),e.appendChild(n),e.appendChild(l),e.appendChild(i),e.appendChild(d),e.appendChild(r),e.appendChild(a),e.appendChild(c),e.appendChild(u),e.appendChild(m)}};const s=document.querySelector(".content");(()=>{(function(){let e=document.createElement("div");e.className="container";let t=document.createElement("h1");t.textContent="Home",e.appendChild(t),s.appendChild(e)})(),function(){let e=document.createElement("div");e.className="container";let t=document.createElement("h2");t.textContent="Hello, this site was created as an assignment for The Odin Project!",e.appendChild(t),s.appendChild(e)}(),function(){let e=document.createElement("button");e.innerText="Add Task",e.addEventListener("click",()=>{m()}),s.appendChild(e)}(),function(){let e=document.createElement("div");e.className="container",e.setAttribute("id","taskDiv"),s.appendChild(e),a().forEach(e=>{u(e)})}()})()}]);