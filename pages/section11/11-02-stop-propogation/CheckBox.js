export default function CheckBox() {
  const qqq2 = () => {
    alert("2번 클릭");
  };

  const qqq3 = () => {
    alert("3번 클릭");
  };

  return (
    <>
      <span onClick={qqq2}>22</span>
      <span style={{ margin: "10px" }} onClick={qqq3}>
        33
      </span>
    </>
  );
}
