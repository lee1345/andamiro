// 선물 데이터 동적추가
// const giftData = [
//     { P_date: '2024-01-02', product: img },
// ];





// 더보기 기능

document.getElementById('moreButton1').addEventListener('click', function(){
    const hiddenRows = document.querySelectorAll('.hidden');
    for(i=0; i<hiddenRows.length; i++){
        hiddenRows[i].classList.remove('hidden');
                }
});

document.getElementById('closeButton1').addEventListener('click',function(){
    const addRows = document.querySelectorAll('#add');
    for(i=0; i<addRows.length; i++){
        addRows[i].classList.add('hidden');
    }
})