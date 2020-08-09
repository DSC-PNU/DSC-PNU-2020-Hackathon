import React from "react";
import styled from "styled-components";

const UserInfoDiv = styled.div`
  & > div {
    margin-left: 20px;
    width: 30%;
    min-width: 200px;
    font-size: 18px;
  }
`;
const UserInfo = ({ userInfo }) => {
  return (
    <UserInfoDiv>
      <div>{userInfo.userName}님 환영합니다!</div>
    </UserInfoDiv>
  );
};

export default UserInfo;
