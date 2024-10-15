let interval;

function updateThermometer() {
    const goalInput = document.getElementById('goal');
    const goal = Math.min(Math.max(parseInt(goalInput.value, 10) || 0, 0), 100); // 0-100으로 제한
    const mercury = document.getElementById('mercury');

    // 기존의 interval이 있다면 멈춥니다.
    if (interval) clearInterval(interval);

    // 수은을 계속해서 올라갔다가 내려가게 합니다.
    interval = setInterval(() => {
        const heightPercentage = (goal / 100) * 300; // 온도계 높이에 맞게 비율 계산
        
        // 수은의 높이를 부드럽게 변경
        mercury.style.height = heightPercentage + 'px';

        // 서서히 내려가는 효과
        setTimeout(() => {
            mercury.style.height = '0px'; // 수은을 아래로
        }, 1000); // 1초 후에 내려가기 시작
    }, 3000); // 3초마다 높이 업데이트
}