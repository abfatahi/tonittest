/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';

const Index = (props) => {
  return (
    <Container>
      <div className='group'>
        <input
          name={props.fieldname}
          type='number'
          min='1'
          max='10000000'
          placeholder={props.placeholder}
          onChange={props.onTextChange}
          value={props.value}
          readOnly={props.readOnly ? true : false}
        />
        <SelectField danger={props.danger}>
          <div className='group'>
            <select
              defaultValue
              onChange={props.onValueChange}
              name={props.selectName}
            >
              <option>{props.selectPlaceholder}</option>
              {props.data.map((item) => {
                const { id, symbol, metrics } = item;
                return (
                  <option key={id} value={metrics.market_data.price_usd}>
                    {symbol}
                  </option>
                );
              })}
            </select>
          </div>
        </SelectField>
      </div>
      <p>{props.amount && <>${props.amount}</>}</p>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 6rem;
  background: #f7f8fa;
  border-radius: 25px;
  padding: 1rem;
  border: 1px solid #f7f8fa;

  :hover,
  :focus {
    border: 1px solid #bdbdbd;
  }

  .group {
    display: flex;
    width: 100%;
    height: 70%;
  }

  p {
    font-size: 1.2rem;
  }

  input {
    font-style: normal;
    font-weight: 500;
    font-size: 2.5em;
    letter-spacing: 0.018em;
    width: 70%;
    background: transparent;
    color: #000;
    border: none;
    outline: none;

    @media screen and (max-width: 425px) {
      width: 65%;
    }

    :focus {
      outline: none;
      border: none;
    }

    ::placeholder {
      color: #bdbdbd;
      font-weight: bold;
      opacity: 0.7;
    }

    :-ms-input-placeholder {
      color: #bdbdbd;
      font-weight: bold;
      opacity: 0.7;
    }

    ::-ms-input-placeholder {
      color: #bdbdbd;
      font-weight: bold;
      opacity: 0.7;
    }
  }
`;

const SelectField = styled.div`
  position: relative;
  width: 30%;

  @media screen and (max-width: 425px) {
    width: 35%;
  }

  .group {
    display: flex;
    align-items: center;
    position: relative;
    height: 36px;

    select {
      width: 100%;
      background: #e5e5e5;
      padding: 0 10px;
      height: 100%;
      // border: 1px solid #e6e7e8;
      border: none;
      box-sizing: border-box;
      border-radius: 10px;

      ${(props) => css`
        ${props.danger &&
        css`
          background: #e24307;
          color: #fff;

          .group::after {
            color: #fff !important;
          }
        `}
      `}
      -webkit-appearance: none;
      appearance: none;

      :focus {
        outline: none;
        border: none;
      }
    }
  }

  .group::after {
    content: '▼';
    font-size: 0.7rem;
    right: 6px;
    position: absolute;

    ${(props) => css`
      ${props.danger &&
      css`
        color: #fff;
      `}
    `}
  }
`;
