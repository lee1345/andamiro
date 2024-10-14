//착한 선물 데이터
const Gift = [

    //Home appliances
    { id: 1, G_category: "Home appliances", G_Maker: "삼성", G_Product_Name: "75인치 4K QLED TV", G_Product_Sample: "./img/gift/home_appliances/gift1.jpg", 
    G_Product_Sample_detail: "./img/gift/home_appliances/gift1_detail.jpg",G_Target_amount: 1900000, G_funding_achievement: 950000,G_funding_progress: 50, G_head_count: 5 },
    
    { id: 2, G_category: "Home appliances", G_Maker: "LG전자", G_Product_Name: "디오스 오브제컬렉션", G_Product_Sample: "./img/gift/home_appliances/gift2.jpg", 
    G_Product_Sample_detail: "./img/gift/home_appliances/gift2_detail.jpg", G_Target_amount: 2500000, G_funding_achievement: 2000000, G_funding_progress: 80, G_head_count: 12 },
    
    { id: 3, G_category: "Home appliances", G_Maker: "LG전자", G_Product_Name: "세탁기 건조기", G_Product_Sample: "./img/gift/home_appliances/gift3.jpg",
    G_Product_Sample_detail: "./img/gift/home_appliances/gift3_detail.jpg", G_Target_amount: 2250000, G_funding_achievement: 1500000, G_funding_progress: 66, G_head_count: 8 },
    
    { id: 4, G_category: "Home appliances", G_Maker: "Dell", G_Product_Name: "G시리즈(16GB/512GB)", G_Product_Sample: "./img/gift/home_appliances/gift4.jpg",
    G_Product_Sample_detail: "./img/gift/home_appliances/gift4_detail.jpg", G_Target_amount: 1130000, G_funding_achievement: 900000, G_funding_progress: 80, G_head_count: 7 },   

    //TOY
    { id: 5, G_category: "Toy", G_Maker: "교통교육사", G_Product_Name: "도로교통 학습세트", G_Product_Sample: "./img/gift/toy/gift1.jpg", 
    G_Product_Sample_detail: "./img/gift/toy/gift1_detail.jpg", G_Target_amount: 380000, G_funding_achievement: 190000, G_funding_progress: 50, G_head_count: 5 }, 

    { id: 6, G_category: "Toy", G_Maker: "보드미_리빙", G_Product_Name: "어린이씽크대 키친세트", G_Product_Sample: "./img/gift/toy/gift2.jpg", 
    G_Product_Sample_detail: "./img/gift/toy/gift2_detail.jpg", G_Target_amount: 860000, G_funding_achievement: 430000, G_funding_progress: 50, G_head_count: 10 }, 

    { id: 7, G_category: "Toy", G_Maker: "오너클랜", G_Product_Name: "쿠쿠토이즈 에듀팜 빅블록", G_Product_Sample: "./img/gift/toy/gift3.jpg", 
    G_Product_Sample_detail: "./img/gift/toy/gift3_detail.jpg", G_Target_amount: 330000, G_funding_achievement: 165000, G_funding_progress: 50, G_head_count: 4 }, 

    { id: 8, G_category: "Toy", G_Maker: "초이락", G_Product_Name: "헬로카봇 하이퍼캅스 세트", G_Product_Sample: "./img/gift/toy/gift4.jpg", 
    G_Product_Sample_detail: "./img/gift/toy/gift4_detail.jpg", G_Target_amount: 330000, G_funding_achievement: 99000, G_funding_progress: 30, G_head_count: 3 },
    
    //Music
    { id: 9, G_category: "Music", G_Maker: "다이나톤", G_Product_Name: "다이나톤 디지털피아노", G_Product_Sample: "./img/gift/music/gift1.jpg", 
    G_Product_Sample_detail: "./img/gift/music/gift1_detail.jpg", G_Target_amount: 800000, G_funding_achievement: 300000, G_funding_progress: 37.5, G_head_count: 5 }, 

    { id: 10, G_category: "Music", G_Maker: "콜트", G_Product_Name: "콜트 일렉기타 G110 OPBK", G_Product_Sample: "./img/gift/music/gift2.jpg", 
    G_Product_Sample_detail: "./img/gift/music/gift2_detail.jpg", G_Target_amount: 220000, G_funding_achievement: 110000, G_funding_progress: 50, G_head_count: 10 }, 

    { id: 11, G_category: "Music", G_Maker: "야마하", G_Product_Name: "야마하 플루트", G_Product_Sample: "./img/gift/music/gift3.jpg", 
    G_Product_Sample_detail: "./img/gift/music/gift3_detail.jpg", G_Target_amount: 112000, G_funding_achievement: 84000, G_funding_progress: 75, G_head_count: 3 }, 

    { id: 12, G_category: "Music", G_Maker: "호시미", G_Product_Name: "전자드럼 패드 BX-2 MX-2", G_Product_Sample: "./img/gift/music/gift4.jpg",
    G_Product_Sample_detail: "./img/gift/music/gift4_detail.jpg", G_Target_amount: 114000, G_funding_achievement: 57000, G_funding_progress: 50, G_head_count: 4 },

    //Book
    { id: 13, G_category: "Book", G_Maker: "효리원", G_Product_Name: "저학년 위인동화 60권세트", G_Product_Sample: "./img/gift/book/gift1.jpg", 
    G_Product_Sample_detail: "./img/gift/book/gift1_detail.jpg", G_Target_amount: 520000, G_funding_achievement: 300000, G_funding_progress: 57.7, G_head_count: 6 }, 

    { id: 14, G_category: "Book", G_Maker: "예림당", G_Product_Name: "Why 과학만화 A~E세트", G_Product_Sample: "./img/gift/book/gift2.jpg",
    G_Product_Sample_detail: "./img/gift/book/gift2_detail.jpg", G_Target_amount: 210000, G_funding_achievement: 100000, G_funding_progress: 47.6, G_head_count: 8 }, 

    { id: 15, G_category: "Book", G_Maker: "천재교육", G_Product_Name: "한글,수학,명화 세트 53종", G_Product_Sample: "./img/gift/book/gift3.jpg", 
    G_Product_Sample_detail: "./img/gift/book/gift3_detail.jpg", G_Target_amount: 267000, G_funding_achievement: 200000, G_funding_progress: 74.8, G_head_count: 4 }, 

    { id: 16, G_category: "Book", G_Maker: "계절책방", G_Product_Name: "추피의 생활이야기 179종", G_Product_Sample: "./img/gift/book/gift4.jpg", 
    G_Product_Sample_detail: "./img/gift/book/gift4_detail.jpg", G_Target_amount: 200000, G_funding_achievement: 80000, G_funding_progress: 40, G_head_count: 5 },

    //Daily necessities
    { id: 17, G_category: "Daily necessities", G_Maker: "에코블링", G_Product_Name: "대형 초등 2인 책상의자세트", G_Product_Sample: "./img/gift/daily_necessities/gift1.jpg", 
    G_Product_Sample_detail: "./img/gift/dailynecessities/gift1_detail.jpg", G_Target_amount: 248000, G_funding_achievement: 124000, G_funding_progress: 50, G_head_count: 5 }, 

    { id: 18, G_category: "Daily necessities", G_Maker: "보솜이", G_Product_Name: "오가닉 소형 밴드 기저귀", G_Product_Sample: "./img/gift/daily_necessities/gift2.jpg", 
    G_Product_Sample_detail: "./img/gift/dailynecessities/gift2_detail.jpg", G_Target_amount: 2400000, G_funding_achievement: 2400000, G_funding_progress: 100, G_head_count: 20 }, 

    { id: 19, G_category: "Daily necessities", G_Maker: "남양", G_Product_Name: "유기농 산양분유 800g x 9캔", G_Product_Sample: "./img/gift/daily_necessities/gift3.jpg",
    G_Product_Sample_detail: "./img/gift/dailynecessities/gift3_detail.jpg", G_Target_amount: 410000, G_funding_achievement: 205000, G_funding_progress: 50, G_head_count: 8 }, 

    { id: 20, G_category: "Dailyc necessities", G_Maker: "리코코", G_Product_Name: "양면이중코팅 원피스매트", G_Product_Sample: "./img/gift/daily_necessities/gift4.jpg",
    G_Product_Sample_detail: "./img/gift/dailynecessities/gift4_detail.jpg", G_Target_amount: 690000, G_funding_achievement: 460000, G_funding_progress: 66.7, G_head_count: 7 }  
];

//행복나르미 데이터
const  Narmi= [ 

    //홍남희
    {id: 1, N_region: "천안시", N_city: "서북구", N_location: "희망 어린이집", N_location_img: "../img/narmi/narmi1.png", agent_name: "홍남희", agent_img: "../img/narmi/agent1.png", N_Target_amount: 1175000, N_funding_achievement: 250000, N_D_day: 19, N_End_date: "2024-12-31", N_funding_progress: 21.3, N_head_count:11, 
    agent_Introduce:`안녕하세요! 저는 19세 홍남희입니다. 현재 선화예고 3학년에서 바이올린을 전공하고 있습니다. 이번에 보육원 아이들에게 악기를 사주고, 직접 가르쳐주고 싶은 마음이 생겼습니다.
    음악은 아이들에게 큰 힘이 되고, 감정을 표현하는 소중한 방법입니다. 제가 가르치는 바이올린을 통해 아이들이 새로운 꿈과 희망을 발견할 수 있도록 돕고 싶습니다. 하지만 이를 실현하기 위해서는 여러분의 도움이 필요합니다.
    악기 구매와 교육에 필요한 자금을 모으고자 합니다. 여러분의 작은 후원이 큰 변화를 만들어낼 수 있습니다. 함께 아이들에게 음악의 즐거움을 선물해주실 수 있으신가요?
    여러분의 따뜻한 마음이 아이들에게 큰 힘이 될 것입니다. 많은 관심과 참여 부탁드립니다!`},
    
    //박민혁
    {id: 2, N_region: "천안시", N_city: "서북구", N_location: "하늘 어린이집", N_location_img: "../img/narmi/narmi2.png", agent_name: "박민혁", agent_img: "../img/narmi/agent2.png", N_Target_amount: 3000000, N_funding_achievement: 500000, N_D_day: 30, N_End_date: "2024-11-30", N_funding_progress: 16.7, N_head_count: 20,  
    agent_Introduce:`안녕하세요! 저는 25세 박민혁이라고 합니다. 현재 취업 준비 중이며, 스펙을 쌓기 위해 노력하고 있습니다. IT에 대한 열정이 큰 만큼, 이번에는 보육원 아이들에게 IT 관련 물건을 선물하고 싶습니다.
    아이들이 미래의 IT 인재로 성장할 수 있도.록, 컴퓨터 기기나 교육용 소프트웨어 등을 지원하고 싶습니다. 이러한 자원은 아이들에게 새로운 경험과 배움의 기회를 줄 수 있습니다. 하지만 이를 위해서는 여러분의 도움이 필요합니다.
    작은 후원도 큰 힘이 됩니다. 여러분의 따뜻한 마음이 아이들에게 꿈과 희망을 심어줄 수 있습니다. 함께 이 뜻깊은 프로젝트에 참여해주실 수 있으신가요?
    아이들의 밝은 미래를 위해 여러분의 소중한 후원을 기다립니다. 많은 관심 부탁드립니다!`},
    
    //최민영
    {id: 3, N_region: "천안시", N_city: "동남구", N_location: "사랑의 노인 복지센터", N_location_img: "../img/narmi/narmi3.png", agent_name: "최민영", agent_img: "../img/narmi/agent3.png", N_Target_amount: 1500000, N_funding_achievement: 150000, N_D_day: "45", N_End_date: "2025-01-01", N_funding_progress: 10, N_head_count: 30,
    agent_introduce: `안녕하세요, 저는 최민영입니다. 37세로, 반복되는 일상 속에서 새로운 변화를 찾고 싶다는 마음이 커졌습니다. 
    그래서 노인 복지센터에서 봉사 활동을 통해 지역 사회의 어르신들께 도움을 드리고 싶습니다. 우리의 노인 분들은 많은 경험과 지혜를 가지고 계십니다. 그러나 종종 외로움과 소외감을 느끼실 때가 많습니다. 저는 이 분들과의 소통을 통해 그들에게 따뜻한 관심과 사랑을 전하고, 소중한 시간을 함께 나누고 싶습니다. 
    이 활동을 위해 필요한 물품과 프로그램 운영 비용이 필요합니다. 여러분의 작은 후원이 큰 힘이 될 것입니다. 함께 이 뜻깊은 프로젝트에 참여해 주실 수 있으신가요? 저와 함께 어르신들에게 행복과 희망을 선물해 주세요. 많은 관심과 참여 부탁드립니다!`},
    
    //김학철
    {id: 4, N_region: "아산시", N_city: "탕정면", N_location: "탕정도서관", N_location_img: "../img/narmi/narmi4.png", agent_name: "김학철", agent_img: "../img/narmi/agent4.png", N_Target_amount: 2000000, N_funding_achievement: 400000, N_D_day: "30", N_End_date: "2024-12-01", N_funding_progress: 20, N_head_count: 2,
    agent_introduce: `안녕하세요! 저는 65세 김학철입니다. 작가로서의 삶을 마무리한 후, 아이들에게 도서를 선물하고 글쓰기 재능을 나누고 싶습니다. 
    아이들이 다양한 책을 접하고, 글쓰기의 즐거움을 느낄 수 있도록 도와주고 싶습니다. 책은 상상력을 키워주고, 자신을 표현하는 방법을 배우는 중요한 도구입니다. 
    제가 가진 경험과 노하우를 통해 아이들에게 글쓰기의 기초를 가르치고 싶습니다. 아이들에게 도서와 함께 글쓰기 워크숍을 진행하여, 그들이 자신의 이야기를 쓰고 나눌 수 있는 기회를 제공하고자 합니다. 
    하지만 이를 실현하기 위해서는 여러분의 도움이 필요합니다. 아이들에게 책과 교육의 기회를 선물하고 싶습니다. 많은 관심과 후원 부탁드립니다. 함께 아이들의 꿈을 키워줄 수 있는 기회를 만들어가고 싶습니다! 감사합니다.`},   
    
    //한민숙
    {id: 5, N_region: "아산시", N_city: "배방읍", N_location: "배방읍 어린이 지원 센터", N_location_img: "../img/narmi/narmi5.png", agent_name: "한민숙", agent_img: "../img/narmi/agent5.png", N_Target_amount: 1500000, N_funding_achievement: 300000, N_D_day: "30", N_End_date: "2024-12-01", N_funding_progress: 20, N_head_count: 5,
    agent_introduce: `안녕하세요! 저는 57세 한민숙입니다. 일찍 결혼해 세 남매를 키운 후, 이제 아이들이 모두 결혼하여 허전한 마음이 들기 시작했습니다. 그래서 이번에는 아이들을 돕고 싶다는 생각이 들었습니다. 
    특히, 아이들을 키우는 데 필요한 기저귀와 같은 생필품을 지원하고 싶습니다. 이러한 작은 것들이 부모님에게는 큰 도움이 될 수 있다고 믿습니다. 제가 가진 사랑과 경험을 통해 아이들에게 따뜻한 마음을 전하고 싶습니다. 
    아이들이 건강하게 성장할 수 있도록 도와줄 수 있는 기회를 찾고 있습니다. 여러분의 따뜻한 마음이 아이들에게 큰 힘이 될 것입니다. 함께 이 뜻깊은 일을 할 수 있도록 많은 관심과 참여 부탁드립니다! 감사합니다.`}, 
    
    //Daniel Choi
    {id: 6, N_region: "아산시", N_city: "음봉면", N_location: "음봉면 어린이 지원 센터", N_location_img: "../img/narmi/narmi6.png", agent_name: "Daniel Choi", agent_img: "../img/narmi/agent6.png", N_Target_amount: 700000, N_funding_achievement: 700000, N_D_day: "0", End_date: "2024-12-01", N_funding_progress: 100, N_head_count: 10,
    agent_introduce: `안녕하세요 여러분! I’m Daniel Choi, 주한미군 취사병이에요. 요리를 정말 잘해요! 그래서 생각했어요—아이들을 정말 좋아하는 제가 근처 어린이들에게 맛있는 미국 음식을 만들어 주면 얼마나 좋을까요? 
    햄버거, 핫도그, 피자 같은 맛있는 것들로 아이들과 함께 즐거운 시간을 보내고 싶어요! 🍔🌭🍕 하지만 이 멋진 계획을 위해 재료가 필요해요. 
    여러분의 도움이 필요합니다! 작은 후원이나 재료 지원이 큰 힘이 될 거예요. 함께 아이들에게 사랑을 나눌 수 있을까요?여러분의 관심과 참여 부탁드려요! 고맙습니다! Let’s make some yummy food together!`},
];

//행복나르미 목표액 산출내역
const funding_breakdown = [
    {
        f_id: 1,
        list: [
            { index: 1, category: "악기", item: "바이올린", quantity: 5, unit: "개", unitPrice: 200000, amount: 1000000, note: "아이들에게 제공할 바이올린" },
            { index: 2, category: "교육 자료", item: "교재", quantity: 10, unit: "권", unitPrice: 20000, amount: 200000, note: "바이올린 교습을 위한 교재" },
            { index: 3, category: "기타", item: "음악 소품", quantity: 10, unit: "개", unitPrice: 5000, amount: 50000, note: "수업에 필요한 소품" },
            { index: 4, category: "운영비", item: "교실 대여", quantity: 1, unit: "회", unitPrice: 25000, amount: 25000, note: "수업 진행을 위한 공간 대여" },
            { totalAmount: 1175000 }
        ]
    },
    {
        f_id: 2,
        list: [
            { index: 1, category: "IT 기기", item: "노트북", quantity: 5, unit: "대", unitPrice: 500000, amount: 2500000, note: "아이들에게 제공할 노트북" },
            { index: 2, category: "교육 자료", item: "소프트웨어", quantity: 10, unit: "개", unitPrice: 50000, amount: 500000, note: "교육용 소프트웨어 라이센스" },
            { index: 3, category: "기타", item: "교구", quantity: 5, unit: "세트", unitPrice: 100000, amount: 500000, note: "아이들의 흥미를 끌기 위한 교구" },
            { index: 4, category: "운영비", item: "워크숍 진행비", quantity: 1, unit: "회", unitPrice: 50000, amount: 50000, note: "워크숍 진행을 위한 비용" },
            { index: 5, category: "기타", item: "간식", quantity: 20, unit: "팩", unitPrice: 1000, amount: 20000, note: "아이들에게 제공할 간식" },
            { totalAmount: 3000000 }
        ]
    },
    {
        f_id: 3,
        list: [
            { index: 1, category: "생활 용품", item: "이불", quantity: 10, unit: "개", unitPrice: 30000, amount: 300000, note: "어르신들에게 제공할 이불" },
            { index: 2, category: "식료품", item: "쌀", quantity: 20, unit: "kg", unitPrice: 2000, amount: 40000, note: "어르신들을 위한 쌀" },
            { index: 3, category: "의료 용품", item: "진통제", quantity: 5, unit: "박스", unitPrice: 15000, amount: 75000, note: "어르신들의 건강을 위한 진통제" },
            { index: 4, category: "운영비", item: "프로그램 진행비", quantity: 1, unit: "회", unitPrice: 100000, amount: 100000, note: "어르신 프로그램 진행 비용" },
            { index: 5, category: "기타", item: "책자", quantity: 50, unit: "권", unitPrice: 1000, amount: 50000, note: "어르신들을 위한 책자" },
            { totalAmount: 1500000 }
        ]
    },
    {
        f_id: 4,
        list: [
            { index: 1, category: "도서", item: "어린이 책", quantity: 100, unit: "권", unitPrice: 10000, amount: 1000000, note: "아이들에게 제공할 책" },
            { index: 2, category: "문구류", item: "노트", quantity: 100, unit: "개", unitPrice: 5000, amount: 500000, note: "아이들을 위한 노트" },
            { index: 3, category: "교육 자료", item: "글쓰기 워크숍 비용", quantity: 1, unit: "회", unitPrice: 400000, amount: 400000, note: "아이들을 위한 글쓰기 워크숍 진행 비용" },
            { index: 4, category: "기타", item: "기타 소모품", quantity: 10, unit: "개", unitPrice: 5000, amount: 50000, note: "수업에 필요한 기타 소모품" },
            { totalAmount: 2000000 }
        ]
    },
    {
        f_id: 5,
        list: [
            { index: 1, category: "생필품", item: "기저귀", quantity: 100, unit: "팩", unitPrice: 5000, amount: 500000, note: "아이들에게 제공할 기저귀" },
            { index: 2, category: "식료품", item: "분유", quantity: 20, unit: "통", unitPrice: 20000, amount: 400000, note: "아이들을 위한 분유" },
            { index: 3, category: "교구", item: "블록", quantity: 30, unit: "세트", unitPrice: 10000, amount: 300000, note: "아이들의 흥미를 위한 블록" },
            { index: 4, category: "간식", item: "과자", quantity: 50, unit: "팩", unitPrice: 1000, amount: 50000, note: "아이들에게 제공할 간식" },
            { index: 5, category: "운영비", item: "이벤트 진행비", quantity: 1, unit: "회", unitPrice: 200000, amount: 200000, note: "이벤트 진행을 위한 비용" },
            { totalAmount: 1500000 }
        ]
    },
    {
        f_id: 6,
        list: [
            { index: 1, category: "식재료", item: "햄버거 재료", quantity: 20, unit: "세트", unitPrice: 10000, amount: 200000, note: "아이들에게 제공할 햄버거" },
            { index: 2, category: "식재료", item: "핫도그 재료", quantity: 20, unit: "세트", unitPrice: 8000, amount: 160000, note: "아이들에게 제공할 핫도그" },
            { index: 3, category: "식재료", item: "피자 재료", quantity: 15, unit: "세트", unitPrice: 12000, amount: 180000, note: "아이들에게 제공할 피자" },
            { index: 4, category: "음료", item: "주스", quantity: 30, unit: "팩", unitPrice: 2000, amount: 60000, note: "아이들에게 제공할 주스" },
            { index: 5, category: "간식", item: "과자", quantity: 50, unit: "팩", unitPrice: 1000, amount: 50000, note: "아이들에게 제공할 간식" },
            { totalAmount: 700000 }
        ]
    }
];

//행복나르미 후원금 정산내역
const Settlement_Report = [
  {
    f_id: 6,
    list: [
        { index: 1, category: "식재료", item: "햄버거 재료", quantity: 20, unit: "세트", unitPrice: 10000, amount: 200000, note: "아이들에게 제공할 햄버거" },
        { index: 2, category: "식재료", item: "핫도그 재료", quantity: 20, unit: "세트", unitPrice: 8000, amount: 160000, note: "아이들에게 제공할 핫도그" },
        { index: 3, category: "식재료", item: "피자 재료", quantity: 15, unit: "세트", unitPrice: 12000, amount: 180000, note: "아이들에게 제공할 피자" },
        { index: 4, category: "음료", item: "주스", quantity: 30, unit: "팩", unitPrice: 2000, amount: 60000, note: "아이들에게 제공할 주스" },
        { index: 5, category: "간식", item: "과자", quantity: 50, unit: "팩", unitPrice: 1000, amount: 50000, note: "아이들에게 제공할 간식" },
        { totalAmount: 700000 }
    ]
}
];

//같이 가치 데이터
const with_value = [
        {
            id: 1,
            W_region: "천안시 불당동",
            campaing_topic: "수질 환경 보호 비대면 봉사활동 '우리 하천 지킴이'",
            campaomg_img: "../img/campaign/campaign1.png",
            capaing_detail_img: "../img/campaign/campaign1.png",
            W_Target_participants: 20,
            W_Participant_Count: 10,
            W_Participation_Rate: 50,
            W_D_day: "10",
            W_End_date: "2024-10-28",
            activity_participation_guide: `활동 참여 안내:
        
        - 활동 참여를 희망하는 누구나: 개인, 가정, 학급, 동아리 등 단체 신청 가능
        - 봉사활동이 필요한 누구나 신청 가능
        - 어디서나 활동 가능: EM흙공을 하천에 던질 수 있는 장소 (집, 학교, 사회복지시설, 실외 등)
        - 도심 속 하천: 경기 남부 황구지천, 오산천, 안성천, 아라천, 굴포천 등
        - 활동 가능한 날짜에 자유롭게 진행
        - 매월 첫째 주 목요일에 발송되는 활동 물품 수령 후 활동 시작
        
        - 환경 교육:
            홈페이지에서 수질 관련 정보를 확인하고 활동 내용을 숙지
        
        - 환경 활동:
            EM흙공을 직접 만들고 발효한 후 하천에 투척하는 활동 진행
        
        - 실천 나눔:
            ‘우리 하천 지킴이’ 홈페이지에 활동 후기 및 사진을 자유롭게 업로드
            - 배너 내 QR코드를 스캔하여 우측 상단의 ‘신청하기’ 버튼 클릭
            - [www.ecowater.or.kr](http://www.ecowater.or.kr) 링크에 접속하여 우측 상단의 '신청하기' 버튼 클릭
        
        - 실천나눔 게시를 통해 모든 활동 과정이 확인된 경우에만 1365 자원봉사 포털을 통해 봉사활동 8시간 인증
        - 활동 물품은 신청일로부터 1개월 이내에 발송되며, 수령 후 원하는 날짜에 자유롭게 진행 가능`
        },
        
        {
            id: 2,
            W_region: "행복한우리복지관",
            campaing_topic: "장애인식개선 캠페인 '우리사이 0미터'",
            campaomg_img: "../img/campaign/campaign2.png",
            capaing_detail_img: "../img/campaign/campaign2.png",
            W_Target_participants: 300,
            W_Participant_Count: 25,
            W_Participation_Rate: 8.33,
            W_D_day: "78",
            W_End_date: "2024-12-31",
            activity_participation_guide: `장애인식개선 캠페인 '우리사이 0미터' 안내사항:
          
          - 캠페인 목표: 
            장애인에 대한 긍정적인 인식을 확산하고, 모든 사람의 차별 없는 소통을 촉진합니다.
          
          - 대상: 
            모든 연령대의 개인 및 단체 (학교, 동아리, 기업 등)
          
          - 참여 가능: 
            장애인식 개선에 관심 있는 누구나 참여 가능.
          
          - 활동내용:
            - 장애인식 관련 교육 및 워크숍 진행
            - 캠페인 홍보물 제작 및 배포
            - 지역 사회와 함께하는 장애인식 개선 행사 개최
          
          - 활동 기간:
            - 캠페인 시작일 및 종료일: 2024년 1월 1일 ~ 2024년 12월 31일
            - 정기적인 모임 및 교육 일정 안내 예정
          
          - 신청방법:
            - 온라인 신청: [www.happywelfare.org](http://www.happywelfare.org)
            - 전화 또는 이메일을 통한 문의 가능:
              - 전화: 010-1234-5678
              - 이메일: info@happywelfare.org
          
          - 유의사항:
            - 캠페인 참여 후, 활동 후기를 작성하고 공유하여 인증서 발급 가능
            - 자원봉사 시간 인증을 위한 활동 내용 기록 필수
          
          - 기타 문의사항:
            - 문의처: 행복한우리복지관 010-9876-5432
            - 이메일: support@happywelfare.org`
          },
          
          {
            id: 3,
            W_region: "지구 전역",
            campaing_topic: "우리함께 지구하자 7기 진행(돌아온 꽃씨 뿌리기!)",
            campaomg_img: "../img/campaign/campaign3.png",
            capaing_detail_img: "../img/campaign/campaign3_detail.png",
            W_Target_participants: 100,
            W_Participant_Count: 15,
            W_Participation_Rate: 15,
            W_D_day: "8",
            W_End_date: "2024-10-28",
            activity_participation_guide: `활동 내용:
            
          - 사라져가는 꿀벌을 지키기 위해 일상생활 속 꽃씨 뿌리기  
          
          선발 인원:
            
          - 지구인 100명 (선착순 마감)  
          
          지원 자격:
            
          - 지구를 지키고 싶은 사람이라면 누구나  
          - 쉽고 재밌게 지구를 지키고 싶은 사람  
          - 이색적인 환경 보호 활동을 실천하고 싶은 사람  
          - 깨끗한 물을 선물하는 나눔 활동에 동참 가능한 사람  
          
          신청 기간:
            
          - 2024. 10. 10.(목) ~ 18(금)  
          
          활동 기간:
            
          - 2024. 10. 21(월) ~ 28(금)  
          
          지원 방법:
            
          - QR코드 스캔 후 신청서 제출  
          
          참여 혜택:
            
          - 지구를 구하기 위한 지구여행 키트 제공  
          - VMS 봉사 시간 제공  
          - 수료증 및 굿네이버스 회원증서 발급  
          
          신청 링크:
            
          - [신청하기](https://naver.me/xnhz1E2J)  
          
          문의 사항:
            
          - 굿네이버스 경남사업본부 (전화: 055-334-1256)`
          },
          
          {
            id: 4,
            W_region: "김제시",
            campaing_topic: "희망나눔 음악회(행사봉사자 모집)",
            campaomg_img: "../img/campaign/campaign4.png",
            capaing_detail_img: "../img/campaign/campaign4.png",
            W_Target_participants: 50,
            W_Participant_Count: 10,
            W_Participation_Rate: 20,
            W_D_day: "16",
            W_End_date: "2024-10-29",
            activity_participation_guide: `상세내용:
          
          1. 행사명: 어르신 희망 나눔 음악회  
          
          2. 행사 일시: 2024년 10월 29일(화) 오후 13:00 ~ 오후 17시까지 (4시간)  
          
          3. 행사 장소: 김제시청 대강당 (전라북도 김제시 중앙로 40)  
          
          4. 행사 내용: 연예인 축하공연, 행운권 추첨, 선물증정 등  
          
          5. 봉사자 업무: 행사 질서 안내 / 봉사 도우미  
          
          6. 봉사자 혜택: 
            - 자원봉사자 전원 봉사 실적 등록
            - 우수봉사자 감사장 수여
            - 참가봉사자 전원 선물 증정 (중식 제공)  
          
          7. 행사 담당자: 박해리 (전화: 010-6704-0041)  
          
          ※ 공지 말씀: 자원봉사 신청 후 담당자에게 필히 문자로 접수 부탁드립니다.  
          - 담당 박해리: 010-6704-0041  
          - 문자내용 예시: 봉사신청일자 / 성명 / 생년월일 / 직업 / 성별`
          },
          
          {
            id: 5,
            W_region: "춘천시",
            campaing_topic: "[기아대책X롯데마트·슈퍼] 2024 리얼스 푸르깅 크루 모집",
            campaomg_img: "../img/campaign/campaign5.png",
            capaing_detail_img: "../img/campaign/campaign5_detail.png",
            W_Target_participants: 100,
            W_Participant_Count: 20,
            W_Participation_Rate: 20,
            W_D_day: "19",
            W_End_date: "2024-10-17",
            activity_participation_guide: `2024 리얼스 푸르깅 크루 모집
          
          일상 속 넷제로를 실천할 100인의 크루원을 모집합니다!
          
          리얼스 푸르깅은 푸른 지구의 '푸르다'와 쓰레기를 줍는 운동 '플로깅'이 결합된 활동입니다. 북한강 고구마섬에서 쓰레기를 수거하며 탄소중립(NET-ZERO)을 함께 실천할 리얼스 푸르깅의 주인공을 찾습니다.
          
          모집 일정:
          - 10월 7일(월) ~ 10월 17일(목) 자정까지  
          
          참가비:
          - 무료 (*선착순 접수)  
          
          일시 & 장소:
          - 2024년 11월 1일(금) 14:00  
          - 춘천시 고구마섬  
          - 부스 오픈: 13:00  
          
          셔틀 운영:
          - 춘천역 ▶ 고구마섬  
            - 1타임: 12:50  
            - 2타임: 13:20  
          - 고구마섬 ▶ 춘천역  
            - 1타임: 16:30  
            - 2타임: 17:00  
          
          주차:
          - 고구마섬 야구장 주차장 (강원 춘천시 사농동 334-2)  
          
          준비물:
          - 텀블러 (물과 커피를 마실 수 있는 다회용기)  
          - 사용하지 않는 비닐봉투  
          - 고장 난 우산 (행사장으로 가져오시면 새 우산으로 수리해드립니다)  
          
          진행 프로그램:
          - 플로깅  
          - 생태교란종(가시박) 제거  
          - 정크아트  
          
          혜택:
          - [공통] 플로깅 스타트 키트  
          - [공통] 완주 비누 메달  
          - [공통] 비건 간식, 커피 & 음료  
          - [선택] 봉사시간(4시간)  
          - [경품] 총 50만원 규모의 현장 경품 추첨  
          
          문의처:
          - 운영국: 070-4350-5663  
          
          신청방법:
          - [신청하기](https://forms.gle/yugtWPX6Fc9VhTRU8)`
          },        
];