import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { PokeListAtom } from '../../atom/pokeListAtom';
import data from '../../model/dummyData';
import { useState } from 'react';
import MainBoard from './components/MainBoard';
import AddForm from './components/AddForm';

const Board = () => {
  const [pokeItems, setPokeItems] = useRecoilState(PokeListAtom);
  // const state = useRecoilState('값') 값만 사용하는 경우
  // const setState = useSetRecoilState('값') 수정만 필요한 경우
  setPokeItems(data);

  // 파생 데이터인 셀렉터를 이용해보세요
  // const TotalQuanTity 총 리스트의 길이

  // 파생 데이터인 셀렉터를 이용해보세요
  // const TotalQuanTity

  //   const itemsLength = useRecoilValue(TotalListLength);
  const [isCreateMode, setIsCreateMode] = useState(false);
  const changeCreateForm = () => {
    setIsCreateMode(true);
  };
  const changeWatchForm = () => {
    setIsCreateMode(false);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerHeader>
          <S.CreateBtn onClick={changeCreateForm}>게시글 작성</S.CreateBtn>
          <S.CreateBtn onClick={changeWatchForm}>게시글 보기</S.CreateBtn>
        </S.ContainerHeader>
        <S.ContainerBody>
          {!isCreateMode ? (
            <MainBoard onClick={changeCreateForm} pokeItems={pokeItems} />
          ) : (
            <AddForm state={pokeItems} setState={setPokeItems} onClick={changeWatchForm} />
          )}
        </S.ContainerBody>
      </S.Container>
    </S.Wrapper>
  );
};

export default Board;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 90%;
  background-color: white;
  margin: 10px;
  padding: 10px;
  padding-bottom: 60px;
`;

const ContainerHeader = styled.header`
  text-align: right;
`;

const CreateBtn = styled.button`
  margin: 15px;
  padding: 2px;
  color: ${({ theme }) => theme.pokeColors.white};
  background-color: ${({ theme }) => theme.pokeColors.blue};
  border-radius: 4px;
`;
const ContainerBody = styled.div`
  padding: 15px;
`;

const ContainerList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
`;

const S = {
  Wrapper,
  Container,
  ContainerHeader,
  CreateBtn,
  ContainerBody,
  ContainerList,
};
