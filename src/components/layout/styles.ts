import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 32px;
  color: #FFF;

  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const TextBox = styled.div`
  background: ${(props) => props.theme.colors.backgound};
  color: ${(props) => props.theme.colors.text};

  border: 1px solid ${(props) => props.theme.colors.primary};

  width: 850px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  margin-bottom: 20px;

  span {
    font-size: 30px;
  }
`
