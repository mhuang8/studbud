!function(){const e=document.getElementById("startCounter"),t=document.getElementById("stopCounter"),n=document.getElementById("resetCounter"),r=document.getElementById("studyTypeInput"),o=document.getElementById("startBreakCounter"),d=document.getElementById("stopBreakCounter"),a=document.getElementById("breakContainer");var l=document.getElementById("counter"),i=(document.getElementById("vocabTimer"),document.getElementById("textbookTimer"),document.getElementById("readingTimer"),document.getElementById("todayDate")),c=(document.getElementById("currentTime"),document.getElementsByClassName("vocabFlowTime")),m=document.getElementsByClassName("textbookFlowTime"),u=document.getElementsByClassName("readingFlowTime");document.getElementsByClassName("flowTimeTable");let s=0,g=null,b=0,p=0,T=0;JSON.parse(window.localStorage.getItem("timerData"));function y(e){let t=Math.floor(e/3600),n=Math.floor(e/60-60*t),r=Math.floor(e%60);return r<10&&(r=`0${r}`),n<10&&(n=`0${n}`),t<10&&(t=`0${t}`),`${t}:${n}:${r}`}function E(){g=setInterval((()=>{s+=1,document.getElementById("counter").innerHTML=y(s),"Vocab"==r.value?b+=1:"Textbook"==r.value?p+=1:"Reading"==r.value&&(T+=1)}),1e3)}var v,I,M;l.innerHTML="<div>"+y(s)+"</div>";var k,B,f,L,h=new Date;e.addEventListener("click",(function(t){var n;e.disabled=!0,a.style.display="none",E(),h.getMinutes()<10?n=h.getHours()+":0"+h.getMinutes():h.getMinutes()>=10&&(n=h.getHours()+":"+h.getMinutes()),v="startTime"+(x+1).toString(),x+=1,window.localStorage.setItem(v,JSON.stringify(n))})),t.addEventListener("click",(t=>{clearInterval(g),e.disabled=!1;const n={Vocab:b,Textbook:p,Reading:T};var o;window.localStorage.setItem("timerData",JSON.stringify(n)),document.getElementById("vocabTimer").innerHTML=y(n.Vocab),document.getElementById("textbookTimer").innerHTML=y(n.Textbook),document.getElementById("readingTimer").innerHTML=y(n.Reading),h.getMinutes()<10?o=h.getHours()+":0"+h.getMinutes():h.getMinutes()>=10&&(o=h.getHours()+":"+h.getMinutes()),I="endTime"+(C+1).toString(),C+=1,window.localStorage.setItem(I,JSON.stringify(o)),function(){let e=JSON.parse(window.localStorage.getItem(v)),t=JSON.parse(window.localStorage.getItem(I));if("Vocab"==r.value){(w=document.createElement("tr")).setAttribute("class","vocabFlowTime"),w.innerHTML="<td>"+e+"</td>";var n=document.createElement("td");n.innerHTML="<td>"+t+"</td>",w.appendChild(n),c[c.length-1].parentNode.insertBefore(w,c[c.length-1].nextSibling)}else if("Textbook"==r.value){(H=document.createElement("tr")).innerHTML="<td>"+e+"</td>";var o=document.createElement("td");o.innerHTML="<td>"+t+"</td>",H.appendChild(o),m[m.length-1].parentNode.insertBefore(H,m[m.length-1].nextSibling)}else if("Reading"==r.value){(S=document.createElement("tr")).innerHTML="<p>"+e+"</p>";var d=document.createElement("td");d.innerHTML="<td>"+t+"</td>",S.appendChild(d),u[u.length-1].parentNode.insertBefore(S,u[u.length-1].nextSibling)}}()})),n.addEventListener("click",(t=>{s=0,clearInterval(g),a.style.display="block",document.getElementById("counter").innerHTML=y(s),e.disabled=!1})),o.addEventListener("click",(function(e){o.disabled=!0,E()})),d.addEventListener("click",(function(e){clearInterval(g),o.disabled=!1,M="breakTime"+(N+1).toString(),N+=1,window.localStorage.setItem(M,JSON.stringify(s)),function(){let e=JSON.parse(window.localStorage.getItem(M));if("Vocab"==r.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox name=interruptCheckbox class=interruptCheckboxInput></td>",w.append(t,n)}else if("Textbook"==r.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox name=interruptCheckbox class=interruptCheckboxInput></td>",H.append(t,n)}else if("Reading"==r.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox name=interruptCheckbox class=interruptCheckboxInput></td>",S.append(t,n)}}()})),i.innerHTML=(k=new Date,B=k.getDate(),f=k.getMonth(),L=k.getFullYear(),"<strong>Today: "+B+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][f]+" "+L+"</strong>");var w,H,S,x=0,C=0,N=0}();
//# sourceMappingURL=index.ff7328c8.js.map
