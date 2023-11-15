import {BigInputStyle, FinalButton, ColumnBox, FlexBox, FontStyle2, RadioButton, LongColumnBox, MediumInputStyle, nputStyle, RowBox, RowBox2, SearchButton, SmallInputStyle, FontStyle3} from "../../../styles/01-portfolio";

export default function Portfolio() {
    return (
        <FlexBox>
            <h1>게시물 등록</h1>

            {/* 첫번째 flex박스 */}
            <RowBox>
                <ColumnBox>
                    <FontStyle2>작성자</FontStyle2>
                    <MediumInputStyle type="text" placeholder="이름을 적어주세요."/>
                </ColumnBox>

                <ColumnBox>
                    <FontStyle2>비밀번호</FontStyle2>
                    <MediumInputStyle type="text" placeholder="비밀번호를 입력해주세요"/>
                </ColumnBox>
            </RowBox>

            {/* 두번째 flex 박스 */}
            <LongColumnBox>
                <FontStyle2>제목</FontStyle2>
                <MediumInputStyle type="text" placeholder="제목을 입력해주세요" />
            </LongColumnBox>

            {/* 세번째 flex 박스 */}
            <LongColumnBox>
                <FontStyle2>내용</FontStyle2>
                <BigInputStyle type="text" placeholder="내용을 입력해주세요."/>
            </LongColumnBox>

            {/* 네번째 flex 박스 */}
            <LongColumnBox>
                <FontStyle2>주소</FontStyle2>
                {/* 우편번호 검색 div */}
                <RowBox2>
                    <SmallInputStyle type="text" placeholder="07250" />
                    <SearchButton>우편번호 검색</SearchButton>
                </RowBox2>
                <MediumInputStyle type="text" />
                <MediumInputStyle type="text" />
            </LongColumnBox>

            {/* 다섯번째 flex 박스 */}
            <LongColumnBox>
                <FontStyle2>유튜브</FontStyle2>
                <MediumInputStyle type="text" />
            </LongColumnBox>

            {/* 여섯번째 flex 박스 */}
            <LongColumnBox>
                <FontStyle2>사진 첨부</FontStyle2>
                <RowBox2>
                    <input type="file"/>
                    <button>Upload</button>
                    <button>Upload</button>
                </RowBox2> 
            </LongColumnBox>
            {/* 일곱번째 flex 박스 */}
            <LongColumnBox>
                <FontStyle2>메인 설정</FontStyle2>
                <RowBox2>
                    <RadioButton type="radio" name="one"/>
                    <FontStyle3>유튜브</FontStyle3>
                    <RadioButton type="radio" name="one"/>
                    <FontStyle2>사진</FontStyle2>
                </RowBox2>
            </LongColumnBox>
            {/* 마지막 flex 박스 */}
            <div>
                <FinalButton>등록하기</FinalButton>
            </div>
        </FlexBox>
    )
}