const taskInput = document.querySelector('#input-box-container input');
const addBtn = document.querySelector('#add-btn button');
const tasksContainer = document.getElementById('tasks-container');

let tasks = [];

function saveTasks() {
    localStorage.setItem('dashboardTasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('dashboardTasks');
    if(savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    renderTasks()
}

function renderTasks() {
    tasksContainer.innerHTML = '';

    tasksContainer.style.flexDirection = 'column';
    tasksContainer.style.gap = '15px';

    tasks.forEach(task => {
        const taskRow = document.createElement('div');
        taskRow.style.display = 'flex';
        taskRow.style.justifyContent = 'space-between';
        taskRow.style.alignItems = 'center';
        taskRow.style.width = '100%';
        taskRow.style.borderBottom = '1px solid var(--text)';
        taskRow.style.paddingBottom = '10px';

        const leftSide = document.createElement('div');
        leftSide.style.display = 'flex';
        leftSide.style.alignItems = 'center';
        leftSide.style.gap = '10px';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        checkbox.addEventListener('change', () => toggleTask(task.id));

        const textSpan = document.createElement('span');
        textSpan.textContent = task.text;
        if (task.completed) {
            textSpan.style.textDecoration = 'line-through';
            textSpan.style.opacity = '0.5';
        }

        leftSide.appendChild(checkbox);
        leftSide.appendChild(textSpan);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.style.background = 'transparent';
        deleteBtn.style.border = 'none';
        deleteBtn.style.color = 'var(--text)';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.fontWeight = 'bold';

        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        taskRow.appendChild(leftSide);
        taskRow.appendChild(deleteBtn);
        tasksContainer.appendChild(taskRow);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (text == '') return;

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';

    saveTasks();
    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id){
            return {...task, completed: !task.completed};
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

function deleteTask(id){
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function initTodoController() {
    addBtn.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            addTask();
        }
    });

    loadTasks();
}
