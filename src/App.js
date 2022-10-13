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
  const [articulos, setArticulos] = useState([]);
  const [recuperado, setRecuperado] = useState(false);
  function mostrarDetalles(){
    return(
      <div>
        {articulos.meals.map(item=>{
          return(
            <>
              <a href="/ReactDeploy">Regresar</a>
              <h1>Origen: {item.strArea}</h1>
              <h1>Categoria: {item.strCategory}</h1>
              <h1 key={item.strMeal}>{item.strMeal}</h1>
              <hr key={"hr"}></hr>
              <h1>Instrucciones de preparación</h1>
              <p>{item.strInstructions}</p>
              <h3>Por si te ayuda...</h3>
              <a href={item.strYoutube}>VideoTutorial</a><br></br><br></br>
              <img key={"img-"+item.strMeal} alt={"img/"+item.strMeal} src={item.strMealThumb}></img>
            </>
          )
        })}
      </div>
    )
  }
  const {id}=useParams();
  useEffect(() => {
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setArticulos(articulos)
        setRecuperado(true)
      })
  }, [])
  if(recuperado){
    return mostrarDetalles();
  }else{
    return (<div>recuperando datos...</div>)
  }

}
function RecipeComponent() {
  const [articulos, setArticulos] = useState([])
  const [recuperado, setRecuperado] = useState(false)
  function mostrarTitulo() {
    const mostrar=()=>{
      window.location.href=`ReactDeploy/${articulos.meals[0].idMeal}`;
    }
    return (
      <div>
        {articulos.meals.map(item=>{
          return(
            <>
              <h1 key={item.strMeal}>{item.strMeal}</h1>
              <img key={"img-"+item.strMeal} onClick={mostrar} alt={"img/"+item.strMeal} src={item.strMealThumb}></img>
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
