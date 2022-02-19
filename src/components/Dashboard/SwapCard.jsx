import React from 'react';
import styled from 'styled-components';
import { Button, InputGroup } from '../../reusables';
import { BsArrowDown } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { accountSelector, toggleSwap } from '../../redux/reducers/account';
import { getCryptoList } from '../../redux/actions/dashboard';
import { dashboardSelector } from '../../redux/reducers/dashboard';

const Index = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCryptoList());
  }, [dispatch]);

  const { swap } = useSelector(accountSelector);
  const { cryptoList } = useSelector(dashboardSelector);
  const [values, setValues] = React.useState({
    baseCurrency: '',
    targetCurrency: '',
    baseTotal: '',
    targetTotal: '',
  });
  const { baseCurrency, targetCurrency, baseTotal, targetTotal } = values;
  return (
    <Container isSwap={swap}>
      <h4>Swap</h4>
      <div>
        <span style={{ color: '#e24307' }}>* </span>Value field is disabled
        until a <b>crypto assets</b> is selected
      </div>
      <div className='input__group'>
        <InputGroup
          placeholder='0.0'
          selectPlaceholder='Base token'
          data={cryptoList}
          readOnly={baseCurrency ? false : true}
          onValueChange={(e) =>
            setValues((prevState) => ({
              ...prevState,
              baseCurrency: e.target.value,
            }))
          }
          onTextChange={(e) =>
            setValues((prevState) => ({
              ...prevState,
              baseTotal: parseFloat(e.target.value) * baseCurrency,
            }))
          }
          amount={baseTotal && parseFloat(baseTotal).toFixed(2)}
        />
        <InputGroup
          placeholder='0.0'
          selectPlaceholder='Select token'
          data={cryptoList}
          danger
          readOnly={targetCurrency ? false : true}
          onValueChange={(e) =>
            setValues((prevState) => ({
              ...prevState,
              targetCurrency: e.target.value,
            }))
          }
          onTextChange={(e) =>
            setValues((prevState) => ({
              ...prevState,
              targetTotal: parseFloat(e.target.value) * targetCurrency,
            }))
          }
          amount={targetTotal && parseFloat(targetTotal).toFixed(2)}
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
  background: #efd9b7;
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
  left: 45.5%;
  top: 37.5%;
  z-index: 70;
  padding: 0.5em;
  border-radius: 10px;
  border: 3px solid #efd9b7;
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
