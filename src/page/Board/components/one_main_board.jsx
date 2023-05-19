import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const OneMainBoard = ({ data }) => {
  const { boardNumber, title, name, content } = { ...data };
  return (
    <S.Onelist>
      <Link to={`/board/detail?boardNumber=${boardNumber}`}>
        <S.Number>{boardNumber}</S.Number>
        <S.NameCard />
        <S.TitleBox>{title}</S.TitleBox>
        <S.NameBox>{name}</S.NameBox>
        <S.ContentBox>{content}</S.ContentBox>
      </Link>
    </S.Onelist>
  );
};

export default OneMainBoard;

const Onelist = styled.li`
  position: relative;
  border: 1px solid black;
  padding-bottom: 10px;
`;

const TitleBox = styled.div`
  text-align: center;
  top: 0;
`;
const NameBox = styled.div`
  text-align: right;
  margin-right: 10px;
`;
const ContentBox = styled.div`
  bottom: 0;
  height: 100px;
  padding: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  font-size: 14px;
`;
const NameCard = styled.div`
  height: 70px;
`;
const Number = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0.5px solid black;
  padding: 0 10px 0 10px;
`;

const S = {
  TitleBox,
  NameBox,
  ContentBox,
  NameCard,
  Onelist,
  Number,
};
