import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Button from '../button/button';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const moveDocument = () => {
    navigate('/document');
    console.log('버튼눌림');
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.text.value);
    navigate(`/keyword/?keyword=${e.target.text.value}`);
  };

  const [isLogin, setIsLogin] = useState(false);
  return (
    <S.HEAD>
      <nav>
        <div className="flex">
          <div className="p-2 pl-10">
            <img
              src="/assets/img/Pokémon_(2023)_Official_Japanese_Logo.png"
              alt="포켓몬스터_로고"
              width={300}
            />
          </div>
          <div className="w-full flex flex-col p-3 mr-7">
            <div className="flex flex-row-reverse ">
              {!isLogin ? (
                <>
                  <Button b_round={2}>회원가입</Button>
                  <Button b_round={2} m_right={10}>
                    로그인
                  </Button>
                </>
              ) : (
                <div>님 환영합니다</div>
              )}
            </div>
            <div className="flex justify-between pt-1">
              <div>
                <Button b_round={2} m_right={10} className="bg-slate-400 " onClick={moveDocument}>
                  도감
                </Button>
                <Button b_round={2} className="bg-slate-400 ">
                  게임
                </Button>
              </div>
              <form onSubmit={onSubmit}>
                <div className="bg-white rounded overflow-hidden">
                  <input
                    type="text"
                    name="text"
                    id="searchPoke"
                    className="ml-2 border-none outline-none"
                  />
                  <Button b_round={0} className="bg-slate-400" m_right={0}>
                    도감번호 검색
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </S.HEAD>
  );
};

export default Header;

const HEAD = styled.header`
  background-color: ${({ theme }) => theme.pokeColors.ooh2};
  border-bottom: 5px solid black;
  position: absolute;
  width: 100%;
  z-index: 200;
`;

const S = {
  HEAD,
};
