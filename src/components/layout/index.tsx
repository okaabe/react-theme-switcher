import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, TextBox } from './styles'

interface Props {
  toggleTheme(): void;
}


const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <TextBox>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit</span>
      </TextBox>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        width={70}
        height={30}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;