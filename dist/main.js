(()=>{"use strict";const e=[[["test"]]];function t(){document.getElementById("darken").style.display="none"}document.getElementById("createBtn").addEventListener("click",(function(){document.getElementById("darken").style.display="block"})),document.getElementById("cancelTask").addEventListener("click",t),document.getElementById("addTask").addEventListener("click",(function(){let n,d=document.getElementById("T").value,s=document.getElementById("D").value,c=document.getElementById("DD").value;n=!!document.getElementById("check").checked,document.getElementById("FORM").reset(),t();var a={title:d,description:s,dueDate:c,priority:n};e[0].push(a),console.log(e[0]),function(e){const t=document.createElement("div");t.classList.add("taskItem");const n=document.createElement("h4");n.classList.add("taskTitle"),n.innerText=e.title,t.append(n);const d=document.createElement("p");d.classList.add("taskDesc"),d.innerText=e.description,t.append(d);const s=document.createElement("p");s.classList.add("taskDate"),s.innerText=e.dueDate,s.style.transition="0.2s",t.append(s),t.addEventListener("mouseenter",(()=>{t.style.transform="scale(1.05)",s.style.opacity="1"})),t.addEventListener("mouseleave",(()=>{t.style.transform="scale(1)",s.style.opacity="0"}));const c=document.createElement("button");c.classList.add("deleteTaskBtn"),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>',t.appendChild(c),document.getElementById("taskGrid").append(t)}(a)}))})();