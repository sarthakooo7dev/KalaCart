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

import Cart from './pages/Cart';
import totalcart from './data/data'
import reducer from './redux/Reducer';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from 'redux-persist/integration/react';

var fcart=[];
const initialStore = {
 user:"Demo_User",
 count:0,
 data:totalcart,
 finalcart:fcart,
 amount:0,
 total:0,
 cardStatus:false,
 itemID:[]
  
};


const persistConfig = {
  key: "root",
  storage:storage,
 
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, initialStore);

const persistor = persistStore(store);


// const store = createStore(reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



function App() {
  return (
    <>
 <Provider store={store}>

   <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>

              <Route exact path="/" element={<Home />} />
              <Route exact path="/mainpage" element={<Mainpage />} />
              <Route exact path="/test" element={<Test />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>

   </PersistGate>
       


 </Provider>
       


 

     
    </>
  );
}

export default App;
