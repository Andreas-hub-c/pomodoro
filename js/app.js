mkdir productivity-site && cd productivity-site
git init
git remote add origin <your-repo-URL>
npm init -y
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
content: ["./*.html", "./js/*.js"]
mkdir css js
touch index.html css/styles.css js/app.js
@tailwind base;
@tailwind components;
@tailwind utilities;
npx tailwindcss -i ./css/styles.css -o ./dist/output.css --watch
<div id="pomodoro">
  <input type="number" id="work" value="25"> Work (min)
  <input type="number" id="break" value="5"> Break (min)
  <button id="start">Start</button>
  <p id="timer">25:00</p>
</div>
let interval, isWork = true;
let timeLeft;

document.getElementById('start').onclick = () => {
  let work = +document.getElementById('work').value * 60;
  let rest = +document.getElementById('break').value * 60;
  timeLeft = work;
  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    if (timeLeft <= 0) {
      isWork = !isWork;
      timeLeft = isWork ? work : rest;
    }
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    document.getElementById('timer').textContent = `${min}:${sec.toString().padStart(2, '0')}`;
    timeLeft--;
  }, 1000);
};
<div id="clock"></div>
setInterval(() => {
  document.getElementById('clock').textContent = new Date().toLocaleTimeString();
}, 1000);
<input type="text" id="taskInput">
<button onclick="addTask()">Add</button>
<ul id="taskList"></ul>
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.getElementById("taskList");
  list.innerHTML = '';
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    };
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = '';
  loadTasks();
}

window.onload = loadTasks;
<button onclick="startBreathing()">Start Breathing</button>
<div id="breathModal" class="hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
  <div id="circle" class="w-32 h-32 bg-blue-500 rounded-full"></div>
</div>
@keyframes breath {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.5); }
}
function startBreathing() {
  const modal = document.getElementById("breathModal");
  const circle = document.getElementById("circle");
  modal.classList.remove("hidden");
  circle.style.animation = "breath 8s infinite";
  setTimeout(() => {
    modal.classList.add("hidden");
    circle.style.animation = "";
  }, 32000); // 4 cycles
}
<button onclick="toggleDark()">Toggle Dark</button>
function toggleDark() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  localStorage.setItem("dark", html.classList.contains("dark"));
}

window.onload = () => {
  if (localStorage.getItem("dark") === "true") {
    document.documentElement.classList.add("dark");
  }
};
darkMode: 'class',
<iframe width="100%" height="166"
  src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=0&controls=1&modestbranding=1"
  title="LoFi Music"
  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
</iframe>
