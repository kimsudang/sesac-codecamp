"use client";

import { Component } from "react";

export default class ClassCounterPage extends Component {
  //state 작성
  state = { count: 1 };

  // 해결방법1: 화살표 함수
  onClickCountUP = () => {
    // state를 선언했으니 setState 사용해줘야함 => 컴포넌트 제공 함수
    this.setState({
      count: this.state.count + 1,
    });
  };

  // 화면에 그려지는 요소 보여주는, 컴포넌트 제공 함수
  render() {
    return (
      <>
        <div>카운트: {this.state.count}</div>
        {/* 해결방법2: 로직단위 this 연결 (.bind) */}
        <button onClick={this.onClickCountUP.bind(this)}>카운트 올리는 버튼</button>
      </>
    );
  }
}
