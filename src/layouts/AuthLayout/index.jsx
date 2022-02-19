import React from 'react';
import { Hero, Logo } from '../../assets/images';
import Container, { RightFrame, LeftFrame } from './styles';
import Aos from 'aos';

const Index = (props) => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container>
      <LeftFrame>
        <img src={Hero} alt='Hero' />
        <br />
        <h2>Welcome to</h2>
        <h1>CoinSwap Arena</h1>
      </LeftFrame>
      <RightFrame>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <h3 data-aos='fade-left' data-aos-duration='1000'>
          {props.title}
        </h3>
        <p data-aos='fade-left' data-aos-duration='1000'>
          {props.subtitle}
        </p>
        {props.content}
      </RightFrame>
    </Container>
  );
};

export default Index;
