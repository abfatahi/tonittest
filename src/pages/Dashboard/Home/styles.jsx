import styled from 'styled-components';

export default styled.div`
  width: 100%;

  p {
    margin-bottom: 2rem !important;
  }

  h3 {
    font-weight: bold;
    text-transform: uppercase;

    @media screen and (max-width: 425px) {
      font-size: 0.8rem;
    }
  }

  .wrapper {
    display: flex;
    width: 40%;
    gap: 2rem;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
