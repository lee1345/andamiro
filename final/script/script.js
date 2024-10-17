

//회원가입 

function sgshowAlert() {
    const rememberCheck = document.getElementById('remember-check');
    
    if (!rememberCheck.checked) {
        alert('개인정보 활용 동의를 체크해야 회원가입이 가능합니다.');
        return false; // 제출불가.
    }
    
    alert('회원가입이 완료되었습니다.'); // 회원가입 완료 메시지
    window.location.href = '../2.about/about.html'; // 메인 화면으로 이동
    return true; // 체크되었으면 제출.
}


//비밀번호,아이디 찾기 알림창 

    function showAlert() {
        // 알림창 표시
        alert("해당 이메일로 아이디를 전송하였습니다.");
        window.location.href = '../11.sign_up/sign_up_fn.html'; 
        return false;

    }

    function pwshowAlert() {
        // 알림창 표시
        alert("해당 이메일로 비밀번호 변경이 가능한 링크를  전송하였습니다.");
        window.location.href = '../11.sign_up/sign_up_fn.html'; 
        return false; // 실제 제출 방지 
    }

   



// 후원하기 

function toggleCheckbox(checkedId, otherId) {
    const checkedBox = document.getElementById(checkedId);
    const otherBox = document.getElementById(otherId);

    // 체크박스가 체크되면 다른 체크박스를 해제
    if (checkedBox.checked) {
        otherBox.checked = false; // 다른 체크박스 해제
        togglePaymentOptions(checkedId); // 결제 옵션 업데이트
    }
}

function togglePaymentOptions(selectedPayment) {
    const creditCardDescription = document.getElementById("credit-card-description");
    const cardType = document.getElementById("card-type");
    const bankTransferDescription = document.getElementById("bank-transfer-description");
    const bankInfo = document.getElementById("bank-info");
    const depositorNameContainer = document.getElementById("depositor-name-container");
    const cardInfoDiv = document.getElementById('card-info');

    // 모든 설명 및 입력 필드 숨기기
    creditCardDescription.style.display = 'none';
    bankTransferDescription.style.display = 'none';
    cardType.style.display = 'none';
    bankInfo.style.display = 'none';
    depositorNameContainer.style.display = 'none';
    cardInfoDiv.style.display = 'none'; // 카드 정보 입력 필드 숨기기

    // 선택된 결제 방법의 설명 및 입력 필드 보이기
    if (selectedPayment === 'credit-card' && document.getElementById("credit-card").checked) {
        creditCardDescription.style.display = 'block';
        cardType.style.display = 'block'; // 카드 종류 입력 필드 보이기
        cardInfoDiv.style.display = 'block'; // 카드 정보 입력 필드 보이기
    } else if (selectedPayment === 'bank-transfer' && document.getElementById("bank-transfer").checked) {
        bankTransferDescription.style.display = 'block';
        bankInfo.style.display = 'block'; // 은행 입력 필드 보이기
        depositorNameContainer.style.display = 'block'; // 입금자명 입력 필드 보이기
    }
}

// 카드 종류가 선택될 때 카드 정보 입력 필드를 보이도록 설정
function showCardFields() {
    const cardTypeDiv = document.getElementById('card-type');
    const cardInfoDiv = document.getElementById('card-info');
    if (cardTypeDiv.style.display === 'block') {
        cardInfoDiv.style.display = 'block';
    } else {
        cardInfoDiv.style.display = 'none';
    }
}

function toggleTerms() {
    const agreeAll = document.getElementById('agree-all');
    const agreeTerms = document.getElementById('agree-terms');
    agreeTerms.checked = agreeAll.checked; // 전체 동의에 따라 개별 동의 체크
}

// 결제 버튼 클릭 시 결제 수단과 동의 여부를 확인
function validateCheckboxes() {
    const creditCardChecked = document.getElementById('credit-card').checked;
    const bankTransferChecked = document.getElementById('bank-transfer').checked;
    const agreeAllChecked = document.getElementById('agree-all').checked;
    const agreeTermsChecked = document.getElementById('agree-terms').checked;
    const depositorName = document.getElementById('depositor-name').value.trim(); // 입금자명 값 가져오기
    const cardNumber = document.getElementById('card-number').value.trim(); // 카드 번호 값 가져오기
    const expiryDate = document.getElementById('expiry-date').value.trim(); // 유효 기간 값 가져오기
    const cvc = document.getElementById('cvc').value.trim(); // CVC 값 가져오기
    const cardType = document.getElementById('card-selector').value; // 선택된 카드 종류 가져오기
    const bankSelector = document.getElementById('bank-name').value; // 은행 선택

     // 결제 수단이 모두 선택되었는지 확인
     if (creditCardChecked && bankTransferChecked) {
        alert("결제 수단은 하나만 선택할 수 있습니다.");
        return;
    }

    // 결제 수단이 선택되었는지 확인
    if (!creditCardChecked && !bankTransferChecked) {
        alert("결제 수단을 선택하세요.");
        return;
    }

    // 신용카드를 선택한 경우 카드 종류가 선택되었는지 확인
    if (creditCardChecked) {
        if (cardType === "" || cardType === null) {
            alert("결제 카드를 선택해야 합니다.");
            return;
        }
        if (cardNumber === "") {
            alert("카드 번호를 입력해야 합니다.");
            return;
        }
        if (expiryDate === "") {
            alert("유효 기간을 입력해야 합니다.");
            return;
        }
        if (cvc === "") {
            alert("CVC를 입력해야 합니다.");
            return;
        }
    }

    // 무통장입금을 선택한 경우 입금자명 확인
    if (bankTransferChecked) {
        if (depositorName === "") {
            alert("입금자명을 입력해야 합니다.");
            return;
        }
        if (bankSelector === "" || bankSelector === null) {
            alert("입금은행을 선택해야 합니다.");
            return;
        }
    }

    // 전체 동의가 체크되었는지 확인
    if (!agreeAllChecked) {
        alert("전체 동의를 선택해야 결제가 진행됩니다.");
        return;
    }

    // 구매 조건 확인 및 결제 동의가 체크되었는지 확인
    if (!agreeTermsChecked) {
        alert("구매 조건 확인 및 결제 진행 동의를 선택해야 합니다.");
        return;
    }

    // 모든 체크가 완료되었으므로 결제 진행
    // alert("결제가 완료되었습니다.");
       
    // 메인 HTML로 이동
    window.location.href = '../../html/9.payment/payment_sc.html'; // 원하는 메인 HTML 파일 경로로 변경
}



//회원가입,로그인

let container = document.getElementById('container')

toggle = () => {
  container.classList.toggle('sign-in')
  container.classList.toggle('sign-up')
}

setTimeout(() => {
  container.classList.add('sign-in')
}, 200)



// document.addEventListener('DOMContentLoaded', function() {
//     const percentElement = document.querySelector('.percent'); // 95% 표시하는 요소
//     const percentValue = parseInt(percentElement.textContent); // 텍스트에서 숫자만 가져오기
//     const successMessage = document.querySelector('.success-message');
//     const successIcon = document.querySelector('.success-icon');

//     if (percentValue >= 95) {
//         successMessage.style.display = 'inline'; // 메시지 표시
//         successIcon.style.display = 'inline'; // 아이콘 표시
//     }
// });

//가격 직접입력 코드 
function toggleInputField() {
    const select = document.getElementById("donation-amount");
    const customAmountContainer = document.getElementById("custom-amount-container");
    const customAmountInput = document.getElementById("custom-amount");

    if (select.value === "custom") {
        customAmountContainer.style.display = "block"; // 텍스트 박스 보이기
        select.style.display = "none"; // 셀렉트 박스 숨기기
        customAmountInput.focus(); // 텍스트 박스에 포커스
    } else {
        customAmountContainer.style.display = "none"; // 텍스트 박스 숨기기
        select.style.display = "block"; // 셀렉트 박스 보이기
    }
}

function showSelectField() {
    const select = document.getElementById("donation-amount");
    const customAmountContainer = document.getElementById("custom-amount-container");

    if (customAmountContainer.style.display === "block") {
        select.style.display = "block"; // 셀렉트 박스 보이기
        customAmountContainer.style.display = "none"; // 텍스트 박스 숨기기
        select.value = ""; // 선택된 값을 초기화
    }
}

function formatAmount() {
    const input = document.getElementById("custom-amount");
    let value = input.value.replace(/[^0-9]/g, ''); // 숫자 외의 문자 제거
    value = Number(value).toLocaleString(); // 쉼표 추가
    input.value = value; // 입력 필드에 포맷된 값 설정
}
