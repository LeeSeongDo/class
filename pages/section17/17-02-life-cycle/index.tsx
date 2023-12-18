import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount(): void {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate(): void {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount(): void {
    console.log("사라지기 전에 실행");
    // 주로 채팅방 나갈 때 사용.
  }

  onClickCountUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.componentDidMount();
  };

  onClickMove = (): void => {
    Router.push("/");
  };

  render(): JSX.Element {
    // 여기에 화면에 보여질 부분을 적어줍니다.
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
