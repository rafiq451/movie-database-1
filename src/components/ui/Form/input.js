import styled, { css } from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 20px 10px;
  height: 1.8rem;
  font-size: medium;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 2px solid rgb(177, 177, 177);

  @media screen and (min-width: 992px) {
    margin-bottom: 1rem;
  }

  /* props xm */
  ${(props) =>
    props.xm &&
    css`
      padding: 0 5px;
      font-size: smaller;
    `}
  /* props sm */
  ${(props) =>
    props.sm &&
    css`
      padding: 15px 10px;
      font-size: small;
    `}
  /* props md / basic */
  ${(props) =>
    props.md &&
    css`
      padding: 20px 10px;
      font-size: medium;
    `}
  /* props lg */
  ${(props) =>
    props.lg &&
    css`
      padding: 25px 10px;
      font-size: large;
    `}
`;

export default Input;
