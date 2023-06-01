import styled from 'styled-components';

const HeroStyle = styled.div`
  padding: 2rem;
  text-align: center;
  color: rgb(47, 47, 47);
  font-family: Poppins;

  .hero {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 15px;
    font-weight: 500;
    color: var(--secondry);
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 992px) {
    text-align: left;
    max-width: 1200px;
    margin: 0 auto;

    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .hero__left {
      flex-basis: 40%;
    }

    .hero__right {
      max-width: 50%;
    }
  }
`;

export default HeroStyle;
