import {FlexBox} from "../../../styles/01-portfolio";

export default function Portfolio() {
    return (
        <FlexBox>
            <h1>게시물 등록</h1>

            {/* 첫번째 flex박스 */}
            <div>
                <div>
                    <span>작성자</span>
                    <input type="text" />
                </div>

                <div>
                    <span>작성자</span>
                    <input type="text" />
                </div>
            </div>

            {/* 두번째 flex 박스 */}
            <div>
                <span>제목</span>
                <input type="text" />
            </div>

            {/* 세번째 flex 박스 */}
            <div>
                <span>내용</span>
                <input type="text" />
            </div>

            {/* 네번째 flex 박스 */}
            <div>
                <span>주소</span>
                {/* 우편번호 검색 div */}
                <div>
                    <input type="number" />
                    <button>우편번호 검색</button>
                </div>
                <input type="text" />
                <input type="text" />
            </div>

            {/* 다섯번째 flex 박스 */}
            <div>
                <span>유튜브</span>
                <input type="text" />
            </div>

            {/* 여섯번째 flex 박스 */}
            <div>
                <span>사진 첨부</span>
                <div>
                    <button>Upload</button>
                    <button>Upload</button>
                    <button>Upload</button>
                </div> 
            </div>
            {/* 일곱번째 flex 박스 */}
            <div>
                <span>메인 설정</span>
                <div>
                    <input type="radio" name="one"/>유튜브
                    <input type="radio" name="one"/>사진
                </div>
            </div>
            {/* 마지막 flex 박스 */}
            <div>
                <button>등록하기</button>
            </div>
        </FlexBox>
    )
}