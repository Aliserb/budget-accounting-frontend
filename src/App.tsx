import './App.css';
import './assets/css/style.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FinanceColumns from './components/FinanceColumns/FinanceColumns';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <FinanceColumns />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
