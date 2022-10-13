import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ex from './App';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/ReactDeploy" element={<ex.Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
function App2() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/ReactDeploy" element={<ex.DetailRecipeComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}
if(sessionStorage.getItem("json")==null){
  root.render(
    <App/>
  )
}else{
  root.render(
    <App2/>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
