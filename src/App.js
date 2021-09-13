import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Price from "./components/Prices/Price";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Price />
      <CTA />
      <Footer />
    </div>
  );
}
export default App;
