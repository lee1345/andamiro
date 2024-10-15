function updateDistricts() {
    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");

    const districts = {
        "천안": ["선택하세요","서북구"],
        "아산": ["선택하세요","탕정면", "배방읍"]
    };

    const selectedCity = citySelect.value;
    districtSelect.innerHTML = '';

    if (selectedCity in districts) {
        districts[selectedCity].forEach(function(district) {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

const fundingProgress = narmi.N_funding_progress;
const progressBar = profile.querySelector('.progress');

// 게이지 색상 변경
if (fundingProgress >= 100) {
    progressBar.classList.add('green');
} else if (fundingProgress >= 80) {
    progressBar.classList.add('orange');
}