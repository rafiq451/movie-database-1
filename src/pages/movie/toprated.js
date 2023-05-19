// const TopRatedMovie = () => {
//   return (
//     <div>
//       <h1>Top Rated</h1>
//     </div>
//   );
// };

import { useEffect, useState } from 'react';

// export default TopRatedMovie;
const Counter = () => {
  const [angka, SetAngka] = useState(0);
  const [nama, SetNama] = useState();
  function addAngka() {
    SetAngka(angka + 1);
    console.log(angka);
  }
  function UbahNama() {
    SetNama('Muhammad Rafiq');
  }
  // callback pakai arrow function

  useEffect(() => {
    console.log('Dijalankan Saat componen di-mount dan update');
    document.title = `Angka ${angka}`;
  }, [angka]);
  console.log('Dijalankan Saat componen di rander');

  return (
    <div>
      <p>Nilai Angka : {angka}</p>
      <button onClick={addAngka}>add</button>
      <p>Nama : {nama}</p>
      <button onClick={UbahNama}>ubah Nama</button>
    </div>
  );
};

export default Counter;
