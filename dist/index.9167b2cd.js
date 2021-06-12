!function(){hamburgerMenu=document.getElementById("hamburgerMenu"),verticalNav=document.getElementById("vertical-nav");const e=document.getElementById("taskform");document.querySelector("#taskform > button");var t=document.getElementById("taskInput"),n=document.getElementById("dueDateInput"),a=document.getElementById("completionTimeInput"),r=document.getElementById("estimatedTimeInput"),o=document.getElementById("priorityInput"),l=(document.getElementById("tasklistTable"),document.getElementById("board-container")),d=document.getElementById("toDoColumn"),i=document.getElementById("boardNameInput");document.querySelector("#kanbanCard");const c=document.querySelectorAll(".boardColumn");var s=document.getElementsByClassName("kanbanPriority");document.querySelectorAll(".boardBarDecoration");const u=document.getElementById("kanbanForm"),m=document.getElementById("startCounter"),g=document.getElementById("stopCounter"),y=document.getElementById("resetCounter"),p=document.getElementById("studyTypeInput"),E=document.getElementById("startBreakCounter"),v=document.getElementById("stopBreakCounter");var b=document.getElementById("musicModal"),f=document.getElementById("musicBtn");const h=document.querySelector(".music-container"),k=document.querySelector("#prevBtn"),L=document.querySelector("#playBtn"),B=document.querySelector("#nextBtn"),I=document.querySelector("#audioTrack"),T=document.querySelector(".progress-container"),M=document.querySelector(".progress-bar"),C=document.getElementById("songTitle"),S=document.getElementById("songArtist"),H=document.getElementById("songCover");var w=document.getElementById("todayDate"),D=(document.getElementById("currentTime"),document.getElementsByClassName("vocabFlowTime")),N=document.getElementsByClassName("textbookFlowTime"),x=document.getElementsByClassName("readingFlowTime");document.getElementsByClassName("flowTimeTable");const A=document.querySelectorAll(".resource-nav > ul > li > a"),q=document.querySelectorAll(".sub-page-container");var R=document.getElementById("resourceModal");const F=document.getElementById("addReadResourceBtn"),J=document.getElementById("addWatchResourceBtn"),O=document.getElementById("addListenResourceBtn"),$=(document.getElementById("submitResourceBtn"),document.getElementById("readLink")),P=document.getElementById("watchLink"),V=document.getElementById("listenLink"),_=document.getElementById("readPage"),K=document.getElementById("watch"),W=document.getElementById("listen"),Y=document.getElementById("resourceForm"),X=document.getElementById("readLinksBtn"),Z=document.getElementById("watchLinksBtn"),j=document.getElementById("listenLinksBtn");class z{constructor(e,t){this.links=e,this.pages=t,this.currentPage=null}getLinks(){console.log(this.links)}setPage(e){this.currentPage=e,this.links.forEach((t=>{t.classList.remove("active"),this.getHash(t)===e&&t.classList.add("active")})),this.pages.forEach((e=>{e.style.display="none"})),document.getElementById(e).style.display="block"}getHash(e){return e.href.split("#")[1]}}var G=new z(document.querySelectorAll(".main-nav > ul > li > a"),document.querySelectorAll(".page-container"));G.getLinks(),G.links.forEach((function(e){e.addEventListener("click",(function(){let t=G.getHash(e);G.setPage(t)}))})),hamburgerMenu.addEventListener("click",(()=>{verticalNav.classList.contains("open")?(document.getElementById("vertical-nav").style.width="0",document.getElementById("main").style.marginLeft="0",verticalNav.classList.remove("open"),hamburgerMenu.querySelector("i.fa").classList.remove("fa-times"),hamburgerMenu.querySelector("i.fa").classList.add("fa-bars")):(document.getElementById("vertical-nav").style.width="11.25rem",document.getElementById("main").style.marginLeft="11.25rem",verticalNav.classList.add("open"),hamburgerMenu.querySelector("i.fa").classList.remove("fa-bars"),hamburgerMenu.querySelector("i.fa").classList.add("fa-times"))}));var Q=new z(A,q);Q.links.forEach((e=>{e.addEventListener("click",(function(){let t=Q.getHash(e);Q.setPage(t)}))})),e.addEventListener("submit",(function(l){l.preventDefault(),function(t,n,a,r,o,l){let i=(new Date).getFullYear(),c={taskDescription:t,dueDate:n,dateCreated:i,completionTime:a,estimatedTime:r,priorityRating:o,completionStatus:l};U.push(c),function(t){let n=document.createElement("tr");n.setAttribute("class","newTaskItem");let a=document.createElement("td");a.innerHTML+="<label for=taskCheckbox><input type=checkbox name=taskCheckbox class=taskCheckboxInput><strong>"+t.taskDescription+"</strong></label>";let r=document.createElement("td");r.innerHTML+="<p>"+t.dueDate+"</p>";let o=document.createElement("td");o.innerHTML+="<p>"+t.completionTime+"</p>";let l=document.createElement("td");l.innerHTML+="<p>"+t.estimatedTime+" min</p>";let d=document.createElement("td");d.innerHTML+="<p>"+t.priorityRating+"</p>";let i=document.createElement("td");n.append(a,r,o,l,d,i),tasklistTable.appendChild(n);let c=document.createElement("button");c.setAttribute("class","taskDelBtn"),c.innerHTML="<i class='fas fa-trash'></i>",i.appendChild(c),c.addEventListener("click",(function(e){e.preventDefault(),n.remove()})),e.reset();var s=document.getElementsByClassName("newTaskItem"),u=document.getElementsByClassName("taskCheckboxInput");"Low"===t.priorityRating?(s[s.length-1].style.backgroundColor="#E2EDF7",u[u.length-1].style.border="solid #8CB7F2"):"Medium"===t.priorityRating?(s[s.length-1].style.backgroundColor="#FCF4DD",u[u.length-1].style.border="solid #F7D382"):"High"===t.priorityRating&&(s[s.length-1].style.backgroundColor="#F7D7E7",u[u.length-1].style.border="solid #EAA0D3")}(c),function(e){let t=document.createElement("div");t.setAttribute("id","kanbanCard"),t.setAttribute("draggable","true"),t.innerHTML="<div class = kanbanPriority><p>"+e.priorityRating+"</p><div>",t.innerHTML+="<h4>"+e.taskDescription+"</h4>",t.innerHTML+="<p><i class='far fa-calendar-check'></i> <strong>"+e.dueDate+"<strong> ("+e.completionTime+")</p>",t.innerHTML+="<p>"+e.estimatedTime+" min</p>",d.appendChild(t),"Low"===e.priorityRating?s[s.length-1].style.backgroundColor="#5598F5":"Medium"===e.priorityRating?s[s.length-1].style.backgroundColor="#F8BF53":"High"===e.priorityRating&&(s[s.length-1].style.backgroundColor="#EB68A9");console.log(s)}(c)}(t.value,n.value,a.value,r.value,o.options[o.selectedIndex].value,!1),console.log(U)}));var U=[];u.addEventListener("submit",(function(e){let t=i.value;e.preventDefault(),function(e){let t=document.createElement("div");t.setAttribute("class","boardColumn"),t.innerHTML+="<div class='boardBarDecoration'></div>",t.innerHTML+="<h4 contenteditable='true'>"+e+"</h4>",l.appendChild(t)}(t)}));let ee=null;document.body.addEventListener("dragstart",(function(e){"kanbanCard"==e.target.id&&(ee=e.target,console.log("dragstart"),setTimeout((function(){e.target.style.display="none"}),0))})),document.body.addEventListener("dragend",(function(e){"kanbanCard"==e.target.id&&(console.log("dragend"),setTimeout((function(){e.target.style.display="block",ee=null}),0))}));for(let e=0;e<c.length;e++){const t=c[e];t.addEventListener("dragover",(function(e){e.preventDefault(),console.log("dragover")})),t.addEventListener("dragenter",(function(e){e.preventDefault(),console.log("dragenter")})),t.addEventListener("drop",(function(e){console.log("drop"),this.append(ee)}))}f.addEventListener("click",(function(){b.style.display="block"})),window.addEventListener("click",(function(e){e.target==b?b.style.display="none":e.target==R&&(R.style.display="none")}));const te=["Imagine","Bored","Fresh Air","Rose"],ne=["BgH Beats","LuKremBo","Zeeky Beats","LuKremBo"];let ae=1,re=1;function oe(e,t){C.innerText=e,S.innerText=t,I.src=`music/${e}.mp3`,H.src=`images/${e}.png`}function le(){h.classList.add("play"),L.querySelector("i.fas").classList.remove("fa-play"),L.querySelector("i.fas").classList.add("fa-pause"),I.play()}function de(){ae++,re++,ae>te.length-1&&(ae=0),re>ne.length-1&&(re=0),oe(te[ae],ne[re]),le()}oe(te[ae],ne[re]),L.addEventListener("click",(()=>{h.classList.contains("play")?(h.classList.remove("play"),L.querySelector("i.fas").classList.remove("fa-pause"),L.querySelector("i.fas").classList.add("fa-play"),I.pause()):le()})),k.addEventListener("click",(function(){ae--,re--,ae<0&&(ae=te.length-1),re<0&&(re=ne.length-1),oe(te[ae],ne[re]),le()})),B.addEventListener("click",de),I.addEventListener("timeupdate",(function(e){const{duration:t,currentTime:n}=e.srcElement,a=n/t*100;M.style.width=`${a}%`})),T.addEventListener("click",(function(e){const t=this.clientWidth,n=e.offsetX,a=I.duration;I.currentTime=n/t*a})),I.addEventListener("ended",de),F.addEventListener("click",(function(){R.style.display="block"})),J.addEventListener("click",(function(){R.style.display="block"})),O.addEventListener("click",(function(){R.style.display="block"}));var ie=document.getElementById("resourceNameInput"),ce=document.getElementById("resourceDescriptionInput"),se=document.getElementById("resourceLinkInput");document.getElementById("resourceCard");Y.addEventListener("submit",(function(e){e.preventDefault(),function(){let e=se.value,t=document.createElement("div");t.setAttribute("id","resourceCard");let n=document.createElement("button");n.setAttribute("class","delResourceBtn"),n.setAttribute("type","button"),n.innerHTML="<i class='fas fa-trash'></i>",t.appendChild(n);let a=document.createElement("a");a.setAttribute("href",e),a.setAttribute("target","_blank"),a.setAttribute("class","resourceHyperLink"),a.innerHTML="<h4>"+ie.value+"</h4>",t.appendChild(a),t.innerHTML+="<p>"+ce.value+"</p>","active"==$.className?(_.appendChild(t),ue.push(e),console.log(ue)):"active"==P.className?(K.appendChild(t),me.push(e),console.log(me)):"active"==V.className&&(W.appendChild(t),ge.push(e),console.log(ge));var r=document.getElementsByClassName("delResourceBtn");for(let e=0;e<r.length;e++)r[e].addEventListener("click",(function(e){e.preventDefault(),t.remove()}))}(),R.style.display="none",Y.reset()}));var ue=[],me=[],ge=[];X.addEventListener("click",(function(){for(let e=0;e<ue.length;e++)window.open(ue[e],"_blank")})),Z.addEventListener("click",(function(){for(let e=0;e<me.length;e++)window.open(me[e],"_blank")})),j.addEventListener("click",(function(){for(let e=0;e<ge.length;e++)window.open(ge[e],"_blank")}));let ye=0,pe=null,Ee=0,ve=0,be=0;var fe=document.getElementById("counter");document.getElementById("vocabTimer"),document.getElementById("textbookTimer"),document.getElementById("readingTimer");JSON.parse(window.localStorage.getItem("timerData"));function he(e){let t=Math.floor(e/3600),n=Math.floor(e/60-60*t),a=Math.floor(e%60);return a<10&&(a=`0${a}`),n<10&&(n=`0${n}`),t<10&&(t=`0${t}`),`${t}:${n}:${a}`}function ke(){pe=setInterval((()=>{ye+=1,document.getElementById("counter").innerHTML=he(ye),"Vocab"==p.value?Ee+=1:"Textbook"==p.value?ve+=1:"Reading"==p.value&&(be+=1)}),1e3)}var Le,Be,Ie;fe.innerHTML="<div>"+he(ye)+"</div>";var Te,Me,Ce,Se,He=new Date;m.addEventListener("click",(function(e){var t;m.disabled=!0,ke(),He.getMinutes()<10?t=He.getHours()+":0"+He.getMinutes():He.getMinutes()>=10&&(t=He.getHours()+":"+He.getMinutes()),Le="startTime"+(xe+1).toString(),xe+=1,window.localStorage.setItem(Le,JSON.stringify(t))})),E.addEventListener("click",(function(e){E.disabled=!0,ke()})),v.addEventListener("click",(function(e){clearInterval(pe),E.disabled=!1,Ie="breakTime"+(qe+1).toString(),qe+=1,window.localStorage.setItem(Ie,JSON.stringify(ye)),function(){let e=JSON.parse(window.localStorage.getItem(Ie));if("Vocab"==p.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox class=interruptCheckboxInput></td>",we.append(t,n)}else if("Textbook"==p.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox class=interruptCheckboxInput></td>",De.append(t,n)}else if("Reading"==p.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox class=interruptCheckboxInput></td>",Ne.append(t,n)}}()})),g.addEventListener("click",(e=>{clearInterval(pe),m.disabled=!1;const t={Vocab:Ee,Textbook:ve,Reading:be};var n;window.localStorage.setItem("timerData",JSON.stringify(t)),document.getElementById("vocabTimer").innerHTML=he(t.Vocab),document.getElementById("textbookTimer").innerHTML=he(t.Textbook),document.getElementById("readingTimer").innerHTML=he(t.Reading),He.getMinutes()<10?n=He.getHours()+":0"+He.getMinutes():He.getMinutes()>=10&&(n=He.getHours()+":"+He.getMinutes()),Be="endTime"+(Ae+1).toString(),Ae+=1,window.localStorage.setItem(Be,JSON.stringify(n)),function(){let e=JSON.parse(window.localStorage.getItem(Le)),t=JSON.parse(window.localStorage.getItem(Be));if("Vocab"==p.value){(we=document.createElement("tr")).setAttribute("class","vocabFlowTime"),we.innerHTML="<td>"+e+"</td>";var n=document.createElement("td");n.innerHTML="<td>"+t+"</td>",we.appendChild(n),D[D.length-1].parentNode.insertBefore(we,D[D.length-1].nextSibling)}else if("Textbook"==p.value){(De=document.createElement("tr")).innerHTML="<td>"+e+"</td>";var a=document.createElement("td");a.innerHTML="<td>"+t+"</td>",De.appendChild(a),N[N.length-1].parentNode.insertBefore(De,N[N.length-1].nextSibling)}else if("Reading"==p.value){(Ne=document.createElement("tr")).innerHTML="<p>"+e+"</p>";var r=document.createElement("td");r.innerHTML="<td>"+t+"</td>",Ne.appendChild(r),x[x.length-1].parentNode.insertBefore(Ne,x[x.length-1].nextSibling)}}()})),y.addEventListener("click",(e=>{ye=0,clearInterval(pe),document.getElementById("counter").innerHTML=he(ye),m.disabled=!1})),w.innerHTML=(Te=new Date,Me=Te.getDate(),Ce=Te.getMonth(),Se=Te.getFullYear(),"<strong>Today: "+Me+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][Ce]+" "+Se+"</strong>");var we,De,Ne,xe=0,Ae=0,qe=0}();
//# sourceMappingURL=index.9167b2cd.js.map