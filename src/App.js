import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post";

const ContainerBox = styled.div`
  display: grid;
  width: 900px;
  border: 1px solid blue;
  text-align: center;
  margin: 10px auto;
`;

class App extends Component {
  state = {
    posts: [],
  };

  // API 호출 함수 -당연히 바로 디비 접근 못함.
  getPosts = async () => {
    let response = await fetch("http://localhost:8080/post"); //기본값이 get요청 방식임.
    console.log(response);
    let result = await response.json(); //파싱하기전에 넣지말고 다하길 기다렸다 넣어 .text
    console.log(result);
    this.setState({
      posts: result,
    });
  };

  // 최초에 그림이 그려질 때 실행되는 함수 (생명주기)
  //dom트리 설계다하고 그림 그리기 직전에 getPosts호출 된다.
  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { posts } = this.state; //구조 분할 할당 const라서 한번만됨.
    return (
      <ContainerBox>
        {posts.map((post) => (
          <Post id={post.id} title={post.title} content={post.comtent} />
        ))}
      </ContainerBox>
    );
  }
}

export default App;
