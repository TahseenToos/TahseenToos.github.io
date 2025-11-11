
document.addEventListener("DOMContentLoaded", function() {
    // Check if user previously chose dark mode
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme_changer").textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        document.getElementById("theme_changer").textContent = "Dark Mode";
    }
});

// ===== 2. Your toggle button function (updated) =====
function LightDarkToggle() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");           // SAVE dark
        document.getElementById("theme_changer").textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");          // SAVE light
        document.getElementById("theme_changer").textContent = "Dark Mode";
    }
}

<!--
document.addEventListener("DOMContentLoaded", function() {
    var element = document.body;
    const lightDarkToggler = document.getElementById('theme_changer');
    
    if (localStorage.getItem("Theme") === "dark") {
        lightDarkToggler.textContent = 'Dark Mode';
    }
    else if (localStorage.getItem("Theme") === "light") {
        lightDarkToggler.textContent = 'Light Mode';
    }
})

function LightDarkToggle(){
    
    var element = document.body;
    const lightDarkToggler = document.getElementById('theme_changer');
    
    element.classList.toggle('dark_mode');
    console.log(lightDarkToggler);
    
    if(element.classList.contains('dark_mode')){
    lightDarkToggler.textContent = 'Light Mode';
    }
    else {
    lightDarkToggler.textContent = 'Dark Mode';
    }
}
-->