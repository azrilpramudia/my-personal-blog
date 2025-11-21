import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import AppRouter from "./router";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
