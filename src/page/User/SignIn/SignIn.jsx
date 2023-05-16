import React from 'react';
import InputBox from '../components/input';
import { styled } from 'styled-components';

export default function SignIn() {
  return (
    <>
      <LoginForm action="">
        <LabelForm htmlFor="">
          <LoginInput type="text" placeholder="PokeId (아이디 또는 이메일)" />
        </LabelForm>
        <LabelForm htmlFor="">
          <LoginInput type="password" placeholder="비밀번호" />
        </LabelForm>
        <SubmitBtn>로그인</SubmitBtn>
      </LoginForm>
    </>
  );
}

const LabelForm = styled.label`
  border: 1px solid #e5e8eb;
  margin: 10px;
  padding: 10px;
`;

const LoginInput = styled.input`
  width: 100%;
  outline: none;
  font-size: 20px;
`;

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SubmitBtn = styled.div`
  margin: 10px;
  background-color: #000;
  color: #fff;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;
