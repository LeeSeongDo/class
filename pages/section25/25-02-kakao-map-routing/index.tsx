// 카카오 맵 라우팅
import Link from "next/link";
import { useRouter } from "next/router";

export default function kakaoMapPage(): JSX.Element {
  
    const router = useRouter();

    const onClickMove = (): void => {
        void router.push("/section25/25-02-kakao-map-routing-moved");
    }
  
    return (
        <>
             
            <button onClick={onClickMove}>페이지 이동하기!</button>

            {/* 매 페이지를 새로 다운로드 받으므로 SPA 사용 불가. */}
            <a href="/section25/25-02-kakao-map-routing-moved">페이지 이동하기</a>

            {/* next에서 제공하는 a태그 이므로, SPA 활용 가능 + <a>를 써서 검색 좋아짐 */}
            <Link href="/section25/25-02-kakao-map-routing-moved">
                <a>페이지 이동하기!</a>   
            </Link>
        </>
    )
}