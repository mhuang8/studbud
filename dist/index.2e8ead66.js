!function(){const e=document.getElementById("startCounter"),t=document.getElementById("stopCounter"),n=document.getElementById("resetCounter"),o=document.getElementById("studyTypeInput"),r=document.getElementById("startBreakCounter"),d=document.getElementById("stopBreakCounter"),a=document.getElementById("breakContainer");var l=document.getElementById("todayDate"),i=(document.getElementById("currentTime"),document.getElementsByClassName("vocabFlowTime")),c=document.getElementsByClassName("textbookFlowTime"),m=document.getElementsByClassName("readingFlowTime");document.getElementsByClassName("flowTimeTable");let u=0,s=null,g=0,T=0,b=0;var p=document.getElementById("counter");document.getElementById("vocabTimer"),document.getElementById("textbookTimer"),document.getElementById("readingTimer");JSON.parse(window.localStorage.getItem("timerData"));function y(e){let t=Math.floor(e/3600),n=Math.floor(e/60-60*t),o=Math.floor(e%60);return o<10&&(o=`0${o}`),n<10&&(n=`0${n}`),t<10&&(t=`0${t}`),`${t}:${n}:${o}`}function E(){s=setInterval((()=>{u+=1,document.getElementById("counter").innerHTML=y(u),"Vocab"==o.value?g+=1:"Textbook"==o.value?T+=1:"Reading"==o.value&&(b+=1)}),1e3)}var v,I,M;p.innerHTML="<div>"+y(u)+"</div>";var B,f,k,L,w=new Date;e.addEventListener("click",(function(t){var n;e.disabled=!0,a.style.display="none",E(),w.getMinutes()<10?n=w.getHours()+":0"+w.getMinutes():w.getMinutes()>=10&&(n=w.getHours()+":"+w.getMinutes()),v="startTime"+(x+1).toString(),x+=1,window.localStorage.setItem(v,JSON.stringify(n))})),r.addEventListener("click",(function(e){r.disabled=!0,E()})),d.addEventListener("click",(function(e){clearInterval(s),r.disabled=!1,M="breakTime"+(N+1).toString(),N+=1,window.localStorage.setItem(M,JSON.stringify(u)),function(){let e=JSON.parse(window.localStorage.getItem(M));if("Vocab"==o.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox class=interruptCheckboxInput></td>",H.append(t,n)}else if("Textbook"==o.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox class=interruptCheckboxInput></td>",S.append(t,n)}else if("Reading"==o.value){let t=document.createElement("td");t.innerHTML="<td>"+e+"</td>";let n=document.createElement("td");n.innerHTML="<td><input type=checkbox class=interruptCheckboxInput></td>",h.append(t,n)}}()})),t.addEventListener("click",(t=>{clearInterval(s),e.disabled=!1;const n={Vocab:g,Textbook:T,Reading:b};var r;window.localStorage.setItem("timerData",JSON.stringify(n)),document.getElementById("vocabTimer").innerHTML=y(n.Vocab),document.getElementById("textbookTimer").innerHTML=y(n.Textbook),document.getElementById("readingTimer").innerHTML=y(n.Reading),w.getMinutes()<10?r=w.getHours()+":0"+w.getMinutes():w.getMinutes()>=10&&(r=w.getHours()+":"+w.getMinutes()),I="endTime"+(C+1).toString(),C+=1,window.localStorage.setItem(I,JSON.stringify(r)),function(){let e=JSON.parse(window.localStorage.getItem(v)),t=JSON.parse(window.localStorage.getItem(I));if("Vocab"==o.value){(H=document.createElement("tr")).setAttribute("class","vocabFlowTime"),H.innerHTML="<td>"+e+"</td>";var n=document.createElement("td");n.innerHTML="<td>"+t+"</td>",H.appendChild(n),i[i.length-1].parentNode.insertBefore(H,i[i.length-1].nextSibling)}else if("Textbook"==o.value){(S=document.createElement("tr")).innerHTML="<td>"+e+"</td>";var r=document.createElement("td");r.innerHTML="<td>"+t+"</td>",S.appendChild(r),c[c.length-1].parentNode.insertBefore(S,c[c.length-1].nextSibling)}else if("Reading"==o.value){(h=document.createElement("tr")).innerHTML="<p>"+e+"</p>";var d=document.createElement("td");d.innerHTML="<td>"+t+"</td>",h.appendChild(d),m[m.length-1].parentNode.insertBefore(h,m[m.length-1].nextSibling)}}()})),n.addEventListener("click",(t=>{u=0,clearInterval(s),a.style.display="block",document.getElementById("counter").innerHTML=y(u),e.disabled=!1})),l.innerHTML=(B=new Date,f=B.getDate(),k=B.getMonth(),L=B.getFullYear(),"<strong>Today: "+f+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][k]+" "+L+"</strong>");var H,S,h,x=0,C=0,N=0}();
//# sourceMappingURL=index.2e8ead66.js.map