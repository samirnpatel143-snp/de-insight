
const menu=document.querySelector(".menu");
const links=document.querySelector(".nav-links");
if(menu) menu.addEventListener("click",()=>links.classList.toggle("open"));

document.querySelectorAll("[data-filter]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll("[data-filter]").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const value=btn.dataset.filter;
    document.querySelectorAll("[data-category]").forEach(card=>{
      card.style.display=(value==="all"||card.dataset.category.includes(value))?"":"none";
    });
  });
});

const year=document.querySelector("[data-year]");
if(year) year.textContent=new Date().getFullYear();
