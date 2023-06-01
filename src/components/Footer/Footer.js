import styled from 'styled-components';

const FooterStyle = styled.div`
  background-color: var(--primary);
  padding: 1rem;
  font-family: Poppins;
  color: #fff;
  text-align: center;

  h2 {
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;
const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        <h2>Movie App</h2>
        <p>by M.Rafiq</p>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
