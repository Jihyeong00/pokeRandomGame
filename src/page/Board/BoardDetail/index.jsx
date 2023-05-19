import { useSearchParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PokeListAtom } from '../../../atom/pokeListAtom';
import { styled } from 'styled-components';
import { useState } from 'react';

const BoardDetail = () => {
  const [searchParam] = useSearchParams();
  const boardNumber = searchParam.get('boardNumber');
  const [lists, setLists] = useRecoilState(PokeListAtom);
  const selectList = lists.filter((list) => list.boardNumber === parseInt(boardNumber));
  const [inputState, setInputState] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    setLists((prevList) => {
      const copyList = [...prevList];
      let selectListIndex = copyList.findIndex(
        (list) => list.boardNumber === parseInt(boardNumber)
      );

      if (selectListIndex !== -1) {
        const selectList = copyList[selectListIndex];

        const newComments = {
          commentNumber: selectList.comments.length + 1,
          name: '이지형',
          comment: inputState,
        };

        const updatedList = {
          ...selectList,
          comments: [...selectList.comments, newComments],
        };

        copyList[selectListIndex] = updatedList;
      }
      e.target[0].value = '';
      return copyList;
    });
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.ListTitle>
          {selectList[0].title}
          <div style={{ fontSize: '16px', textAlign: 'right' }}>{selectList[0].name}</div>
        </S.ListTitle>
        <S.ListContent>{selectList[0].content}</S.ListContent>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.ListComments>
          <ul>
            {selectList[0].comments.map((comment) => (
              <S.CommentliList dataRole={comment.commentNumber}>
                <S.CommentName>{comment.name}</S.CommentName>
                <S.CommentContent>{comment.comment}</S.CommentContent>
              </S.CommentliList>
            ))}
          </ul>
          <S.CreateCommentForm onSubmit={onSubmit}>
            <S.CreateCommentLabel htmlFor="content">
              <S.CreateCommentInput
                id="content"
                type="text"
                onChange={(e) => setInputState(e.target.value)}
              />
            </S.CreateCommentLabel>
            {inputState.length}/500
            <S.SubmitButton>작성하기</S.SubmitButton>
          </S.CreateCommentForm>
        </S.ListComments>
      </S.Container>
    </S.Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 50%;
  background-color: white;
  margin: 10px;
  padding: 30px;
  padding-bottom: 60px;
`;

const ListTitle = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.pokeColors.labelGray}`};
  font-weight: bold;
  font-size: 24px;
  padding: 10px;
`;
const ListContent = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.pokeColors.labelGray}`};
  padding: 10px;
`;

const ListComments = styled.div`
  margin: 10px;
  /* background-color: rgba(255, 255, 240, 0.7); */
  border-radius: 12px;
  padding: 5px;
`;
const CommentTitle = styled.div`
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
`;

const CommentliList = styled.li`
  margin: 10px 0 0 10px;
  padding: 10px 0;
  border-top: ${({ theme }) => `1px solid ${theme.pokeColors.labelGray}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.pokeColors.labelGray}`};
`;

const CommentName = styled.div`
  margin-left: 4px;
  font-size: 14px;
  font-weight: bold;
`;

const CreateCommentInput = styled.textarea`
  outline: none;
  width: 100%;
  height: 100%;
`;

const CommentContent = styled.div`
  margin-left: 4px;
  font-size: 12px;
`;

const CreateCommentForm = styled.form`
  border: ${({ theme }) => `1px solid ${theme.pokeColors.labelGray}`};
  margin: 10px;
  border-radius: 4px;
  padding: 10px;
  text-align: right;
  font-size: 12px;
`;

const CreateCommentLabel = styled.label`
  display: block;
`;

const SubmitButton = styled.button`
  margin: 10px 0 0 10px;
  border: ${({ theme }) => `1px solid ${theme.pokeColors.labelGray}`};
  padding: 3px;
  font-size: 12px;
`;

const S = {
  Wrapper,
  Container,
  ListTitle,
  ListContent,
  ListComments,
  CommentTitle,
  CommentliList,
  CommentName,
  CommentContent,
  CreateCommentForm,
  CreateCommentInput,
  CreateCommentLabel,
  SubmitButton,
};
export default BoardDetail;
