import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render(): JSX.Element {
    // 여기에 화면에 보여질 부분을 적어줍니다.
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>
      </div>
    );
  }
}
