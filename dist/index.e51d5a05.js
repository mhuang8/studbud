!function(){var e=document.getElementById("musicModal"),t=document.getElementById("musicBtn");const n=document.querySelector(".music-container"),c=document.querySelector("#prevBtn"),d=document.querySelector("#playBtn"),l=document.querySelector("#nextBtn"),o=document.querySelector("#audioTrack"),s=document.querySelector(".progress-container"),r=document.querySelector(".progress-bar"),i=document.getElementById("songTitle"),a=document.getElementById("songArtist"),u=document.getElementById("songCover");document.querySelectorAll(".resource-nav > ul > li > a"),document.querySelectorAll(".sub-page-container");var m=document.getElementById("resourceModal");const y=document.getElementById("addReadResourceBtn"),g=document.getElementById("addWatchResourceBtn"),p=document.getElementById("addListenResourceBtn"),B=(document.getElementById("submitResourceBtn"),document.getElementById("readLink")),E=document.getElementById("watchLink"),L=document.getElementById("listenLink"),f=document.getElementById("readPage"),v=document.getElementById("watch"),k=document.getElementById("listen"),I=document.getElementById("resourceForm"),h=(document.getElementById("openAllLinksBtn"),document.getElementById("readLinksBtn")),b=document.getElementById("watchLinksBtn"),q=document.getElementById("listenLinksBtn");t.addEventListener("click",(function(){e.style.display="block"})),window.addEventListener("click",(function(t){t.target==e?e.style.display="none":t.target==m&&(m.style.display="none")}));const S=["Imagine","Bored","Fresh Air","Rose"],w=["BgH Beats","LuKremBo","Zeeky Beats","LuKremBo"];let A=1,C=1;function T(e,t){i.innerText=e,a.innerText=t,o.src=`music/${e}.mp3`,u.src=`images/${e}.png`}function R(){n.classList.add("play"),d.querySelector("i.fas").classList.remove("fa-play"),d.querySelector("i.fas").classList.add("fa-pause"),o.play()}function H(){A++,C++,A>S.length-1&&(A=0),C>w.length-1&&(C=0),T(S[A],w[C]),R()}T(S[A],w[C]),d.addEventListener("click",(()=>{n.classList.contains("play")?(n.classList.remove("play"),d.querySelector("i.fas").classList.remove("fa-pause"),d.querySelector("i.fas").classList.add("fa-play"),o.pause()):R()})),c.addEventListener("click",(function(){A--,C--,A<0&&(A=S.length-1),C<0&&(C=w.length-1),T(S[A],w[C]),R()})),l.addEventListener("click",H),o.addEventListener("timeupdate",(function(e){const{duration:t,currentTime:n}=e.srcElement,c=n/t*100;r.style.width=`${c}%`})),s.addEventListener("click",(function(e){const t=this.clientWidth,n=e.offsetX,c=o.duration;o.currentTime=n/t*c})),o.addEventListener("ended",H),y.addEventListener("click",(function(){m.style.display="block"})),g.addEventListener("click",(function(){m.style.display="block"})),p.addEventListener("click",(function(){m.style.display="block"}));var M=document.getElementById("resourceNameInput"),N=document.getElementById("resourceDescriptionInput"),_=document.getElementById("resourceLinkInput");document.getElementById("resourceCard");I.addEventListener("submit",(function(e){e.preventDefault(),function(){let e=_.value,t=document.createElement("div");t.setAttribute("id","resourceCard");let n=document.createElement("button");n.setAttribute("class","delResourceBtn"),n.setAttribute("type","button"),n.innerHTML="<i class='fas fa-trash'></i>",t.appendChild(n);let c=document.createElement("a");c.setAttribute("href",e),c.setAttribute("target","_blank"),c.setAttribute("class","resourceHyperLink"),c.innerHTML="<h4>"+M.value+"</h4>",t.appendChild(c),t.innerHTML+="<p>"+N.value+"</p>","active"==B.className?(f.appendChild(t),x.push(e),console.log(x)):"active"==E.className?(v.appendChild(t),D.push(e),console.log(D)):"active"==L.className&&(k.appendChild(t),$.push(e),console.log($));var d=document.getElementsByClassName("delResourceBtn");for(let e=0;e<d.length;e++)d[e].addEventListener("click",(function(e){e.preventDefault(),t.remove()}))}(),m.style.display="none",I.reset()}));var x=[],D=[],$=[];h.addEventListener("click",(function(){for(let e=0;e<x.length;e++)window.open(x[e],"_blank")})),b.addEventListener("click",(function(){for(let e=0;e<D.length;e++)window.open(D[e],"_blank")})),q.addEventListener("click",(function(){for(let e=0;e<$.length;e++)window.open($[e],"_blank")}))}();
//# sourceMappingURL=index.e51d5a05.js.map
