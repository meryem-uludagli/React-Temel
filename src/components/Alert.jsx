const Alert = (props) => {
  return (
    <div className={`alert ${props.tema}`}>
      {props.tema === "uyarı"
        ? "Bu işlemi gerçekleştiremezsiniz"
        : props.tema === "basari"
        ? "İşlem Başarılı oldu"
        : props.tema === "hata"
        ? "İşlem Bşaraısız"
        : "Tema Belirlenmedi"}
    </div>
  );
};

export default Alert;
