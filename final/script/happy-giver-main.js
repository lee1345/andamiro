function updateDistricts() {
    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");

    const districts = {
        "천안": ["선택하세요", "서북구"],
        "아산": ["선택하세요", "탕정면", "배방읍"]
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

function scrollToRegion() {
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
    const selectedDistrict = districtSelect.value;

    let targetElement;

    if (selectedDistrict === "서북구") {
        targetElement = document.getElementById('profiles-seobuk');
    } else if (selectedDistrict === "탕정면") {
        targetElement = document.getElementById('profiles-tangjeong');
    } else if (selectedDistrict === "배방읍") {
        targetElement = document.getElementById('profiles-baebang');
    }

    if (targetElement) {
        const offset = 140; // 원하는 오프셋 값을 설정
        const elementPosition = targetElement.getBoundingClientRect().top; 
        const offsetPosition = elementPosition + window.scrollY - offset; 

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

