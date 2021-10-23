import styled from 'styled-components';

type TextFieldProps = {
  value: string;
  onChange: (event: React.ChangeEvent<{ value: string }>) => void;
  style?: React.CSSProperties;
};

const TextField = ({ value, onChange, style }: TextFieldProps) => {
  return <Input type="text" value={value} onChange={onChange} style={style} />;
};

const Input = styled.input`
  border: 1px solid gainsboro;
  border-radius: 10px;
  height: 40px;
  padding: 0 10px;
  outline: none;
  color: dimgrey;
`;

export default TextField;
