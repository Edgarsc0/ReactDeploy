import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
function Home(){
  return(
    <>
      <h1>Use la siguiente api: https://www.themealdb.com/api/json/v1/1/random.php</h1>
      <p>Notese que toda la info esta en ingles.</p>
      <p>Notese tambien que la api suelta una receta completamente aleatoria.</p>
      <RecipeComponent/>
      <RecipeComponent/>
      <RecipeComponent/>
      <RecipeComponent/>
    </>
  )
}
function DetailRecipeComponent(){
  return(
    <h1>HOLA</h1>
  )
}
function RecipeComponent() {
  const [articulos, setArticulos] = useState([])
  const [recuperado, setRecuperado] = useState(false)
  function mostrarTitulo() {
    const Mostrar=(props)=>{
      const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`;
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((articulos) => {
          return (
            <h1>Hola</h1>
          )
        })
    }
    return (
      <div>
        {articulos.meals.map(item=>{
          return(
            <>
              <h1 key={item.strMeal}>{item.strMeal}</h1>
              <img key={"img-"+item.strMeal} onClick={()=>{
                sessionStorage.setItem("json",item);
                window.location.href="/ReactDeploy"
              }} alt={"img/"+item.strMeal} src={item.strMealThumb}></img>
              <hr key={"hr"}></hr>
            </>
          );
        })}
      </div>
    );
  }
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setArticulos(articulos)
        setRecuperado(true)
      })
  }, [])
  if(recuperado){
    return mostrarTitulo()
  }else{
    return (<div>recuperando datos...</div>)
  }
}
const ex={Home,DetailRecipeComponent};
export default ex;
