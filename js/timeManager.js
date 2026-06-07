const timeElement = document.getElementById('time-txt')
const greetingElement = document.getElementById('greeting-txt')

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    timeElement.textContent = `${formattedHours}:${formattedMinutes}`;

    updateGreetings(hours);
}

function updateGreetings(hours) {
    let greeting = '';

    if (hours >= 5 && hours < 12) {
        greeting =  'Good Morning!';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    greetingElement.textContent = greeting;
}

function initTimeManager() {
    updateTime();
    setInterval(updateTime, 1000)
}