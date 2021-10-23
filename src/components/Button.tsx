import styled from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Button = ({ children, onClick, style }: ButtonProps) => {
  return (
    <Container onClick={onClick} style={style}>
      {children}
    </Container>
  );
};

const Container = styled.a`
  text-decoration: none;
  border-radius: 10px;
  background: dodgerblue;
  color: white;
  height: 30px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 10px;
  user-select: none;

  &:hover {
    background: royalblue;
  }

  &:active {
    background: dodgerblue;
  }
`;

export default Button;
