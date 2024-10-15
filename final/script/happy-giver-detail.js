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

// 댓글기능
function addComment(event) {
    event.preventDefault();
    var commentInput = event.target.querySelector("input");
    var commentText = commentInput.value;
    var date = new Date().toLocaleString();

    var commentDiv = document.createElement("div");
    commentDiv.className = "comment-card";
    commentDiv.innerHTML = `
    <img src="../../img/그림1.png" alt="User Avatar">
    <div>
        <span>USERID <small>${date}</small></span><br>
        <span>${commentText}</span>
    </div>
    `;

    var commentsDiv = document.querySelector(".comments");
    commentsDiv.insertBefore(commentDiv, commentsDiv.firstChild);

    commentInput.value = "";
}

// 후원하기 버튼 클릭 시 결제창 이동
function goPayment(){
    if(confirm("후원하시겠습니까?")==true){
            location.replace('../../html/9.payment/payment.html') // #에 결제창 링크 넣어주기
    }
}

//공유하기 sns 
function shareFacebook() {
    var sendUrl = "#"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

function shareBand() {
    var sendUrl = "#"; // 전달할 URL
    window.open("https://band.us/plugin/share?body=<사랑을공유하세요>&route=<'#'>");
}

function shareTwitter() {
    var sendText = "사랑을 공유해요"; // 전달할 텍스트
    var sendUrl = "#"; // 전달할 URL
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function shareKakao(){
    Kakao.Share.sendCustom({
        templateId: 82775,
        templateArgs: {
          title: '라이언이 즐겨먹던 바로 그 틴케이스 치즈볼',
          description: '바라만 봐도 즐거워지는 힐링 패키지에는 시크릿 스토리가 숨어있어요.',
        },
    });
}


// 좋아요 누적버튼
let count = 0;

const numberElement = document.getElementById('number');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
    count++;
    numberElement.textContent = count;
});


// 산출내역 표  출력
const invoiceData = [
    { no: 1, type: '구매품', product: '전래동화', quantity: 10, unit: '권', unitPrice: 10000 },
    { no: 2, type: '다과비', product: '카스타드', quantity: 2, unit: '봉', unitPrice: 5000 },
    { no: 3, type: '교통비', product: '교통비', quantity: 1, unit: '식', unitPrice: 50000 }
];

function invoiceTable(data) {
    const table = document.getElementById("invoice");
    
    data.forEach(item => {
        const amount = item.unitPrice * item.quantity;
        const row = table.insertRow(-1); // 마지막에 추가
        row.innerHTML = `
            <td>${item.no}</td>
            <td>${item.type}</td>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${item.unit}</td>
            <td>${item.unitPrice}</td>
            <td>${amount}</td>
            <td></td>
        `;
    });

    const totalAmount = data.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const summaryRow = table.insertRow(-1);
    summaryRow.innerHTML = `
        <td colspan="6">합계</td>
        <td>${totalAmount}</td>
        <td></td>`;
}
// 출력은 아래 내용이지만 추후 정산과 함께 출력해야 둘다 출력가능
// window.onload = () => invoiceTable(invoiceData);

// 진행상황
// 백단에서 가져오는 현재 단계(가정)
var currentStep = "activity";

// 선택된 단계까지 색칠
var steps = ['f_start', 'f_complete', 'purchase', 'activity', 'settlement'];
for (var i = 0; i <= steps.indexOf(currentStep); i++) {
    document.getElementById(steps[i]).style.backgroundColor = "black";
}


// 정산내역
const settlementData = [
    { no: 1, type: '구매품', product: '전래동화', quantity: 10, unit: '권', unitPrice: 10000 },
    { no: 2, type: '다과비', product: '카스타드', quantity: 2, unit: '봉', unitPrice: 2000 },
    { no: 3, type: '교통비', product: '교통비', quantity: 1, unit: '식', unitPrice: 30000 }
];

function settleTable(data) {
    const table = document.getElementById("settlementTable");
    
    data.forEach(item => {
        const amount = item.unitPrice * item.quantity;
        const row = table.insertRow(-1); // 마지막에 추가
        row.innerHTML = `
            <td>${item.no}</td>
            <td>${item.type}</td>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${item.unit}</td>
            <td>${item.unitPrice}</td>
            <td>${amount}</td>
            <td></td>
        `;
    });

    const totalAmount = data.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const summaryRow = table.insertRow(-1);
    summaryRow.innerHTML = `
            <td colspan="6">합계</td>
            <td>${totalAmount}</td>
            <td></td>`

}
//정산내역, 산출내역 모두 출력
window.onload = () => {
    invoiceTable(invoiceData);
    settleTable(settlementData);
}



