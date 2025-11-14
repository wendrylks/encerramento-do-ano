const projects = Array.from({length:15}, (_,i)=>({
id: i+1,
title: `Projeto ${i+1} — Redação`,
excerpt: `Resumo curto da redação ${i+1} — tema, abordagem e conclusão em poucas palavras.`,
thumb: `images/projeto${i+1}.jpg`,
page: `projects/projeto${i+1}.html`
}))


function buildList(){
const container = document.getElementById('projects-list')
projects.forEach(p=>{
const card = document.createElement('article')
card.className='card'
card.innerHTML = `
<img src="${p.thumb}" alt="${p.title}">
<div class="content">
<h3>${p.title}</h3>
<p>${p.excerpt}</p>
<a href="${p.page}">Ver redação →</a>
</div>`
container.appendChild(card)
})
}


document.getElementById('year').textContent = new Date().getFullYear()
if(document.getElementById('projects-list')) buildList()