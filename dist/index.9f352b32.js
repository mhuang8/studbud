!function(){hamburgerMenu=document.getElementById("hamburgerMenu"),verticalNav=document.getElementById("vertical-nav");const e=document.getElementById("taskform");document.querySelector("#taskform > button");var t=document.getElementById("taskInput"),n=document.getElementById("dueDateInput"),a=document.getElementById("completionTimeInput"),r=document.getElementById("estimatedTimeInput"),l=document.getElementById("priorityInput"),i=(document.getElementById("tasklistTable"),document.getElementById("board-container")),o=document.getElementById("toDoColumn"),d=document.getElementById("boardNameInput");document.querySelector("#kanbanCard");const s=document.querySelectorAll(".boardColumn");var c=document.getElementsByClassName("kanbanPriority");document.querySelectorAll(".boardBarDecoration");const u=document.getElementById("kanbanForm");class m{constructor(e,t){this.links=e,this.pages=t,this.currentPage=null}getLinks(){console.log(this.links)}setPage(e){this.currentPage=e,this.links.forEach((t=>{t.classList.remove("active"),this.getHash(t)===e&&t.classList.add("active")})),this.pages.forEach((e=>{e.style.display="none"})),document.getElementById(e).style.display="block"}getHash(e){return e.href.split("#")[1]}}var g=new m(document.querySelectorAll(".main-nav > ul > li > a"),document.querySelectorAll(".page-container"));g.getLinks(),g.links.forEach((function(e){e.addEventListener("click",(function(){let t=g.getHash(e);g.setPage(t)}))})),hamburgerMenu.addEventListener("click",(()=>{verticalNav.classList.contains("open")?(document.getElementById("vertical-nav").style.width="0",document.getElementById("main").style.marginLeft="0",verticalNav.classList.remove("open"),hamburgerMenu.querySelector("i.fa").classList.remove("fa-times"),hamburgerMenu.querySelector("i.fa").classList.add("fa-bars")):(document.getElementById("vertical-nav").style.width="11.25rem",document.getElementById("main").style.marginLeft="11.25rem",verticalNav.classList.add("open"),hamburgerMenu.querySelector("i.fa").classList.remove("fa-bars"),hamburgerMenu.querySelector("i.fa").classList.add("fa-times"))}));var p=new m(document.querySelectorAll(".resource-nav > ul > li > a"),document.querySelectorAll(".sub-page-container"));p.links.forEach((e=>{e.addEventListener("click",(function(){let t=p.getHash(e);p.setPage(t)}))})),e.addEventListener("submit",(function(i){i.preventDefault(),function(t,n,a,r,l,i){let d=(new Date).getFullYear(),s={taskDescription:t,dueDate:n,dateCreated:d,completionTime:a,estimatedTime:r,priorityRating:l,completionStatus:i};y.push(s),function(t){let n=document.createElement("tr");n.setAttribute("class","newTaskItem");let a=document.createElement("td");a.innerHTML+="<label for=taskCheckbox><input type=checkbox name=taskCheckbox class=taskCheckboxInput><strong>"+t.taskDescription+"</strong></label>";let r=document.createElement("td");r.innerHTML+="<p>"+t.dueDate+"</p>";let l=document.createElement("td");l.innerHTML+="<p>"+t.completionTime+"</p>";let i=document.createElement("td");i.innerHTML+="<p>"+t.estimatedTime+" min</p>";let o=document.createElement("td");o.innerHTML+="<p>"+t.priorityRating+"</p>";let d=document.createElement("td");n.append(a,r,l,i,o,d),tasklistTable.appendChild(n);let s=document.createElement("button");s.setAttribute("class","taskDelBtn"),s.innerHTML="<i class='fas fa-trash'></i>",d.appendChild(s),s.addEventListener("click",(function(e){e.preventDefault(),n.remove()})),e.reset();var c=document.getElementsByClassName("newTaskItem"),u=document.getElementsByClassName("taskCheckboxInput");"Low"===t.priorityRating?(c[c.length-1].style.backgroundColor="#E2EDF7",u[u.length-1].style.border="solid #8CB7F2"):"Medium"===t.priorityRating?(c[c.length-1].style.backgroundColor="#FCF4DD",u[u.length-1].style.border="solid #F7D382"):"High"===t.priorityRating&&(c[c.length-1].style.backgroundColor="#F7D7E7",u[u.length-1].style.border="solid #EAA0D3")}(s),function(e){let t=document.createElement("div");t.setAttribute("id","kanbanCard"),t.setAttribute("draggable","true"),t.innerHTML="<div class = kanbanPriority><p>"+e.priorityRating+"</p><div>",t.innerHTML+="<h5>"+e.taskDescription+"</h5>",t.innerHTML+="<p><i class='far fa-calendar-check'></i> "+e.dueDate+" ("+e.completionTime+")</p>",t.innerHTML+="<p>"+e.estimatedTime+" min</p>",o.appendChild(t),"Low"===e.priorityRating?c[c.length-1].style.backgroundColor="#5598F5":"Medium"===e.priorityRating?c[c.length-1].style.backgroundColor="#F8BF53":"High"===e.priorityRating&&(c[c.length-1].style.backgroundColor="#EB68A9");console.log(c)}(s)}(t.value,n.value,a.value,r.value,l.options[l.selectedIndex].value,!1),console.log(y)}));var y=[];u.addEventListener("submit",(function(e){let t=d.value;e.preventDefault(),function(e){let t=document.createElement("div");t.setAttribute("class","boardColumn"),t.innerHTML+="<div class='boardBarDecoration'></div>",t.innerHTML+="<h4 contenteditable='true'>"+e+"</h4>",i.appendChild(t),t.addEventListener("dragover",(function(e){e.preventDefault()})),t.addEventListener("dragenter",(function(e){e.preventDefault()})),t.addEventListener("drop",(function(e){this.append(v)}))}(t)}));let v=null;document.body.addEventListener("dragstart",(function(e){"kanbanCard"==e.target.id&&(v=e.target,console.log("dragstart"),setTimeout((function(){e.target.style.display="none"}),0))})),document.body.addEventListener("dragend",(function(e){"kanbanCard"==e.target.id&&(console.log("dragend"),setTimeout((function(){e.target.style.display="block",v=null}),0))}));for(let e=0;e<s.length;e++){const t=s[e];t.addEventListener("dragover",(function(e){e.preventDefault()})),t.addEventListener("dragenter",(function(e){e.preventDefault()})),t.addEventListener("drop",(function(e){this.append(v)}))}}();
//# sourceMappingURL=index.9f352b32.js.map