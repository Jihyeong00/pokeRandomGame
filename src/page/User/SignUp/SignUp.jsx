import React from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';

const signUpSchema = zod
  .object({
    email: zod.string().nonempty('이메일 반드시 필요합니다.').email('이메일 형식에 맞지 않습니다.'),
    password: zod
      .string()
      .nonempty('비밀번호는 반드시 필요합니다.')
      .min(5, '최소 글자수 미달입니다.')
      .max(20, '최대 글자수 초과입니다.'),
    confirmPassword: zod
      .string()
      .nonempty('비밀번호를 한번 더 입력해주세요.')
      .min(5, '최소 글자수 미달입니다.')
      .max(20, '최대 글자수 초과입니다.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
  });

  const submitData = (data) => {
    console.log('IT Worked', data);
  };

  return (
    <>
      <ToastContainer />
      <LoginForm onSubmit={handleSubmit(submitData)} action="">
        <LabelForm htmlFor="email">
          <LoginInput
            id="email"
            type="text"
            {...register('email')}
            placeholder="PokeId (아이디 또는 이메일)"
          />
        </LabelForm>
        {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        <LabelForm htmlFor="password">
          <LoginInput
            id="password"
            type="password"
            {...register('password')}
            placeholder="비밀번호"
          />
        </LabelForm>
        {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
        <LabelForm htmlFor="confirmPassword">
          <LoginInput
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            placeholder="비밀번호확인"
          />
        </LabelForm>
        {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>}
        <SubmitBtn>회원가입</SubmitBtn>
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

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SubmitBtn = styled.button`
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
const ErrorMsg = styled.div`
  color: red;
  text-align: center;
`;
