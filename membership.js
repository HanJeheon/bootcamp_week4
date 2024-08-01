// 사용자 정보를 저장할 배열
let users = [];

// 사용자 등록 함수
function registerUser() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('아이디와 비밀번호를 입력하세요.');
        return;
    }

    if (isUsernameTaken(username)) {
        alert('이미 사용 중인 아이디입니다.');
        return;
    }

    if (!isValidPassword(password)) {
        alert('비밀번호는 최소 8자 이상이어야 하며, 대문자, 소문자, 숫자, 특수문자(!@#$%^&*)를 포함해야 합니다.');
        return;
    }

    const user = { username, password };
    users.push(user);
    alert('회원가입이 완료되었습니다.');
    displayUsers();
    clearInputs();
}

// 아이디 중복 확인 함수
function isUsernameTaken(username) {
    return users.some(user => user.username === username);
}

// 비밀번호 유효성 검사 함수
function isValidPassword(password) {
    if (password.length < 8) return false; // 최소 8자
    if (!/[A-Z]/.test(password)) return false; // 대문자 포함 여부 검사
    if (!/[a-z]/.test(password)) return false; // 소문자 포함 여부 검사
    if (!/[0-9]/.test(password)) return false; // 숫자 포함 여부 검사
    if (!/[!@#$%^&*]/.test(password)) return false; // 특수문자 포함 여부 검사
    return true;
}

// 입력 필드 초기화 함수
function clearInputs() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// 사용자 목록 표시 함수
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; 

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `아이디: ${user.username}`;
        userList.appendChild(listItem);
    });
}