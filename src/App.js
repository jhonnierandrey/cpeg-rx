import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      <Main />
      <Footer />
    </div>
    );
}
  
export default App;
  