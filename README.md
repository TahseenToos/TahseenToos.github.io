# TahseenToos.github.io
Holds the code for my portfolio website to demonstrate my game development abilities.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Game Developer Portfolio</title>
  <link rel="stylesheet" href="style.css" />
</head>
<script>
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme on page load
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  toggleBtn.textContent = '🌙 Dark Mode';
} else {
  toggleBtn.textContent = '☀️ Light Mode';
}

// Theme toggle handler
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');

  const isLight = body.classList.contains('light-theme');
  toggleBtn.textContent = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

</script>

<style>
/* === THEME VARIABLES === */
:root {
  --bg-color: #121212;
  --text-color: #f4f4f4;
  --card-bg: #1f1f1f;
  --highlight: #00d1ff;
  --input-bg: #2e2e2e;
  --footer-bg: #1e1e1e;
}

body.light-theme {
  --bg-color: #ffffff;
  --text-color: #111111;
  --card-bg: #f1f1f1;
  --highlight: #0077cc;
  --input-bg: #e9e9e9;
  --footer-bg: #dddddd;
}

/* === BASE STYLES === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.container {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  padding: 40px 0;
}

header {
  background: var(--footer-bg);
  text-align: center;
  padding: 60px 0;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

header p {
  font-size: 1.2rem;
  color: var(--text-color);
}

h2 {
  color: var(--highlight);
  margin-bottom: 20px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.2s;
}

.project-card:hover {
  transform: scale(1.02);
}

.project-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
}

.skills-list li {
  background: var(--card-bg);
  padding: 10px 15px;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input, form textarea {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: var(--input-bg);
  color: var(--text-color);
}

form button {
  padding: 10px;
  background: var(--highlight);
  color: var(--bg-color);
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

footer {
  text-align: center;
  padding: 20px;
  background: var(--footer-bg);
  font-size: 0.9rem;
  color: var(--text-color);
}

/* === THEME TOGGLE BUTTON === */
#theme-toggle {
  margin-top: 20px;
  padding: 8px 16px;
  background: var(--highlight);
  color: var(--bg-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

</style>
<body>
  <header>
    <div class="container">
      <h1>Tahseen Khan</h1>
      <p>Game Developer | Unreal Enthusiast</p>
      <p>2nd Year Computer Game Developement Student at the University Of Staffordshire</p>
      <button id="theme-toggle">🌙 Dark Mode</button>
    </div>
  </header>

  <section id="about" class="container">
    <h2>About Me</h2>
    <p>
      I'm a passionate game developer in my second year at university, studying Computer Game Development with some experience using Unity and Unreal Engine. I enjoy diving into gameplay programming and I am looking to develop my skills in audio development.
    </p>
  </section>

  <section id="projects" class="container">
    <h2>Projects</h2>
    <div class="project-grid">
      <div class="project-card">
        <img src="project1.jpg" alt="Project 1 Screenshot" />
        <h3>Project Nebula</h3>
        <p>A sci-fi action RPG built in Unity with custom AI systems and procedural levels.</p>
      </div>
      <div class="project-card">
        <img src="project2.jpg" alt="Project 2 Screenshot" />
        <h3>Pixel Quest</h3>
        <p>2D platformer made in Godot, featuring pixel art and dynamic enemy behavior.</p>
      </div>
    </div>
  </section>

  <section id="skills" class="container">
    <h2>Skills</h2>
    <ul class="skills-list">
      <li>Unity (C#)</li>
      <li>Unreal Engine (Blueprint & C++)</li>
      <li>Godot (GDScript)</li>
      <li>Gameplay Programming</li>
      <li>AI & Pathfinding</li>
      <li>Multiplayer Networking</li>
      <li>Level Design</li>
    </ul>
  </section>

  <section id="contact" class="container">
    <h2>Contact</h2>
    <form>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 Alex Mercer. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
