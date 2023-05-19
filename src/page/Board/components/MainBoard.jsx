import { styled } from 'styled-components';
import EmptyPage from './EmptyPage';
import OneMainBoard from './one_main_board';

const MainBoard = ({ pokeItems }) => {
  return (
    <>
      {pokeItems !== undefined && pokeItems.length > 0 ? (
        <S.ContainerList>
          {pokeItems.map((List) => (
            <OneMainBoard data={List} />
          ))}
        </S.ContainerList>
      ) : (
        <EmptyPage />
      )}
    </>
  );
};
const ContainerList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
`;

const S = {
  ContainerList,
};
export default MainBoard;
