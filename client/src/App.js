import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './pages/NoMatch';
import Toys from './pages/Toys';
import Accessories from './pages/Accessories';
import Boxes from './pages/Boxes';
import Sale from './pages/Sale';
//import Login from './pages/Login';
//import Profile from './pages/Profile';
//import Signup from './pages/Signup';

import './App.css';

function App() {
  return (
    <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/toys"
                element={<Toys />}
              />
              <Route
                path="/accessories"
                element={<Accessories />}
              />
              <Route
                path="/boxes"
                element={<Boxes />}
              />
              <Route
                path="/sale"
                element={<Sale />}
              />
              {/* <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              /> */}
              <Route
                path="/nomatch"
                element={<NoMatch/>}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
