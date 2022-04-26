import logo from './logo.svg';
import './App.css';
import './index.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Home from './pages/Home';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Test from './pages/Test';
import reducer from './redux/Reducer'
const initialStore = {
 user:"DemoUser",
 count:5
  
};




const store = createStore(reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



function App() {
  return (
    <>
 <Provider store={store}>
        <BrowserRouter>
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/mainpage" element={<Mainpage />} />
            <Route exact path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>


 </Provider>
       


 

     
    </>
  );
}

export default App;
