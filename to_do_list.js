function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');
    const locationInput = document.getElementById('locationInput');
    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;
    const taskLocation = locationInput.value.trim();

    if (taskText === '') {
        alert('할 일을 입력하세요.');
        return;
    }

    if (taskDate === '') {
        alert('날짜를 선택하세요.');
        return;
    }

    if (taskLocation === '') {
        alert('장소를 입력하세요.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    // 일정 텍스트와 날짜, 장소를 표시하는 생성
    const taskSpan = document.createElement('span');
    taskSpan.textContent = `${taskText} (날짜: ${taskDate}, 장소: ${taskLocation})`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // 입력 필드를 초기화
    taskInput.value = '';
    dateInput.value = '';
    locationInput.value = '';
}