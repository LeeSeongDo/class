// document

export default function DocumentPage() {
  let ClickEvent = () => {
    let qqq = document.getElementById("counter");
    let counter = Number(qqq.innerText) + 1;
    document.getElementById("counter").innerText = counter;
  };

  return (
    <>
      <div id="counter">0</div>
      <button onClick={ClickEvent}>클릭 이벤트</button>
    </>
  );
}
