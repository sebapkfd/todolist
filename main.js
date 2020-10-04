!function(e){var t={};function n(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(l,i,function(t){return e[t]}.bind(null,i));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=(e,t,n,l,i=!1)=>({title:e,description:t,date:n,priority:l,status:i});var i=e=>{localStorage.setItem(""+e.title,JSON.stringify(e))};var r=e=>{let t=e.split(/\D/g);return[t[2],t[1],t[0]].join("-")};var d=()=>{let e=[];return Object.keys(localStorage).forEach((function(t){let n=JSON.parse(localStorage.getItem(t)),i=l(n.title,n.description,n.date,n.priority,n.status);e.push(i)})),e};var a=(e,t=!1)=>{let n=document.getElementById("titleInput").value,a=document.getElementById("descripInput").value,o=r(document.getElementById("dateInput").value),c=document.getElementById("priorityInput").value;if(""!=n&&""!=a&&""!=o&&""!=c){let r=l(n,a,o,c,!!e&&t),u=d().find(e=>e.title==n);null==u&&0==e&&i(r),null!=u&&1==e&&i(r)}location.reload()};const o=document.querySelector(".modal");var c=(e=!1)=>{if(o.style.display="block",null==o.firstChild){let t=document.createElement("div");t.setAttribute("id","formDiv");let n=document.createElement("label");n.innerText="Title";let l=document.createElement("input");l.setAttribute("id","titleInput");let i=document.createElement("label");i.innerText="Description";let d=document.createElement("input");d.setAttribute("id","descripInput");let c=document.createElement("label");c.innerText="Date";let u=document.createElement("input");u.setAttribute("id","dateInput"),u.setAttribute("type","date");let s=document.createElement("label");s.innerText="Priority";let p=document.createElement("select");p.setAttribute("id","priorityInput");let m=["Low","Medium","High"];if(m.forEach(e=>{let t=document.createElement("option");t.setAttribute("value",e);let n=document.createTextNode(e);t.appendChild(n),p.appendChild(t)}),0!=e){l.defaultValue=e.title,d.defaultValue=e.description,u.defaultValue=r(e.date);for(let t=0;t<m.length;t++)m[t]==e.priority&&(p.selectedIndex=t)}let v=document.createElement("button");v.innerText="Submit",v.addEventListener("click",()=>{0==e?a(!1):0!=e&&a(!0,e.status),o.style.display="none"});let b=document.createElement("button");b.innerText="Cancel",b.addEventListener("click",()=>{o.style.display="none"}),o.appendChild(t),t.appendChild(n),t.appendChild(l),t.appendChild(i),t.appendChild(d),t.appendChild(c),t.appendChild(u),t.appendChild(s),t.appendChild(p),t.appendChild(v),t.appendChild(b)}};var u=e=>{let t=document.getElementById("taskDiv");localStorage.removeItem(e);let n=document.getElementById(e+"-div");t.removeChild(n)};var s=e=>{let t=JSON.parse(localStorage[e]);t.status=!t.status,localStorage.setItem(e,JSON.stringify(t))};var p=e=>{let t=JSON.parse(localStorage[e]),n=document.getElementById(e+"-statusDiv");1==t.status?(n.textContent="Already done",n.setAttribute("style","color: rgb(24, 110, 17)")):0==t.status&&(n.textContent="Not done yet",n.setAttribute("style","color: rgb(218, 42, 42)"))};var m=e=>{let t=document.getElementById("taskDiv"),n=document.createElement("div");n.className="task-container",n.setAttribute("id",e.title+"-div");let l=document.createElement("div");l.className="task-titleDiv",l.setAttribute("id",e.title+"-titleDiv"),l.innerText=""+e.title;let i=document.createElement("div");i.className="task-descDiv",i.setAttribute("id",e.title+"-descDiv"),i.innerText=""+e.description;let r=document.createElement("div");r.className="task-dateDiv",r.setAttribute("id",e.title+"-dateDiv"),r.innerText=""+e.date;let d=document.createElement("div");d.className="task-priorityDiv",d.setAttribute("id",e.title+"-priorityDiv"),d.innerText=""+e.priority,"Low"==e.priority?d.setAttribute("style","color: rgb(24, 110, 17)"):"Medium"==e.priority?d.setAttribute("style","color: rgb(231, 197, 4)"):"High"==e.priority&&d.setAttribute("style","color: rgb(218, 42, 42)");let a=document.createElement("div");a.setAttribute("id",e.title+"-statusDiv"),a.className="statusDiv",1==e.status?(a.innerText="Already done",a.setAttribute("style","color: rgb(24, 110, 17)")):0==e.status&&(a.innerText="Not done yet",a.setAttribute("style","color: rgb(218, 42, 42)"));let o=document.createElement("div");o.setAttribute("id",e.title+"-buttonsDiv"),o.className="buttonsDiv";let m=document.createElement("button");m.innerText="Delete",m.className="taskBtn";let v=document.createElement("button");v.innerText="Mark as complete",statusbar.className="taskBtn";let b=document.createElement("button");b.innerText="Edit",b.className="taskBtn",t.appendChild(n),n.appendChild(l),n.appendChild(i),n.appendChild(r),n.appendChild(d),n.appendChild(a),n.appendChild(o),o.appendChild(m),o.appendChild(v),o.appendChild(b),m.addEventListener("click",()=>{u(e.title)}),v.addEventListener("click",()=>{s(e.title),p(e.title),location.reload()}),b.addEventListener("click",()=>{c(e)})};const v=document.querySelector(".content");var b=e=>{let t=document.createElement("div");t.setAttribute("id","taskDiv"),v.appendChild(t);let n=d(),l=[];1==e?l=n.filter(e=>1==e.status):0==e?l=n.filter(e=>0==e.status):null==e&&(l=n),l.forEach(e=>{m(e)})};const y=document.querySelector(".content");(()=>{(function(){let e=document.createElement("div");e.setAttribute("id","titleDiv");let t=document.createElement("h1");t.textContent="To Do List",e.appendChild(t),y.appendChild(e)})(),function(){let e=document.createElement("div");e.setAttribute("id","tasksBtnDiv");let t=document.createElement("button");t.innerText="All";let n=document.createElement("button");n.innerText="Completed";let l=document.createElement("button");l.innerText="Not completed";let i=document.createElement("button");i.innerText="Add Task",e.appendChild(t),e.appendChild(n),e.appendChild(l),e.appendChild(i),y.append(e),t.addEventListener("click",()=>{y.removeChild(y.lastChild),b(null)}),n.addEventListener("click",()=>{y.removeChild(y.lastChild),b(!0)}),l.addEventListener("click",()=>{y.removeChild(y.lastChild),b(!1)}),i.addEventListener("click",()=>{c(!1)})}(),b()})()}]);