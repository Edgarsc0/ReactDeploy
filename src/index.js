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
function App2(props) {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/ReactDeploy" element={<ex.DetailRecipeComponent id={props.id}/>} />
      </Routes>
    </BrowserRouter>
  );
}
const info=sessionStorage.getItem("json");
if(info==null){
  root.render(
    <App/>
  )
}else{
  root.render(
    <App2 id={info}/>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
