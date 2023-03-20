const Hello = (props) => {
  // melakukan destructing
  const { name, waktu } = props;
  //   const span = document.querySelector('span');
  //   span.style.color = 'red';
  return (
    <div className="hello">
      <h2>
        Hello React Selamat <span> {waktu} </span>
      </h2>
      <p>Saya {name} fronend-enginer </p>
    </div>
  );
};

export default Hello;
