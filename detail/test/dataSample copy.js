const Gift = [

    //Home appliances
    { id: 1, G_category: "Home appliances", G_Maker: "삼성", G_Product_Name: "75인치 4K QLED TV", G_Product_Sample: "../img/gift/home_appliances/gift1.jpg", 
    G_Product_Sample_detail: "../img/gift/home_appliances/gift1_detail.jpg",G_Target_amount: 1900000, G_funding_achievement: 950000,G_funding_progress: 50, G_head_count: 5 },
    
    { id: 2, G_category: "Home appliances", G_Maker: "LG전자", G_Product_Name: "디오스 오브제컬렉션", G_Product_Sample: "../img/gift/home_appliances/gift2.jpg", 
    G_Product_Sample_detail: "../img/gift/home_appliances/gift2_detail.jpg", G_Target_amount: 2500000, G_funding_achievement: 2000000, G_funding_progress: 80, G_head_count: 12 },
    
    { id: 3, G_category: "Home appliances", G_Maker: "LG전자", G_Product_Name: "세탁기 건조기", G_Product_Sample: "../img/gift/home_appliances/gift3.jpg",
    G_Product_Sample_detail: "../img/gift/home_appliances/gift3_detail.jpg", G_Target_amount: 2250000, G_funding_achievement: 1500000, G_funding_progress: 66, G_head_count: 8 },
    
    { id: 4, G_category: "Home appliances", G_Maker: "Dell", G_Product_Name: "G시리즈 노트북 (16GB/512GB)", G_Product_Sample: "../img/gift/home_appliances/gift4.jpg",
    G_Product_Sample_detail: "../img/gift/home_appliances/gift4_detail.jpg", G_Target_amount: 1130000, G_funding_achievement: 900000, G_funding_progress: 80, G_head_count: 7 },   

    //TOY
    { id: 5, G_category: "Toy", G_Maker: "교통교육사", G_Product_Name: "도로교통학습세트", G_Product_Sample: "../img/gift/toy/gift1.jpg", 
    G_Product_Sample_detail: "../img/gift/toy/gift1_detail.jpg", G_Target_amount: 380000, G_funding_achievement: 190000, G_funding_progress: 50, G_head_count: 5 }, 

    { id: 6, G_category: "Toy", G_Maker: "보드미_리빙", G_Product_Name: "어린이씽크대 로즈키친세트", G_Product_Sample: "../img/gift/toy/gift2.jpg", 
    G_Product_Sample_detail: "../img/gift/toy/gift2_detail.jpg", G_Target_amount: 860000, G_funding_achievement: 430000, G_funding_progress: 50, G_head_count: 10 }, 

    { id: 7, G_category: "Toy", G_Maker: "오너클랜", G_Product_Name: "쿠쿠토이즈 에듀팜 빅블록 A세트", G_Product_Sample: "../img/gift/toy/gift3.jpg", 
    G_Product_Sample_detail: "../img/gift/toy/gift3_detail.jpg", G_Target_amount: 330000, G_funding_achievement: 165000, G_funding_progress: 50, G_head_count: 4 }, 

    { id: 8, G_category: "Toy", G_Maker: "초이락", G_Product_Name: "헬로카봇 하이퍼캅스 세트", G_Product_Sample: "../img/gift/toy/gift4.jpg", 
    G_Product_Sample_detail: "../img/gift/toy/gift4_detail.jpg", G_Target_amount: 330000, G_funding_achievement: 99000, G_funding_progress: 30, G_head_count: 3 },
    
    //Music
    { id: 9, G_category: "Music", G_Maker: "다이나톤", G_Product_Name: "다이나톤 디지털피아노", G_Product_Sample: "../img/gift/music/gift1.jpg", 
    G_Product_Sample_detail: "../img/gift/music/gift1_detail.jpg", G_Target_amount: 800000, G_funding_achievement: 300000, G_funding_progress: 37.5, G_head_count: 5 }, 

    { id: 10, G_category: "Music", G_Maker: "콜트", G_Product_Name: "콜트 일렉기타 G110 OPBK", G_Product_Sample: "../img/gift/music/gift2.jpg", 
    G_Product_Sample_detail: "../img/gift/music/gift2_detail.jpg", G_Target_amount: 220000, G_funding_achievement: 110000, G_funding_progress: 50, G_head_count: 10 }, 

    { id: 11, G_category: "Music", G_Maker: "야마하", G_Product_Name: "야마하플루트", G_Product_Sample: "../img/gift/music/gift3.jpg", 
    G_Product_Sample_detail: "../img/gift/music/gift3_detail.jpg", G_Target_amount: 112000, G_funding_achievement: 84000, G_funding_progress: 75, G_head_count: 3 }, 

    { id: 12, G_category: "Music", G_Maker: "호시미", G_Product_Name: "호시미 전자드럼 패드 BX-2 MX-2", G_Product_Sample: "../img/gift/music/gift4.jpg",
    G_Product_Sample_detail: "../img/gift/music/gift4_detail.jpg", G_Target_amount: 114000, G_funding_achievement: 57000, G_funding_progress: 50, G_head_count: 4 },

    //Book
    { id: 13, G_category: "Book", G_Maker: "효리원", G_Product_Name: "저학년 교과서 위인동화 한국 위인전 32권+세계 위인전 28권 전 60권 세트", G_Product_Sample: "../img/gift/book/gift1.jpg", 
    G_Product_Sample_detail: "../img/gift/book/gift1_detail.jpg", G_Target_amount: 520000, G_funding_achievement: 300000, G_funding_progress: 57.7, G_head_count: 6 }, 

    { id: 14, G_category: "Book", G_Maker: "예림당", G_Product_Name: "Why 와이 과학 학습만화 A~E 세트선택", G_Product_Sample: "../img/gift/book/gift2.jpg",
    G_Product_Sample_detail: "../img/gift/book/gift2_detail.jpg", G_Target_amount: 210000, G_funding_achievement: 100000, G_funding_progress: 47.6, G_head_count: 8 }, 

    { id: 15, G_category: "Book", G_Maker: "천재교육", G_Product_Name: "NEW 돌잡이 한글+수학+명화 세트 전53종 (개정판)", G_Product_Sample: "../img/gift/book/gift3.jpg", 
    G_Product_Sample_detail: "../img/gift/book/gift3_detail.jpg", G_Target_amount: 267000, G_funding_achievement: 200000, G_funding_progress: 74.8, G_head_count: 4 }, 

    { id: 16, G_category: "Book", G_Maker: "계절책방", G_Product_Name: "전집 추피의 생활이야기 179종 세트", G_Product_Sample: "../img/gift/book/gift4.jpg", 
    G_Product_Sample_detail: "../img/gift/book/gift4_detail.jpg", G_Target_amount: 200000, G_funding_achievement: 80000, G_funding_progress: 40, G_head_count: 5 },

    //Daily necessities
    { id: 17, G_category: "Daily necessities", G_Maker: "에코블링", G_Product_Name: "대형 초등 2인 책상의자세트", G_Product_Sample: "../img/gift/dailynecessities/gift1.jpg", 
    G_Product_Sample_detail: "../img/gift/dailynecessities/gift1_detail.jpg", G_Target_amount: 248000, G_funding_achievement: 124000, G_funding_progress: 50, G_head_count: 5 }, 

    { id: 18, G_category: "Daily necessities", G_Maker: "보솜이", G_Product_Name: "보솜이 리얼코튼 오가니크 소형 밴드 기저귀 50매 160팩", G_Product_Sample: "../img/gift/dailynecessities/gift2.jpg", 
    G_Product_Sample_detail: "../img/gift/dailynecessities/gift2_detail.jpg", G_Target_amount: 2400000, G_funding_achievement: 2400000, G_funding_progress: 100, G_head_count: 20 }, 

    { id: 19, G_category: "Daily necessities", G_Maker: "남양", G_Product_Name: "남양 유기농 산양분유 3단계 800g x 9캔", G_Product_Sample: "../img/gift/dailynecessities/gift3.jpg",
    G_Product_Sample_detail: "../img/gift/dailynecessities/gift3_detail.jpg", G_Target_amount: 410000, G_funding_achievement: 205000, G_funding_progress: 50, G_head_count: 8 }, 

    { id: 20, G_category: "Daily necessities", G_Maker: "리코코", G_Product_Name: "양면이중코팅 더블 원피스매트 382x282x4cm", G_Product_Sample: "../img/gift/dailynecessities/gift4.gjf",
    G_Product_Sample_detail: "../img/gift/dailynecessities/gift4_detail.jpg", G_Target_amount: 690000, G_funding_achievement: 460000, G_funding_progress: 66.7, G_head_count: 7 }  
];

const  Narmi= [ 
    {id: 1, N_region: "천안시", N_city: "서북구", N_location: "희망 어린이집", N_location_img: "../img/narmi/narmi1.png", agent_name: "홍남희", agent_img: "../img/narmi/agent1.png", N_Target_amount: 1175000, N_funding_achievement: 250000, D_day: 19, End_date: "2024-12-31", N_funding_progress: 21.3, N_head_count: 15},
    {id: 2, N_region: "천안시", N_city: "서북구", N_location: "하늘 어린이집", N_location_img: "../img/narmi/narmi2.png", agent_name: "박민혁", agent_img: "../img/narmi/agent2.png", N_Target_amount: 3000000, N_funding_achievement: 500000, D_day: 30, End_date: "2024-11-30", N_funding_progress: 16.7, N_head_count: 20},
    {id: 3, N_region: "천안시", N_city: "동남구", N_location: "사랑의 노인 복지센터", N_location_img: "../img/narmi/narmi3.png", agent_name: "최민영", agent_img: "../img/narmi/agent3.png", N_Target_amount: 1500000, N_funding_achievement: 150000, D_day: "45", End_date: "2025-01-01", N_funding_progress: 10, N_head_count: 30},
    {id: 4, N_region: "아산시", N_city: "탕정면", N_location: "탕정도서관", N_location_img: "../img/narmi/narmi4.png", agent_name: "김학철", agent_img: "../img/narmi/agent4.png", N_Target_amount: 2000000, N_funding_achievement: 400000, D_day: "30", End_date: "2024-12-01", N_funding_progress: 20, N_head_count: 2},
    {id: 5, N_region: "아산시", N_city: "배방읍", N_location: "배방읍 어린이 지원 센터", N_location_img: "../img/narmi/narmi5.png", agent_name: "한민숙", agent_img: "../img/narmi/agent5.png", N_Target_amount: 1500000, N_funding_achievement: 300000, D_day: "30", End_date: "2024-12-01", N_funding_progress: 20, N_head_count: 5},
];
