// import styled Components
import styled, { css } from 'styled-components';

// Buat object warna yang akan di pakai
const colors = {
  primary: '#06d6a0',
  secondary: '#118ab2',
  success: '#70AF85',
};

// Buat component Button
const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);

  /* Akses props Variant */

    /* manggunakan function biasa  */
  /* background-color: ${function (props) {
    // jika props color itu primary maka jalankan aksinya
    if (props.color === 'primary') {
      return '#06d6a0';
    }
    // jika props color nya secondary maka jalankan aksinya
    else if (props.color === 'secondary') {
      return '#118ab2';
    }
    // jika tidak ada props nya maka jalankan warna default nya
    else {
      return '#06d6a0';
    }
  }}; */

    /* menggunakan arrow function */
  /* background-color: ${(props) => {
    // jika color ada, maka akses obect berdasarkan nilai color
    if (props.color) {
      return colors[props.color];
    } else {
      return colors.primary;
    }
  }}; */

  /* cara yang lebih singkat menggunakan shorthand ternary operator */
  /* jadi didalam props itu kan ada color maka kita dectructing, jadi kita tidak usah menuliskan props lagi */
  // jika color ada, maka akses obect berdasarkan nilai color\
  /* Props color */
  /* background-color: ${({ color }) => colors[color] || colors.primary}; */
  background-color: ${({ color, theme }) => theme.colors[color] || theme.colors.primary};

  /* Props full */
  /* cara 1 */
  /* jika si props full ada, maka 
  jalankan display dan width yang sudah di tentukan value nya */
  /* display: ${(props) => props.full && 'block'};
  width: ${(props) => props.full && '100%'}; */

  /* cara 2 */
  /* tangkap dulu props nya lalu tambahkan css helper, jadi ccs helper itu menambahkan css baru */
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}

  /* Props Size */
  /* sm */
   ${(props) =>
     props.sm &&
     css`
       font-size: 0.8rem;
       padding: 0.2rem 0.5rem;
     `} 

  /* md(default) */
  ${(props) =>
    props.md &&
    css`
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `}
    
  /* lg */
  ${(props) =>
    props.md &&
    css`
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
    `} 
`;

// export Button
export default Button;
