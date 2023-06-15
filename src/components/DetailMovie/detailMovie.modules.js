import styled from 'styled-components';
const StyledMovie = styled.div`
  // Mobile Screen
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  font-family: Poppins;
  img {
    border-radius: 25px;
    max-width: 100%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    height: auto;
  }
  h2 {
    font-size: 30px;
    font-weight: 500;
    color: var(--primary);
    margin-bottom: 10px;
  }
  h3 {
    font-size: 15px;
    font-weight: 500;
    color: var(--secondry);
    margin-bottom: 2rem;
  }
  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }
  // Medium Screen: 768px
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    .poster {
      flex-basis: 30%;
    }
    .info {
      flex-basis: 60%;
    }
  }
  // Large Screen
  @media screen and (min-width: 992px) {
  }
`;

export default StyledMovie;
