
document.addEventListener('DOMContentLoaded', () => {


    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('is-active');
        sidebar.classList.toggle('is-active'); 
    });

    const about_link = document.querySelector('.about-link');
    const skills_link = document.querySelector('.skills-link');
    const projects_link = document.querySelector('.projects-link');

    about_link.addEventListener('click', () =>{
        window.location.href = "#about"
    });
    skills_link.addEventListener('click', () =>{
        window.location.href = "#skills"
    });
    projects_link.addEventListener('click', () =>{
        window.location.href = "#projects"
    });

    const btn_skills = document.getElementById('btn-skills');
    btn_skills.addEventListener('click', () =>{
        expandElement();
    });


    function expandElement() {
        const info = document.getElementById('skills-info');
        info.classList.toggle('is-active');
    }

    const projects = document.getElementsByTagName('section');
    projects[0].scrollLeft(3000);





});