import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Button from '../button/button';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const moveDocument = () => {
    navigate('/document');
  };
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/keyword/?keyword=${e.target.text.value}`);
    e.target.text.value = '';
  };

  const [isLogin, setIsLogin] = useState(false);
  return (
    <S.HEAD>
      <nav>
        <div className="flex">
          <div
            onClick={() => {
              navigate('/');
            }}
            className="p-2 pl-10"
          >
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
                  <Button
                    onClick={() => {
                      navigate('/sign');
                    }}
                    b_round={2}
                  >
                    로그인
                  </Button>
                  <NotLogin>현재 로그인이 되지 않은 상태입니다.</NotLogin>
                </>
              ) : (
                <div>님 환영합니다</div>
              )}
            </div>
            <div className="flex justify-between pt-1">
              <div>
                <Button
                  b_round={2}
                  m_right={10}
                  className="bg-slate-400 "
                  onClick={() => navigate('/board')}
                >
                  자유게시판
                </Button>
                <Button
                  b_round={2}
                  m_right={10}
                  className="bg-slate-400 "
                  onClick={() => navigate('/document')}
                >
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

const NotLogin = styled.div`
  line-height: 34px;
  margin-right: 10px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const S = {
  HEAD,
  NotLogin,
};
