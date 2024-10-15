

//회원가입 

function sgshowAlert() {
    const rememberCheck = document.getElementById('remember-check');
    
    if (!rememberCheck.checked) {
        alert('개인정보 활용 동의를 체크해야 회원가입이 가능합니다.');
        return false; // 제출불가.
    }
    
    alert('회원가입이 완료되었습니다.'); // 회원가입 완료 메시지
    window.location.href = '../maim.html'; // 메인 화면으로 이동
    return true; // 체크되었으면 제출.
}


//비밀번호,아이디 찾기 알림창 

    function showAlert() {
        // 알림창 표시
        alert("해당 이메일로 아이디를 전송하였습니다.");
        return false; // 실제 제출 방지 
    }

    function pwshowAlert() {
        // 알림창 표시
        alert("해당 이메일로 비밀번호 변경이 가능한 링크를  전송하였습니다.");
        return false; // 실제 제출 방지 
    }

   

//후원하기 

function toggleCheckbox(checkedId, otherId) {
    const checkedBox = document.getElementById(checkedId);
    const otherBox = document.getElementById(otherId);

    // 체크박스가 체크되면 다른 체크박스를 해제
    if (checkedBox.checked) {
        otherBox.checked = false;
    }
}




function togglePaymentOptions(selectedPayment) {
    // 각 설명 및 입력 필드 요소 가져오기
    const creditCardDescription = document.getElementById("credit-card-description");
    const cardType = document.getElementById("card-type");
    const bankTransferDescription = document.getElementById("bank-transfer-description");
    const bankInfo = document.getElementById("bank-info");
    const depositorNameContainer = document.getElementById("depositor-name-container");

    // 모든 설명 및 입력 필드 숨기기
    creditCardDescription.style.display = 'none';
    cardType.style.display = 'none';
    bankTransferDescription.style.display = 'none';
    bankInfo.style.display = 'none';
    depositorNameContainer.style.display = 'none'; // 입금자명 입력란 숨기기

     // 체크박스 상태 가져오기
     const creditCardChecked = document.getElementById("credit-card").checked;
     const bankTransferChecked = document.getElementById("bank-transfer").checked;
 
     // 두 개의 체크박스가 모두 체크되었는지 확인
     if (creditCardChecked && bankTransferChecked) {
         // 하나의 체크박스만 체크하도록 다른 체크박스 해제
         if (selectedPayment === 'credit-card') {
             document.getElementById("bank-transfer").checked = false;
         } else {
             document.getElementById("credit-card").checked = false;
         }
     }



    // 선택된 결제 방법의 설명 및 입력 필드 보이기
    if (selectedPayment === 'credit-card' && document.getElementById("credit-card").checked) {
        creditCardDescription.style.display = 'block';
        cardType.style.display = 'block'; // 카드 종류 입력 필드 보이기
    } else if (selectedPayment === 'bank-transfer' && document.getElementById("bank-transfer").checked) {
        bankTransferDescription.style.display = 'block';
        bankInfo.style.display = 'block'; // 은행 입력 필드 보이기
        depositorNameContainer.style.display = 'block'; // 입금자명 입력 필드 보이기
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

      // 무통장입금을 선택한 경우 입금자명 확인
      if (bankTransferChecked && depositorName === "") {
        alert("입금자명을 입력해야 합니다.");
        return;
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
     if (!agreeTermsChecked) {
        alert("구매 조건 확인 및 결제 진행 동의를 선택해야 합니다.");
        return;
    }
    

    // 모든 체크가 완료되었으므로 결제 진행
    alert("결제가 진행됩니다.");
   
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


// //하트 거품효과
// const heart = document.getElementById('heart');

// heart.addEventListener('click', (e) => {
//     const bubble = document.createElement('div');
//     bubble.classList.add('bubble');
//     bubble.textContent = '❤️';
//     bubble.style.left = `${e.clientX - 12}px`;
//     bubble.style.top = `${e.clientY - 12}px`;
    
//     document.body.appendChild(bubble);

//     bubble.addEventListener('animationend', () => {
//         bubble.remove();
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelectorAll('.item1').forEach(item => {
//         const percentText = item.querySelector('.percent').innerText;
//         const percentValue = parseInt(percentText.replace('%', ''));

//         if (percentValue >= 90) {
//             item.querySelector('.success-icon').style.display = 'inline'; // 아이콘 표시
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    const percentElement = document.querySelector('.percent'); // 95% 표시하는 요소
    const percentValue = parseInt(percentElement.textContent); // 텍스트에서 숫자만 가져오기
    const successMessage = document.querySelector('.success-message');
    const successIcon = document.querySelector('.success-icon');

    if (percentValue >= 95) {
        successMessage.style.display = 'inline'; // 메시지 표시
        successIcon.style.display = 'inline'; // 아이콘 표시
    }
});


