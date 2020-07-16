import React from "react";
import styled, { css } from "styled-components";

const PostBox = styled.div`
  border: 1px solid red;
  text-align: center;
  height: 80px;
  margin: 10px;
`;

function Post(props) {
  //Object로 넘겨 받을 수 있어요!
  const { id, title, content } = props; //구조 분할 할당(오브젝트, 컬렉션 다 가능) - jsx문법
  return (
    <PostBox>
      <div>번호 : {id}</div>
      <div>제목 : {title}</div>
      <div>내용 : {content}</div>
    </PostBox>
  );
}

export default Post;
