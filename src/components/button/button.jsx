import { styled } from 'styled-components';

const Button = ({ b_round, children, m_left, m_right, onClick }) => {
  return (
    <BUTTON b_round={b_round} onClick={onClick} m_right={m_right}>
      {children}
    </BUTTON>
  );
};

export default Button;

const BUTTON = styled.button`
  background-color: ${({ theme }) => theme.pokeColors.blue};
  padding: 5px;
  color: ${({ theme }) => theme.pokeColors.white};
  border-radius: ${({ b_round }) => `${b_round}px`};
  margin-right: ${({ m_right }) => `${m_right}px`};
  margin-left: ${({ m_left }) => `${m_left}px`};
`;
