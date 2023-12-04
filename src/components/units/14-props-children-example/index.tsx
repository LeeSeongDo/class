export default function Example(props) {
  return (
    <div>
      <div>안녕하세요 영희입니다</div>
      <div>안녕하세요 맹구입니다</div>
      <div>{props.children}</div>
      <div>안녕하세요 {props.name}이 입니다.</div>
    </div>
  );
}
