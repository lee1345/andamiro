
 
//텍스트 작성과 삭제 즉시 실행 함수 

(function(){
const spanE1 = document.querySelector("main h2 span");
const txtArr = [' Web Publisher', ' Front-End Developer', ' Web UI Designer', ' UX Designer', ' Back-END Developer'];
let index = 0;
let currentTxt = txtArr[index].split("");
function writeTxt(){
    spanE1.textContent += currentTxt.shift();
    if(currentTxt.length !==0){
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{
        currentTxt = spanE1.textContent.split("");
        setTimeout(deleteTxt ,3000);
    
    }  
}

function deleteTxt(){
    currentTxt.pop();
    spanE1.textContent =currentTxt.join("");
    if(currentTxt.length !== 0){
        setTimeout(deleteTxt,  Math.floor(Math.random() * 100));
    }else{
        index = (index +1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
    
}

writeTxt();
})();

//수직 스크롤이 발생하면 header 태그에  action 클래스 추가 및 삭제 
(function(){
    const headerEl = document.querySelector("header");
    window.addEventListener("scroll",function(){
        scrollCheck();
    });


 function scrollCheck(){
    const browserScrollY = window.scrollY ? Window.scrollY : window.pageYOffset;
    if(browserScrollY > 0){
        headerEl.classList.add('active');
    }else{
        headerEl.classList.remove('active');
    }
    console.log('scroll')
 }   
    
  
})();


//애니매이션 스크롤
const animationMove = function(selector){
    const target = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({top: targetScrollY, behavior: 'smooth'});
}



const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
console.log(scrollMoveEl);
for(let i=0; i< scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener("click", function(e){
        animationMove(this.dataset.target);
    });
}






//비밀번호,아이디 찾기 알림창 

    function showAlert() {
        // 알림창 표시
        alert("해당 이메일로 아이디를 전송하였습니다.");
        return false; // 실제 제출 방지 (테스트 용도)
    }

    function pwshowAlert() {
        // 알림창 표시
        alert("해당 이메일로 비밀번호 변경이 가능한 링크를  전송하였습니다.");
        return false; // 실제 제출 방지 (테스트 용도)
    }

    function  sgshowAlert() {
        // 알림창 표시
        alert("회원가입이 완료 되었습니다.");
        return false; // 실제 제출 방지 (테스트 용도)
    }
