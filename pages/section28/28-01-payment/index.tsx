
declare const window: typeof globalThis & {
    IMP: any;
}

export default function PaymentPage(): JSX.Element {    
    
    const onClickPayment = (): void => {
        const IMP = window.IMP;
        IMP.init("imp55075685")
        
        IMP.request_pay({
            pg: "nictest00m",
            pay_method: "card",
            //merchant_uid: "결제 번호",
            name: "아이리버 무선 마우스 외 1개",
            amount: 10000,
            buyer_email: "dltjdgns3z@gmail.com",
            buyer_name: "홍길동",
            buyer_tel: "010-4242-4242",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181",
            m_redirect_url : "/"
                
        }, function (rsp) { // callback
                        if (rsp.success) {
                            alert('결제가 성공했습니다.');
                            // 결제 성공 로직
                        } else {
                            console.log(rsp)
                            alert('결제에 실패했습니다.');
                            // 결제 실패 로직
                        }
        });

    }
    

    return (
        <>
            <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
            
            <div>
                <button onClick={onClickPayment}>결제하기</button>
            </div>
        </>
    )
}