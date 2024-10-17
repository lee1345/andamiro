function updateDistricts() {
    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");

    const districts = {
        "천안": ["선택하세요", "서북구","동남구"],
        "아산": ["선택하세요", "탕정면", "배방읍","음봉면"]
    };

    const selectedCity = citySelect.value;
    districtSelect.innerHTML = '';

    if (selectedCity in districts) {
    // 선택창 보이기
    districtSelect.style.display = 'inline'; 
    districts[selectedCity].forEach(function(district) {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
    });
        } else {
    // 선택창 숨기기
    districtSelect.style.display = 'none'; 
    }
}
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
} 

function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}

document.getElementById('add-row').addEventListener('click', function(event) {
    event.preventDefault();

    const table = document.getElementById('data-table');
    const newRow = table.insertRow(); 

    const cell1 = newRow.insertCell(0); 
    const cell2 = newRow.insertCell(1); 
    const cell3 = newRow.insertCell(2); 
    const cell4 = newRow.insertCell(3); 
    const cell5 = newRow.insertCell(4); 
    const cell6 = newRow.insertCell(5); 
    const cell7 = newRow.insertCell(6); 
    const cell8 = newRow.insertCell(7); 

    cell1.innerHTML = '<input type="number" style="border:0;">';
    cell2.innerHTML = '<input type="text" style="border:0;">';
    cell3.innerHTML = '<input type="text" style="border:0;">';
    cell4.innerHTML = '<input type="number" style="border:0;">';
    cell5.innerHTML = '<input type="text" style="border:0;">';
    cell6.innerHTML = '<input type="number" style="border:0;">';
    cell7.innerHTML = '<input type="number" style="border:0;">';
    cell8.innerHTML = '<input type="text" maxlength="10" style="border:0;">';
    
    cell1.innerHTML = '<input type="number" style="border:0;" oninput="calculateAmount(this);">';
    cell2.innerHTML = '<input type="text" style="border:0;">';
    cell3.innerHTML = '<input type="text" style="border:0;">';
    cell4.innerHTML = '<input type="number" style="border:0;" oninput="calculateAmount(this);">';
    cell5.innerHTML = '<input type="text" style="border:0;">';
    cell6.innerHTML = '<input type="number" style="border:0;" oninput="calculateAmount(this);">';
    cell7.innerHTML = '<input type="text" style="border:0;" readonly>';
    cell8.innerHTML = '<input type="text" maxlength="10" style="border:0;">';
});

function regist() {
    if (confirm("제출하시겠습니까?") == true) {
        alert("제출되었습니다.");
        window.close();
    } else {
        return;
    }
}
function confirmCancel() {
    if (confirm("정말 취소하겠습니다?")) {
        window.close();
    }
}

    function calculateAmount(input) {
const row = input.closest('tr');

// 수량과 단가 입력값 가져오기
const quantityInput = row.cells[3].querySelector('input');
const unitPriceInput = row.cells[5].querySelector('input');
const amountInput = row.cells[6].querySelector('input');

// 숫자로 변환 (쉼표 제거)
const quantity = parseFloat(quantityInput.value.replace(/,/g, '')) || 0;
const unitPrice = parseFloat(unitPriceInput.value.replace(/,/g, '')) || 0;

// 계산
const amount = quantity * unitPrice;

// 금액이 유효한 경우에만 업데이트
if (!isNaN(amount) && amount >= 0) {
    amountInput.value = amount.toLocaleString('ko-KR'); // 천 단위 쉼표 추가
} else {
    amountInput.value = ""; // 숫자가 아닐 경우 빈 문자열로 초기화
}
}
//이미지 미리보기 및 삭제 기능

function previewImage(event, previewId) {
    const file = event.target.files[0];
    const previewContainer = document.getElementById(previewId);
    previewContainer.innerHTML = ''; // 기존 미리보기 초기화

    if (file) {
        // 파일이 이미지 파일인지 확인
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '300px'; // 이미지 크기 조정
                img.onclick = function() {
                    const newWindow = window.open("", "_blank"); // 새 창 열기
                    newWindow.document.write("<img src='" + img.src + "' style='max-width:100%; height:auto;'>"); // 이미지 삽입
                };

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '삭제';
                deleteBtn.className = 'delete-image';
                deleteBtn.onclick = function() {
                    event.target.value = ''; // 파일 입력 초기화
                    previewContainer.innerHTML = ''; // 미리보기 초기화
                };

                previewContainer.appendChild(img); // 미리보기 이미지 추가
                previewContainer.appendChild(deleteBtn); // 삭제 버튼 추가
            }
            reader.readAsDataURL(file);
        } else {
            // 이미지 파일이 아닐 경우 경고 메시지
            const errorMessage = document.createElement('p');
            errorMessage.textContent = '이미지 파일만 업로드할 수 있습니다.';
            errorMessage.style.color = 'red';
            previewContainer.appendChild(errorMessage);
        }
    }
}