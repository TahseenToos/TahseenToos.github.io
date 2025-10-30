<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="author" content="Tahseen Khan"/>
    <title>Tahseen Khan's Portfolio Home Page</title>

<style>

:root {
    --bg_colour: #e1e8e1;
    --txt_colour: #111111;
    --footer_bg: #a4b4a4;
    --nav_bg: #989e98;
    --secondary_colour: #829282;
    --alt_text_colour: #eeeeee;
    --alt_secondary_colour: #425242;
}

.light_mode {
    --bg_colour: #e1e8e1;
    --txt_colour: #111111;
    --footer_bg: #a4b4a4;
    --nav_bg: #989e98;
    --secondary_colour: #829282;
    --alt_text_colour: #eeeeee;
    --alt_secondary_colour: #425242;
}

.dark_mode {
    --bg_colour: #111711;
    --txt_colour: #eeeeee;
    --footer_bg: #283228;
    --nav_bg: #1e241e;
    --secondary_colour: #4a5a4a;
    --alt_text_colour: #111111;
    --alt_secondary_colour: #a4b4a4;
}

body {
    font-family: 'Segoe UI', Roboto;
    line-height: 1.8;
    background-color: var(--bg_colour);
    color: var(--txt_colour);
}

.container {
    width: 90%;
    max_width: 1000px;
    margin: auto;
    padding: 10px 0px;
}

header {
    background-color: var(--footer_bg);
    text-align: center;
    padding: 60px 0px;
}

header h1 {
    font-size: 50px;
    margin-bottom: 10px;
}

h2 {
    color: var(--txt_colour);
}

header p {
    font-size: 30px;
    color: var(--txt_colour);
}

#theme_changer{
    color: var(--txt_colour);
    background-color: var(--secondary_colour);
    border: none;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.4s, 1s;
    transform: initial;
}

#theme_changer:hover {
    color: var(--alt_text_colour);
    background-color: var(--alt_secondary_colour);
}

#nav_buttons{
    color: var(--txt_colour);
    background-color: var(--secondary_colour);
    border: none;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.4s, 1s;
    transform: initial;
    width: 24%;
    max_width: 1000px;
    margin: auto;
    text-decoration: none;
}

ul.navigation{
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    background-color: var(--secondary_colour);
    position: absolute;
}

ul.navigation li{
    float: left;
}


#nav_buttons:hover{
    color: var(--alt_text_colour);
    background-color: var(--alt_secondary_colour);
}

#nav{
    position:relative;
    bottom:-15px;
    right:42%;
    display:inline-block;
}

</style>

<script>

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

</script>

</head>
<div id="nav">
<ul class="navigation">
    <li>
        <a href="Projects.html" id="nav_buttons">Home</a>
    </li>
    <li>
        <a href="Projects.html" id="nav_buttons">Projects</a>
    </li>
    <li>
        <a href="Projects.html" id="nav_buttons">About</a>
    </li>
    <li>
        <a href="Projects.html" id="nav_buttons">Contact</a>
    </li>
</ul>
</div>
<body>
    <header>
        <div class="container">
            <button id="theme_changer" style="float:right" onclick="LightDarkToggle()">Dark Mode</button>
            <br></br>
            <h1>Tahseen Khan</h1>
            <p>Game Developer | Unreal Enthusiast</p>
        </div>
    </header>
    <div>
        <h2>About:</h2>
        <p>This will be where I will talk about my goals, interests, and anything else thats interesting about me</p>
    </div>
<div>
        <h2>About:</h2>
        <p>This will be where I will talk about my goals, interests, and anything else thats interesting about me</p>
    </div>
<div>
        <h2>About:</h2>
        <p>This will be where I will talk about my goals, interests, and anything else thats interesting about me</p>
    </div>
<div>
        <h2>About:</h2>
        <p>This will be where I will talk about my goals, interests, and anything else thats interesting about me</p>
    </div>
<div>
        <h2>About:</h2>
        <p>This will be where I will talk about my goals, interests, and anything else thats interesting about me</p>
    </div>
<div>
        <h2>About:</h2>
        <p>This will be where I will talk about my goals, interests, and anything else thats interesting about me</p>
    </div>
<div>
        <h2>About:</h2>
        <p>This will be where I will talk about my goals, interests, and anything else thats interesting about me</p>
    </div>
<div>
        <h2>About:</h2>
        <p>This will be where I will talk about my goals, interests, and anything else thats interesting about me</p>
    </div>
<div>
        <h2>About:</h2>
        <p>This will be where I will talk about my goals, interests, and anything else thats interesting about me</p>
    </div>
</body>
</html>
