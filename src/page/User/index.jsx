import { useState } from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { styled } from 'styled-components';

const SignPage = () => {
  const [isFormLogin, setIsFormLogin] = useState(false);

  const changeLoginForm = () => {
    setIsFormLogin(false);
  };
  const changeSignUpForm = () => {
    setIsFormLogin(true);
  };
  return (
    <S.Container>
      <S.FormBox>
        <S.InputBox>
          <div className="m-auto pt-5 pb-5">
            <img
              src="/assets/img/Pokémon_(2023)_Official_Japanese_Logo.png"
              alt="포켓몬스터_로고"
              width={200}
            />
          </div>
          <S.ChangeForm>{!isFormLogin ? <SignIn /> : <SignUp />}</S.ChangeForm>
          <S.ChangeBtn>
            <S.ChangeBtnForm onClick={changeLoginForm}>로그인</S.ChangeBtnForm>
            <span>/</span>
            <S.ChangeBtnForm onClick={changeSignUpForm}>회원가입</S.ChangeBtnForm>
          </S.ChangeBtn>
        </S.InputBox>
      </S.FormBox>
    </S.Container>
  );
};

export default SignPage;

const Container = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  height: calc(100vh - 100px);
  overflow: hidden;
`;

const FormBox = styled.div`
  position: relative;
  width: 30%;
  margin: 0 auto;
  margin-top: 100px;
  padding-bottom: 50px;
`;

const InputBox = styled.div`
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
`;

const ChangeBtn = styled.div`
  margin-left: 10px;
  display: flex;
  gap: 5px;
`;

const ChangeBtnForm = styled.div`
  cursor: pointer;
`;
const ChangeForm = styled.div``;

const S = {
  ChangeForm,
  ChangeBtn,
  InputBox,
  FormBox,
  Container,
  ChangeBtnForm,
};
