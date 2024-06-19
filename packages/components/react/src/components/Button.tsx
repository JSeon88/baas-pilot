import styled from 'styled-components';

const SButton = styled.button`
  background-color: pink;
`;

const Button = () => {
  const handleBtn = () => {
    alert('button clicked');
  };
  return (
    <>
      <SButton onClick={handleBtn}>react component button</SButton>
    </>
  );
};

export default Button;
