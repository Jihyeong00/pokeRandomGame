import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import * as zod from 'zod';
import { useRecoilState } from 'recoil';
import { PokeListAtom } from '../../../atom/pokeListAtom';

const AddForm = ({ onClick }) => {
  const schema = zod.object({
    title: zod
      .string()
      .nonempty('제목은 반드시 필요합니다')
      .max(20, '제목은 20글자 이하여야 합니다.'),
    content: zod
      .string()
      .nonempty('콘텐츠 내용은 반드시 필요합니다.')
      .max(1000, '글은 1000글자 이하여야 합니다.'),
  });

  const [state, setState] = useRecoilState(PokeListAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    const newData = {
      boardNumber: state.length + 1,
      title: data.title,
      content: data.content,
      name: '이지형',
    };

    setState((prev) => {
      return [...prev, newData];
    });

    onClick();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitData)}>
        <S.FormTitle htmlFor="title">
          <S.inputTitle
            type="text"
            name="title"
            id="title"
            placeholder="글 작성"
            {...register('title')}
          />
        </S.FormTitle>
        {errors.title && <span>{errors.title.message}</span>}
        <S.FormTitle htmlFor="content">
          <S.inputContent
            type="text"
            name=""
            id="content"
            placeholder="내용 작성"
            {...register('content')}
          />
        </S.FormTitle>
        {errors.content && <span>{errors.content.message}</span>}
        <div style={{ textAlign: 'right' }}>
          <S.FormButton>추가하기</S.FormButton>
        </div>
      </form>
    </>
  );
};

export default AddForm;

const FormTitle = styled.label`
  display: block;
  width: 100%;
  margin: 5px;
  border: 10px;
  border: 1px solid #e5e8eb;
  padding: 15px;
`;

const inputTitle = styled.input`
  outline: none;
  width: 100%;
`;
const inputContent = styled.textarea`
  outline: none;
  width: 100%;
  height: 300px;
`;

const FormButton = styled.button`
  background-color: ${({ theme }) => theme.pokeColors.blue};
  color: ${({ theme }) => theme.pokeColors.white};
  margin: 2px;
  padding: 2px;
  border-radius: 4px;
`;

const S = {
  FormTitle,
  FormButton,
  inputTitle,
  inputContent,
};
