import {
  Wrapper,
  DetailedIcon,
  DetailedPageIconArea,
  DetailedPageTopArea,
  UserInfoArea,
  UserProfileImage,
  DetailedPageTitle,
  CircleButton,
  ButtonBox,
} from "./PortfolioBoardDetail.styled";

export default function PortfolioBoardDetailUI(props) {
  console.log(props);
  return (
    <Wrapper>
      <DetailedPageTopArea>
        {/* 상단 영역 */}
        <UserInfoArea>
          {/* 좌측 */}
          <UserProfileImage src="/profileIcon.png" alt="프로필 아이콘" />
          <div>
            <h3>{props.writer}</h3>
            <p>{props.createdAt}</p>
          </div>
        </UserInfoArea>

        <DetailedPageIconArea>
          {/* 우측 */}
          <DetailedIcon src="/linkIcon.png" alt="링크 아이콘" />
          <DetailedIcon src="/locationIcon.png" alt="장소 아이콘" />
        </DetailedPageIconArea>
      </DetailedPageTopArea>

      <div>
        {/* 컨텐츠 영역 */}
        <DetailedPageTitle>{props.title}</DetailedPageTitle>
        <img src="/BoardImage.png" alt="작성자가 올린 이미지 " />
        <p>{props.contents}</p>
      </div>

      <div>
        {/* 유튜브 영역 */}
        <img src="/Youtube.png" alt="유튜브" />
      </div>

      <ButtonBox>
        {/* 좋아요 싫어요 영역  */}

        <CircleButton>{props.likeCount}</CircleButton>

        <CircleButton>{props.dislikeCount}</CircleButton>
      </ButtonBox>
    </Wrapper>
  );
}
