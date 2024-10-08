document.querySelector("#payment-button").addEventListener("click",()=>{
    paymentWidget.requestPayment({
      orderId: 'AD8aZDpbzXs4EQa-UkIX6',
      orderName: '전자 피아노',
      successUrl: 'http://localhost:8080/success',
      failUrl: 'http://localhost:8080/fail',
      customerEmail: 'customer123@gmail.com', 
      customerName: '홍길동'
      }).catch(function (error) {
          if (error.code === 'USER_CANCEL') {
          // 결제 고객이 결제창을 닫았을 때 에러 처리
          } if (error.code === 'INVALID_CARD_COMPANY') {
            // 유효하지 않은 카드 코드에 대한 에러 처리
          }
      })  
  })