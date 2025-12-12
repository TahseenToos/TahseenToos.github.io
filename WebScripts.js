
document.addEventListener("DOMContentLoaded", function() {
    var element = document.body;
    const lightDarkToggler = document.getElementById('theme_changer');
    
    if (localStorage.getItem("Theme") === "dark") {
        document.body.classList.add('dark_mode');
        lightDarkToggler.textContent = 'Dark Mode';
    }
    else if (localStorage.getItem("Theme") === "light") {
        document.body.classList.remove('dark_mode');
        lightDarkToggler.textContent = 'Light Mode';
    }
})

function LightDarkToggle(){
    
    var element = document.body;
    const lightDarkToggler = document.getElementById('theme_changer');
    
    element.classList.toggle('dark_mode');
    console.log(lightDarkToggler);
    console.log(localStorage.getItem("Theme"));
    
    if(element.classList.contains('dark_mode')){
        lightDarkToggler.textContent = 'Light Mode';
        localStorage.setItem("Theme", "dark");
        console.log("dark?");
    }
    else {
        lightDarkToggler.textContent = 'Dark Mode';
        localStorage.setItem("Theme", "light");
        console.log("light?");
    }
}

function getNavBar() {
    fetch('NavBar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('NavBar-placeholder').innerHTML = data;

            const activePage = window.location.pathname.split('/').pop() || "index.html";

            <!--Finish page detector-->
        });
}