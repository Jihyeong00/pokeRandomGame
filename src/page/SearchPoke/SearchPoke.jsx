import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useKeyWordMorePokeInfo, usePokeInfoToKeyWord } from '../../hooks/queries/getPokeQuery';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const SearchPoke = () => {
  const [searchParams, setSearchParmas] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const res1 = useKeyWordMorePokeInfo(keyword);
  const res2 = usePokeInfoToKeyWord(keyword);

  if (!res1.isSuccess) return <div>에러페이지</div>;
  if (!res2.isSuccess) return <div>에러페이지</div>;
  if (res2.isSuccess) {
    const data1 = res1.data.data;
    // 한글
    const data2 = res2.data.data;
    // 이미지
    console.log(data1);
    console.log(data2);
    const korName = data1.names.filter((data) => data.language.name === 'ko')[0].name;
    const { back_default, back_shiny, front_default, front_shiny } = data2.sprites;

    const korFlavorText = data1.flavor_text_entries.filter((data) => data.language.name === 'ko');
    const indexNumber = data2.id;

    const prevNumber = indexNumber === 1 ? 1 : indexNumber - 1;
    const nextNumber = indexNumber + 1;
    return (
      <S.Container>
        <S.Wrapper>
          <S.Item>
            <MdArrowBackIosNew
              size={50}
              style={{ position: 'absolute', top: '230px', cursor: 'pointer' }}
              onClick={() => {
                setSearchParmas({ keyword: prevNumber });
              }}
            />
            <MdArrowForwardIos
              size={50}
              style={{ position: 'absolute', top: '230px', right: '0', cursor: 'pointer' }}
              onClick={() => {
                setSearchParmas({ keyword: nextNumber });
              }}
            />
            <S.Itembox>
              <S.TagName type={data2.types[0].type.name}>{korName}</S.TagName>
              <S.TagImg>
                <thead>
                  <tr>
                    <S.Td>
                      <img src={front_default} alt={korName} width={200} />
                    </S.Td>
                    <S.Td>
                      <img src={back_default} alt={korName} width={200} />
                    </S.Td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <S.Td>앞모습</S.Td>
                    <S.Td>뒷모습</S.Td>
                  </tr>
                  <tr>
                    <S.Td>
                      <img src={front_shiny} alt={korName} width={200} />
                    </S.Td>
                    <S.Td>
                      <img src={back_shiny} alt={korName} width={200} />
                    </S.Td>
                  </tr>
                  <tr>
                    <S.Td>이로치 앞모습</S.Td>
                    <S.Td>이로치 뒷모습</S.Td>
                  </tr>
                </tbody>
              </S.TagImg>
            </S.Itembox>
            <S.VersionBox>
              {korFlavorText.map((data) => {
                return (
                  <div key={Math.floor(Math.random() * 100000)}>
                    <S.Version>{data.version.name}</S.Version>
                    <S.VersionText>{data.flavor_text}</S.VersionText>
                    <div></div>
                  </div>
                );
              })}
            </S.VersionBox>
          </S.Item>
          <S.BackGround />
        </S.Wrapper>
      </S.Container>
    );
  }
};

export default SearchPoke;

const VersionBox = styled.div``;

const Version = styled.div`
  width: 100%;
  font-weight: bold;
  margin: 0 auto;
`;

const VersionText = styled.div`
  margin-bottom: 5px;
`;

const Container = styled.div`
  position: relative;
  width: 1040px;
  padding: 20px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackGround = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 0;
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  position: relative;
  z-index: 10;
  padding: 10px;
`;

const Td = styled.td`
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
`;

const TagName = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 15px;
  text-align: center;
  width: 50%;
  color: ${({ type, theme }) => theme.typeColors[type].color};
  background: ${({ type, theme }) => theme.typeColors[type].background};
`;

const TagImg = styled.table`
  background-color: white;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const Itembox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const S = {
  Container,
  Wrapper,
  BackGround,
  Item,
  Td,
  TagName,
  TagImg,
  Itembox,
  Version,
  VersionText,
  VersionBox,
};
