import React from 'react';
import styled from 'styled-components';
import { Button, InputGroup } from '../../reusables';
import { BsArrowDown } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { accountSelector, toggleSwap } from '../../redux/reducers/account';

const Index = () => {
  const dispatch = useDispatch();
  const { swap } = useSelector(accountSelector);
  return (
    <Container isSwap={swap}>
      <h4>Swap</h4>
      <div className='input__group'>
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
        <SwapButton onClick={() => dispatch(toggleSwap())}>
          <BsArrowDown className='icon' />
        </SwapButton>
      </div>
      <Button text='Connect Wallet' danger full />
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

  .input__group {
    position: relative;
    display: flex;
    flex-direction: ${({ isSwap }) => (isSwap ? 'column-reverse' : 'column')};
    gap: 0.5rem;
  }
`;

const SwapButton = styled.div`
  position: absolute;
  left: 50%;
  top: 37.5%;
  transform: translate(-50%, 50);
  z-index: 70;
  padding: 0.5em;
  border-radius: 10px;
  border: 3px solid #fff;
  background: #f7f8fa;
  cursor: pointer;

  .icon {
    font-size: 1.2rem;
    color: #000;
  }
  :hover {
    opacity: 0.6;
  }
`;
