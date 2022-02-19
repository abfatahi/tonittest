/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import { BsEye, BsEyeSlashFill } from 'react-icons/bs';

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
        <SelectField>
          <div className='group'>
            <select onChange={props.onValueChange} name={props.selectName}>
              <option>{props.selectPlaceholder}</option>
              {props.data.map((item, index) => {
                return (
                  <option key={index} value={item.value || item.uid}>
                    {item.name || item.value}
                  </option>
                );
              })}
            </select>
          </div>
        </SelectField>
      </div>
      <p>$19,087.2</p>
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

    @media screen and (max-width: 425px) {
      top: 16px;
    }
  }
`;
