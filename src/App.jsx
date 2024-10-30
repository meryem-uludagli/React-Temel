import Header from "./components/Header";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Card from "./components/Card";
import { products } from "./constants";

function App() {
  const title = "React'a Hoşgeldin";
  const message = "Yetkiniz yok";
  const isAuth = false;

  return (
    <div className="app">
      <Header />

      <main>
        <h1>{isAuth === true ? title : message}</h1>

        <h1>{isAuth === true && title}</h1>
        <Alert tema="hata" />
        <Alert tema="basari" />
        <Alert tema="uyari" />

        <div className="wrapper">
          {products.map((i) => (
            <Card key={i.id} url={i.url} title={i.title} price={i.price} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
