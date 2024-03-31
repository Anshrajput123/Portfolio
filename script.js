// For Toggle menu
function togglemenu(){
        const menu = document.querySelector(".menu-links"); 
        const icon = document.querySelector(".hamburger-icon"); 
        menu.classList.toggle("open");
        icon.classList.toggle("open");
}

// Adding Animations
// const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//                 console.log(entry)
//                 if (entry.isIntersecting) {
//                         entry.target.classlist.add('show');
//                 } else{
//                         entry.target.remove('show');
//                 }
//         });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

let sections = document.querySelectorAll('section');
window.onscroll= () => {
        sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;

                if(top>=offset && top<offset + height){
                        sec.classList.add('hidden');
                }
                else{
                        sec.classList.remove('hidden');
                }
        })
}