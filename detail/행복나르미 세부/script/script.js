//리워드 선택 버튼
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
    button1.classList.toggle('active');
    button1.classList.toggle('inactive');
    button2.classList.remove('active');
    button2.classList.add('inactive');
});

button2.addEventListener('click', () => {
    button2.classList.toggle('active');
    button2.classList.toggle('inactive');
    button1.classList.remove('active');
    button1.classList.add('inactive');
});

//모달기능

// HTML 문서의 로딩이 완료되었을 때, 해당 함수를 실행
document.addEventListener("DOMContentLoaded", function () {
    // elements
    var modalBtn = document.getElementById("modalBtn");
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementById("closeBtn");
    
    // functions
    function toggleModal() {
        modal.classList.toggle("show");
    }
    
    // events
    modalBtn.addEventListener("click", toggleModal);
    closeBtn.addEventListener("click", toggleModal);
    
    window.addEventListener("click", function (event) {
        // 모달의 검은색 배경 부분이 클릭된 경우 닫히도록 하는 코드
        if (event.target === modal) {
        toggleModal();
        }
    });
    });

    //관심있음 버튼 기능구현
    let count = 0;

    const numberElement = document.getElementById('number');
    const incrementBtn = document.getElementById('incrementBtn');

    incrementBtn.addEventListener('click', () => {
        count++;
        numberElement.textContent = count;
    });