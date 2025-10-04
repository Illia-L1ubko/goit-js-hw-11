import{a as p,S as m,i}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="52593892-e60586d66f6e8b7acef69d169";async function h(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:r})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${n}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){l.innerHTML=""}function S(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async s=>{s.preventDefault();const r=c.elements["search-text"].value.trim();if(!r){i.error({message:"Please enter a search term!",position:"topRight"});return}w(),S();try{const o=await h(r);if(!o.hits.length){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}catch(o){i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}finally{v(),c.reset()}});
//# sourceMappingURL=index.js.map
