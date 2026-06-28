
const darkModeBtn =
document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", function () {
document.body.classList.toggle("dark-mode");
});

const text ="Full Stack Web Developer";
let i = 0;

function typingEffect() {
    if (i < text.length) {
document.getElementById("typing").innerHTML += text.charAt(i);
       i++;
       setTimeout(typingEffect,100);        
    }
}
typingEffect();
setTimeout(() => {
    const progressBars = document.querySelectorAll("progress");

    progressBars.forEach(bar => {
        let value = bar.value;
        bar.value = 0;

        let i = 0;

        let interval = setInterval(() => {
            if (i >= value) {
                clearInterval(interval);
            } else {
                i++;
                bar.value = i;
            }
        }, 15);
    });
}, 500);
window.onscroll = function () {
    let btn = document.getElementById("topBtn");

    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function filterProjects(category,button) {

    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {

        if (category === "all") {
            project.style.display = "block";
        }
        else if (project.classList.contains(category)) {
            project.style.display = "block";
        }
        else {
            project.style.display = "none";
        }

    });

}
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;

    if (name === "" || email === "") {
        alert("Please fill all required fields.");
    } else {
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
    }
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});
let mybutton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 2000);
});
const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});