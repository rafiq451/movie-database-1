// import styled-components
import styled from 'styled-components';
const NavbarStyle = styled.div`
  background-color: var(--primary);
  padding: 1rem;
  color: #fff;
  font-family: Poppins;

  h1 {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    text-decoration: none;
  }

  li {
    margin-bottom: 1rem;
  }

  .list {
    text-decoration: none;
    color: #fff;
  }
  .list:hover {
    color: var(--secondry);
  }

  @media screen and (min-width: 768px) {
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      font-size: 30px;
    }
    ul {
      display: flex;
      margin-top: -1rem;
    }

    li {
      margin: 0 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 0.9rem 2rem;
  }
`;

export default NavbarStyle;
