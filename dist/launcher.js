"use strict";(()=>{var S=(c,n)=>()=>(n||c((n={exports:{}}).exports,n),n.exports);var b=(c,n,r)=>new Promise((d,i)=>{var a=t=>{try{o(r.next(t))}catch(l){i(l)}},e=t=>{try{o(r.throw(t))}catch(l){i(l)}},o=t=>t.done?d(t.value):Promise.resolve(t.value).then(a,e);o((r=r.apply(c,n)).next())});var F=S(E=>{if(!window.mcpBaseFinal){window.mcpBaseFinal=!0;let c="mcp.sidebar.app",n=r=>b(null,null,function*(){let d=acode.require("multiPrompt"),i=[{type:"text",id:"Api_Gemini",placeholder:"API KEY DE GEMINI"},{type:"text",id:"Api_Claude",placeholder:"API KEY DE CLAUDE"}];try{let a=yield d("Escirbe la API KEY",i,"https://www.google.com"),e=a.Api_Gemini,o=a.Api_Claude,t=!1;e&&e.trim()!==""&&(localStorage.setItem("Api_Gemini",e),console.log("Se escribio algo en gemini: ",e),t=!0),o&&o.trim()!==""&&(localStorage.setItem("Api_Claude",o),t=!0)}catch(a){return console.error(a),!1}});acode.setPluginInit(c,(r,d)=>{let i=acode.require("sidebarApps"),a=r+"icons/icon.png";acode.addIcon("mi-icono",a),i.add("mi-icono","mcp-sidebar-id","MCP Panel",e=>{let o=localStorage.getItem("Api_Gemini")||"",t=localStorage.getItem("Api_Claude")||"",l=`
                  .tab, .app-icons-container {
                    background-color: #6E7E4F !important; /* Verde ocre t\xE9cnico */
                  }
                
                  .cajita {
                    background: #F5F5F5 !important;
                    border-top: 10px solid #4E5E30 !important;
                    color: #212121 !important;
                    padding: 1em;
                    font-family: 'Segoe UI', sans-serif;
                  }
                
                  #mcp-btn, #mcp-send {
                    background-color: #6E7E4F !important;
                    color: #FFFFFF !important;
                    border: none;
                    padding: 0.5em 1em;
                    font-weight: bold;
                    cursor: pointer;
                    border-radius: 4px;
                  }
                
                  #mcp-btn:hover, #mcp-send:hover {
                    background-color: #4E5E30 !important;
                  }
                
                  #mcp-log {
                    background: #EDEDE9 !important;
                    border-left: 4px solid #4E5E30 !important;
                    padding: 1em;
                    color: #212121 !important;
                    white-space: pre-wrap;
                    display: none !important;
                }
                  #mcp-log.visible{
                    display: block !important;
                }
                
                  #mcp-response {
                    background: #EDEDE9 !important;
                    border-left: 4px solid #4E5E30 !important;
                    padding: 1em;
                    color: #212121 !important;
                    white-space: pre-wrap;
                    max-height: 200px;
                    overflow-y: auto;
                    user-select: text !important;
                    cursor: text !important;
                    -webkit-user-select: text !important;
                    -moz-user-select: text !important;
                    -ms-user-select: text !important;
                    touch-action: manipulation !important;
                  }
                
                  #fasePrompt {
                    margin-top: 2em;
                    color: #212121 !important;
                    display: none;
                  }
                
                  #fasePrompt h3 {
                    color: #4E5E30 !important;
                    font-size: 1.2em;
                    margin-bottom: 0.5em;
                  }
                
                  #mcp-model, #mcp-input {
                    background-color: #F0F0EC !important;
                    border: 1px solid #D6D6D0 !important;
                    color: #212121 !important;
                    padding: 0.5em;
                    margin-bottom: 1em;
                    width: 100%;
                    border-radius: 4px;
                  }
                `;e.innerHTML=`
                    <style>${l}</style>
                    <div class="cajita" style="padding: 1em; font-family: sans-serif;">
                        <h2 style="margin-top: 0;">IA Aprende a programar</h2>
                        <button id="mcp-btn" style="padding: 0.5em 1em;">Ingresa API KEYS</button>
                        <pre id="mcp-log" style="margin-top: 1em;">Log: Listo.</pre>
                    </div>
                    
                    <div id="fasePrompt" style="margin-top: 2em;">
                    <h3>Fase 2: Invocaci\xF3n al modelo</h3>
                    <select id="mcp-model" style="margin-bottom: 1em;">
                      <option value="gemini">Gemini</option>
                      <option value="claude">Claude</option>
                    </select>
                    <textarea id="mcp-input" placeholder="Escribe tu prompt..." style="width: 100%; height: 100px; margin-bottom: 1em;"></textarea>
                    <button id="mcp-send" style="padding: 0.5em 1em;">Enviar prompt</button>
                    <pre id="mcp-response" style="margin-top: 1em; background: #f0f0f0; padding: 1em; white-space: pre-wrap;">\u26E9\uFE0F Esperando invocaci\xF3n...</pre>
                  </div>
                `;let C=e.querySelector("#mcp-btn"),u=e.querySelector("#mcp-log");u.textContent=`\u{1F510} Estado de claves:
Gemini: ${o?"\u2705 Cargada":"\u274C No encontrada"}
Claude: ${t?"\u2705 Cargada":"\u274C No encontrada"}`,C.addEventListener("click",()=>b(null,null,function*(){u.classList.add("visible"),yield n(u),u.classList.remove("visible"),document.getElementById("fasePrompt").style.display="block"}));let I=e.querySelector("#mcp-model"),w=e.querySelector("#mcp-input"),m=e.querySelector("#mcp-send"),p=e.querySelector("#mcp-response");m.addEventListener("click",()=>b(null,null,function*(){let v=I.value,f=w.value.trim(),h=localStorage.getItem(v==="gemini"?"Api_Gemini":"Api_Claude");if(!f){p.textContent="\u26A0\uFE0F El prompt no puede estar vac\xEDo.";return}if(!h){p.textContent="\u26A0\uFE0F No se encontr\xF3 la API Key para el modelo seleccionado.";return}let g="",x="\u23F3 Invocando al modelo";p.textContent=x;let A=setInterval(()=>{g=g.length<3?g+".":"",p.textContent=x+g},500);m.disabled=!0,m.textContent="\u27E6\u23F3\u27E7 Esperando...";try{let s=yield fetch("https://mcp-ai-proxy-prod.vercel.app/api/ai-proxy.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:f,api_key:h,provider:v})}),y=yield s.json();if(!s.ok||!y.success){let P=y.response||`Error ${s.status}: Respuesta inv\xE1lida del servidor.`;throw new Error(P)}p.textContent=y.response||"\u26A0\uFE0F No se recibi\xF3 una respuesta v\xE1lida."}catch(s){p.textContent=`\u274C Error en la invocaci\xF3n: ${s.message||"Error de conexi\xF3n"}`,console.error("Error:",s)}finally{clearInterval(A),m.disabled=!1,m.textContent="Enviar al altar"}}))},!0,()=>{console.log("\u2705 Panel MCP seleccionado")}),console.log("\u2705 Plugin MCP Sidebar App cargado")})}});F();})();
