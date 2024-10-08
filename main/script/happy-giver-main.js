function updateDistricts() {
    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");

    const districts = {
        "천안": ["서북구", "동남구"],
        "아산": ["탕정면", "배방읍", "음봉면"]
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