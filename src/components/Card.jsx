const Card = (props) => {
  return (
    <div className="card">
      <img src={props.url} alt="" />

      <div>
        <h4>{props.title}</h4>
        <h3>Çevre Birimi</h3>

        <div className="bottom">
          <p>{props.price}</p>
          <button>Septe Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
