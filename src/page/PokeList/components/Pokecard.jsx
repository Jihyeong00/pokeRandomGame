import { styled } from 'styled-components';
import { useKeyWordMorePokeInfo, usePokeInfoToKeyWord } from '../../../hooks/queries/getPokeQuery';

const PokeCard = ({ poke }) => {
  const res = usePokeInfoToKeyWord(poke.name);
  const res2 = useKeyWordMorePokeInfo(poke.name);
  if (!res.isSuccess) return;

  const data = res.data.data;
  const { name, types, sprites } = data;

  if (!res2.isSuccess) return;

  const data2 = res2.data.data;
  const genera = data2.genera.filter((data) => data.language.name === 'ko')[0].genus;
  const korName = data2.names.filter((data) => data.language.name === 'ko')[0].name;

  return (
    <li className="flex justify-center items-center flex-col relative">
      <Number>No.{data2.id}</Number>
      <S.GeneraDiv className="rounded-lg font-bold text-xs p-1" type={types[0].type.name}>
        {genera}
      </S.GeneraDiv>
      <S.Container className="flex justify-center items-center flex-col">
        <div>
          <img src={sprites.front_default} alt="No_image" width={135} />
        </div>
        <div className="flex gap-1">
          {types.map((type) => (
            <S.TypeBox type={type}>{type.type.name}</S.TypeBox>
          ))}
        </div>
        <div className="capitalize font-bold font-sans">
          {korName !== undefined ? korName : name}
        </div>
      </S.Container>
      <S.BackWhite />
    </li>
  );
};

export default PokeCard;

const GeneraDiv = styled.div`
  color: ${({ type, theme }) => theme.typeColors[type].color};
  background: ${({ type, theme }) => theme.typeColors[type].background};
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 400;
`;

const Number = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.pokeColors.white};
  border: 1px solid grey;
  top: 10px;
  right: 10px;
  z-index: 400;
  padding: 0 10px;
  font-size: 12px;
`;

const BackWhite = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;
const Container = styled.div`
  position: relative;
  z-index: 20;
`;

const TypeBox = styled.div`
  color: ${({ type, theme }) => theme.typeColors[type.type.name].color};
  background: ${({ type, theme }) => theme.typeColors[type.type.name].background};
  border-radius: 4px;
  padding: 4px;
  font-size: 12px;
  margin: 0px 4px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-transform: capitalize;
`;
const S = {
  TypeBox,
  Container,
  BackWhite,
  Number,
  GeneraDiv,
};
