import { useRouter } from "next/router"
import { useEffect } from "react";

const saveData = []; 

// 먼저 메모리에 캐싱을 해놓고 페이지를 이동하면 데이터를 불러오는 방식.

export default function ImagePreloadPage(): JSX.Element {
    
    const router = useRouter();

    useEffect(() => {
        const img = new Image(); // 이러면 img 태그로 만들어집니다
        img.src = "https://i.namu.wiki/i/vNQW1biNNsq6NbMIHv9Y3OmFvTxmUrWuRS6cmbblOrXZEFNGIp11NTPDZaVPL_fWu0-Is-qz3C6GEgse19HI-A.webp" // 여기에 이미지 주소를 넣습니다.
        img.onload = () => {
            saveData.push(img); // qqq는 데이터를 보관하는 용도로 사용됩니다.
        }
    }, [])

    const onClickMove = (): void => {
        router.push("/section31/31-09-image-preload-moved")
    }

    return <button onClick={onClickMove}>페이지 이동하기</button>
}