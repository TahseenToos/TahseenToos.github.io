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
