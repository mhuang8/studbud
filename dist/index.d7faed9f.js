!function(){hamburgerMenu=document.getElementById("hamburgerMenu"),verticalNav=document.getElementById("vertical-nav");const e=document.getElementById("taskform");document.querySelector("#taskform > button");var t=document.getElementById("taskInput"),n=document.getElementById("dueDateInput"),a=document.getElementById("completionTimeInput"),o=document.getElementById("estimatedTimeInput"),r=document.getElementById("priorityInput"),l=(document.getElementById("tasklistTable"),document.getElementById("board-container")),d=document.getElementById("toDoColumn"),i=document.getElementById("boardNameInput");document.querySelector("#kanbanCard");const c=document.querySelectorAll(".boardColumn");var s=document.getElementsByClassName("kanbanPriority");document.querySelectorAll(".boardBarDecoration");const u=document.getElementById("kanbanForm"),m=document.getElementById("startCounter"),g=document.getElementById("stopCounter"),y=document.getElementById("resetCounter"),p=document.getElementById("studyTypeInput"),E=document.getElementById("startBreakCounter"),v=document.getElementById("stopBreakCounter"),b=document.getElementById("breakContainer");var f=document.getElementById("musicModal"),h=document.getElementById("musicBtn");const k=document.querySelector(".music-container"),B=document.querySelector("#prevBtn"),L=document.querySelector("#playBtn"),I=document.querySelector("#nextBtn"),T=document.querySelector("#audioTrack"),M=document.querySelector(".progress-container"),C=document.querySelector(".progress-bar"),S=document.getElementById("songTitle"),H=document.getElementById("songArtist"),w=document.getElementById("songCover");var D=document.getElementById("todayDate"),N=(document.getElementById("currentTime"),document.getElementsByClassName("vocabFlowTime")),x=document.getElementsByClassName("textbookFlowTime"),A=document.getElementsByClassName("readingFlowTime");document.getElementsByClassName("flowTimeTable");const q=document.querySelectorAll(".resource-nav > ul > li > a"),R=document.querySelectorAll(".sub-page-container");var F=document.getElementById("resourceModal");const J=document.getElementById("addReadResourceBtn"),O=document.getElementById("addWatchResourceBtn"),$=document.getElementById("addListenResourceBtn"),P=(document.getElementById("submitResourceBtn"),document.getElementById("readLink")),V=document.getElementById("watchLink"),_=document.getElementById("listenLink"),K=document.getElementById("readPage"),W=document.getElementById("watch"),Y=document.getElementById("listen"),X=document.getElementById("resourceForm"),Z=(document.getElementById("openAllLinksBtn"),document.getElementById("readLinksBtn")),j=document.getElementById("watchLinksBtn"),z=document.getElementById("listenLinksBtn");class G{constructor(e,t){this.links=e,this.pages=t,this.currentPage=null}getLinks(){console.log(this.links)}setPage(e){this.currentPage=e,this.links.forEach((t=>{t.classList.remove("active"),this.getHash(t)===e&&t.classList.add("active")})),this.pages.forEach((e=>{e.style.display="none"})),document.getElementById(e).style.display="block"}getHash(e){return e.href.split("#")[1]}}var Q=new G(document.querySelectorAll(".main-nav > ul > li > a"),document.querySelectorAll(".page-container"));Q.getLinks(),Q.links.forEach((function(e){e.addEventListener("click",(function(){let t=Q.getHash(e);Q.setPage(t)}))})),hamburgerMenu.addEventListener("click",(()=>{verticalNav.classList.contains("open")?(document.getElementById("vertical-nav").style.width="0",document.getElementById("main").style.marginLeft="0",verticalNav.classList.remove("open"),hamburgerMenu.querySelector("i.fa").classList.remove("fa-times"),hamburgerMenu.querySelector("i.fa").classList.add("fa-bars")):(document.getElementById("vertical-nav").style.width="11.25rem",document.getElementById("main").style.marginLeft="11.25rem",verticalNav.classList.add("open"),hamburgerMenu.querySelector("i.fa").classList.remove("fa-bars"),hamburgerMenu.querySelector("i.fa").classList.add("fa-times"))}));var U=new G(q,R);U.links.forEach((e=>{e.addEventListener("click",(function(){let t=U.getHash(e);U.setPage(t)}))})),e.addEventListener("submit",(function(l){l.preventDefault(),function(t,n,a,o,r,l){let i=(new Date).getFullYear(),c={taskDescription:t,dueDate:n,dateCreated:i,completionTime:a,estimatedTime:o,priorityRating:r,completionStatus:l};ee.push(c),function(t){let n=document.createElement("tr");n.setAttribute("class","newTaskItem");let a=document.createElement("td");a.innerHTML+="<label for=taskCheckbox><input type=checkbox name=taskCheckbox class=taskCheckboxInput><strong>"+t.taskDescription+"</strong></label>";let o=document.createElement("td");o.innerHTML+="<p>"+t.dueDate+"</p>";let r=document.createElement("td");r.innerHTML+="<p>"+t.completionTime+"</p>";let l=document.createElement("td");l.innerHTML+="<p>"+t.estimatedTime+" min</p>";let d=document.createElement("td");d.innerHTML+="<p>"+t.priorityRating+"</p>";let i=document.createElement("td");n.append(a,o,r,l,d,i),tasklistTable.appendChild(n);let c=document.createElement("button");c.setAttribute("class","taskDelBtn"),c.innerHTML="<i class='fas fa-trash'></i>",i.appendChild(c),c.addEventListener("click",(function(e){e.preventDefault(),n.remove()})),e.reset();var s=document.getElementsByClassName("newTaskItem"),u=document.getElementsByClassName("taskCheckboxInput");"Low"===t.priorityRating?(s[s.length-1].style.backgroundColor="#E2EDF7",u[u.length-1].style.border="solid #8CB7F2"):"Medium"===t.priorityRating?(s[s.length-1].style.backgroundColor="#FCF4DD",u[u.length-1].style.border="solid #F7D382"):"High"===t.priorityRating&&(s[s.length-1].style.backgroundColor="#F7D7E7",u[u.length-1].style.border="solid #EAA0D3")}(c),function(e){let t=document.createElement("div");t.setAttribute("id","kanbanCard"),t.setAttribute("draggable","true"),t.innerHTML="<div class = kanbanPriority><p>"+e.priorityRating+"</p><div>",t.innerHTML+="<h4>"+e.taskDescription+"</h4>",t.innerHTML+="<p><i class='far fa-calendar-check'></i> <strong>"+e.dueDate+"<strong> ("+e.completionTime+")</p>",t.innerHTML+="<p>"+e.estimatedTime+" min</p>",d.appendChild(t),"Low"===e.priorityRating?s[s.length-1].style.backgroundColor="#5598F5":"Medium"===e.priorityRating?s[s.length-1].style.backgroundColor="#F8BF53":"High"===e.priorityRating&&(s[s.length-1].style.backgroundColor="#EB68A9");console.log(s)}(c)}(t.value,n.value,a.value,o.value,r.options[r.selectedIndex].value,!1),console.log(ee)}));var ee=[];u.addEventListener("submit",(function(e){let t=i.value;e.preventDefault(),function(e){let t=document.createElement("div");t.setAttribute("class","boardColumn"),t.innerHTML+="<div class='boardBarDecoration'></div>",t.innerHTML+="<h4 contenteditable='true'>"+e+"</h4>",l.appendChild(t)}(t)}));let te=null;document.body.addEventListener("dragstart",(function(e){"kanbanCard"==e.target.id&&(te=e.target,console.log("dragstart"),setTimeout((function(){e.target.style.display="none"}),0))})),document.body.addEventListener("dragend",(function(e){"kanbanCard"==e.target.id&&(console.log("dragend"),setTimeout((function(){e.target.style.display="block",te=null}),0))}));for(let e=0;e<c.length;e++){const t=c[e];t.addEventListener("dragover",(function(e){e.preventDefault(),console.log("dragover")})),t.addEventListener("dragenter",(function(e){e.preventDefault(),console.log("dragenter")})),t.addEventListener("drop",(function(e){console.log("drop"),this.append(te)}))}h.addEventListener("click",(function(){f.style.display="block"})),window.addEventListener("click",(function(e){e.target==f?f.style.display="none":e.target==F&&(F.style.display="none")}));const ne=["Imagine","Bored","Fresh Air","Rose"],ae=["BgH Beats","LuKremBo","Zeeky Beats","LuKremBo"];let oe=1,re=1;function le(e,t){S.innerText=e,H.innerText=t,T.src=`music/${e}.mp3`,w.src=`images/${e}.png`}function de(){k.classList.add("play"),L.querySelector("i.fas").classList.remove("fa-play"),L.querySelector("i.fas").classList.add("fa-pause"),T.play()}function ie(){oe++,re++,oe>ne.length-1&&(oe=0),re>ae.length-1&&(re=0),le(ne[oe],ae[re]),de()}le(ne[oe],ae[re]),L.addEventListener("click",(()=>{k.classList.contains("play")?(k.classList.remove("play"),L.querySelector("i.fas").classList.remove("fa-pause"),L.querySelector("i.fas").classList.add("fa-play"),T.pause()):de()})),B.addEventListener("click",(function(){oe--,re--,oe<0&&(oe=ne.length-1),re<0&&(re=ae.length-1),le(ne[oe],ae[re]),de()})),I.addEventListener("click",ie),T.addEventListener("timeupdate",(function(e){const{duration:t,currentTime:n}=e.srcElement,a=n/t*100;C.style.width=`${a}%`})),M.addEventListener("click",(function(e){const t=this.clientWidth,n=e.offsetX,a=T.duration;T.currentTime=n/t*a})),T.addEventListener("ended",ie),J.addEventListener("click",(function(){F.style.display="block"})),O.addEventListener("click",(function(){F.style.display="block"})),$.addEventListener("click",(function(){F.style.display="block"}));var ce=document.getElementById("resourceNameInput"),se=document.getElementById("resourceDescriptionInput"),ue=document.getElementById("resourceLinkInput");document.getElementById("resourceCard");X.addEventListener("submit",(function(e){e.preventDefault(),function(){let e=ue.value,t=document.createElement("div");t.setAttribute("id","resourceCard");let n=document.createElement("button");n.setAttribute("class","delResourceBtn"),n.setAttribute("type","button"),n.innerHTML="<i class='fas fa-trash'></i>",t.appendChild(n);let a=document.createElement("a");a.setAttribute("href",e),a.setAttribute("target","_blank"),a.setAttribute("class","resourceHyperLink"),a.innerHTML="<h4>"+ce.value+"</h4>",t.appendChild(a),t.innerHTML+="<p>"+se.value+"</p>","active"==P.className?(K.appendChild(t),me.push(e),console.log(me)):"active"==V.className?(W.appendChild(t),ge.push(e),console.log(ge)):"active"==_.className&&(Y.appendChild(t),ye.push(e),console.log(ye));var o=document.getElementsByClassName("delResourceBtn");for(let e=0;e<o.length;e++)o[e].addEventListener("click",(function(e){e.preventDefault(),t.remove()}))}(),F.style.display="none",X.reset()}));var me=[],ge=[],ye=[];Z.addEventListener("click",(function(){for(let e=0;e<me.length;e++)window.open(me[e],"_blank")})),j.addEventListener("click",(function(){for(let e=0;e<ge.length;e++)window.open(ge[e],"_blank")})),z.addEventListener("click",(function(){for(let e=0;e<ye.length;e++)window.open(ye[e],"_blank")}));let pe=0,Ee=null,ve=0,be=0,fe=0;var he=document.getElementById("counter");document.getElementById("vocabTimer"),document.getElementById("textbookTimer"),document.getElementById("readingTimer");JSON.parse(window.localStorage.getItem("timerData"));function ke(e){let t=Math.floor(e/3600),n=Math.floor(e/60-60*t),a=Math.floor(e%60);return a<10&&(a=`0${a}`),n<10&&(n=`0${n}`),t<10&&(t=`0${t}`),`${t}:${n}:${a}`}function Be(){Ee=setInterval((()=>{pe+=1,document.getElementById("counter").innerHTML=ke(pe),"Vocab"==p.value?ve+=1:"Textbook"==p.value?be+=1:"Reading"==p.value&&(fe+=1)}),1e3)}var Le,Ie,Te;he.innerHTML="<div>"+ke(pe)+"</div>";var Me,Ce,Se,He,we=new Date;m.addEventListener("click",(function(e){var t;m.disabled=!0,b.style.display="none",Be(),we.getMinutes()<10?t=we.getHours()+":0"+we.getMinutes():we.getMinutes()>=10&&(t=we.getHours()+":"+we.getMinutes()),Le="startTime"+(Ae+1).toString(),Ae+=1,window.localStorage.setItem(Le,JSON.stringify(t))})),E.addEventListener("click",(function(e){E.disabled=!0,Be()})),v.addEventListener("click",(function(e){clearInterval(Ee),E.disabled=!1,Te="breakTime"+(Re+1).toString(),Re+=1,window.localStorage.setItem(Te,JSON.stringify(pe)),function(){let e=JSON.parse(window.localStorage.getItem(Te));if("Vocab"==p.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox class=interruptCheckboxInput></td>",De.append(t,n)}else if("Textbook"==p.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox class=interruptCheckboxInput></td>",Ne.append(t,n)}else if("Reading"==p.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox class=interruptCheckboxInput></td>",xe.append(t,n)}}()})),g.addEventListener("click",(e=>{clearInterval(Ee),m.disabled=!1;const t={Vocab:ve,Textbook:be,Reading:fe};var n;window.localStorage.setItem("timerData",JSON.stringify(t)),document.getElementById("vocabTimer").innerHTML=ke(t.Vocab),document.getElementById("textbookTimer").innerHTML=ke(t.Textbook),document.getElementById("readingTimer").innerHTML=ke(t.Reading),we.getMinutes()<10?n=we.getHours()+":0"+we.getMinutes():we.getMinutes()>=10&&(n=we.getHours()+":"+we.getMinutes()),Ie="endTime"+(qe+1).toString(),qe+=1,window.localStorage.setItem(Ie,JSON.stringify(n)),function(){let e=JSON.parse(window.localStorage.getItem(Le)),t=JSON.parse(window.localStorage.getItem(Ie));if("Vocab"==p.value){(De=document.createElement("tr")).setAttribute("class","vocabFlowTime"),De.innerHTML="<td>"+e+"</td>";var n=document.createElement("td");n.innerHTML="<td>"+t+"</td>",De.appendChild(n),N[N.length-1].parentNode.insertBefore(De,N[N.length-1].nextSibling)}else if("Textbook"==p.value){(Ne=document.createElement("tr")).innerHTML="<td>"+e+"</td>";var a=document.createElement("td");a.innerHTML="<td>"+t+"</td>",Ne.appendChild(a),x[x.length-1].parentNode.insertBefore(Ne,x[x.length-1].nextSibling)}else if("Reading"==p.value){(xe=document.createElement("tr")).innerHTML="<p>"+e+"</p>";var o=document.createElement("td");o.innerHTML="<td>"+t+"</td>",xe.appendChild(o),A[A.length-1].parentNode.insertBefore(xe,A[A.length-1].nextSibling)}}()})),y.addEventListener("click",(e=>{pe=0,clearInterval(Ee),b.style.display="block",document.getElementById("counter").innerHTML=ke(pe),m.disabled=!1})),D.innerHTML=(Me=new Date,Ce=Me.getDate(),Se=Me.getMonth(),He=Me.getFullYear(),"<strong>Today: "+Ce+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][Se]+" "+He+"</strong>");var De,Ne,xe,Ae=0,qe=0,Re=0}();
//# sourceMappingURL=index.d7faed9f.js.map
