
declare const window: typeof globalThis & {
    IMP: any;
}

export default function PaymentPage(): JSX.Element {    
    
    function OpenPage() {
        const IMP = window.IMP;
        IMP.init('imp55075685');

        IMP.request_pay({
            pg : 'tosspayments',
            pay_method : 'card',
            // merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
            name : '주문명:결제테스트',
            amount : 14000,
            buyer_email : 'iamport@siot.do',
            buyer_name : '구매자이름',
            buyer_tel : '010-1234-5678',
            buyer_addr : '서울특별시 강남구 삼성동',
            buyer_postcode : '123-456',
            m_redirect_url : '{모바일에서 결제 완료 후 리디렉션 될 URL}', // 예: https://www.my-service.com/payments/complete/mobile
            niceMobileV2 : true // 신규 모바일 버전 적용 시 설정
        }, function(rsp) { // callback 로직
            //* ...중략 (README 파일에서 상세 샘플코드를 확인하세요)... *//
            if(rsp.success) {
                console.log(rsp)
            } else {
                console.log(rsp)
            }
        });

    }


    return (
        <>
           <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
            <script>
                
            </script>    


            <div style={{width: 300, height: 200, border: "1px solid black", borderRadius: "10px", margin: "10px"}}>
                <p>아이리버 무선 마우스 외 1개</p>
                <button onClick={OpenPage} >결제하기</button>
            </div>
        </>
    )
}
