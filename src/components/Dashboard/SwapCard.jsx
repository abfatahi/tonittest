import React from 'react';
import styled from 'styled-components';
import { InputGroup } from '../../reusables';
import { BsArrowDown } from 'react-icons/bs';

const Index = () => {
  return (
    <Container>
      <h4>Swap</h4>
      <InputGroup
        placeholder='0.0'
        selectPlaceholder='ETH'
        data={[{ value: 'ETH' }]}
      />
      <InputGroup
        placeholder='0.0'
        selectPlaceholder='Select token'
        data={[{ value: 'ETH' }]}
      />
      <SwapButton>
        <BsArrowDown />
      </SwapButton>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 25px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    color: #e24307;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const SwapButton = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 50);
  z-index: 70;
  padding: 0.5em;
  border-radius: 10px;
  border: 3px solid #fff;
  background: #f7f8fa;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`;
