import { useState, useEffect } from 'react';
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
function DetailRecipeComponent(props){
  sessionStorage.clear();
  const json=JSON.parse(props.id)
  return(
    <>
      <h1><a href='/ReactDeploy'>REGRESAR</a></h1>
      <h1>Origen: {json.strArea}</h1>
      <h1>Categoria: {json.strCategory}</h1>
      <h1>{json.strMeal}</h1>
      <h3><a href={json.strYoutube}>Video de preparacion</a></h3>
      <hr></hr>
      <h2>Instrucciones de preparacion</h2>
      <p>{json.strInstructions}</p>
      <img src={json.strMealThumb}></img>
    </>
  )
}
function RecipeComponent() {
  const [articulos, setArticulos] = useState([])
  const [recuperado, setRecuperado] = useState(false)
  function mostrarTitulo() {
    return (
      <div>
        {articulos.meals.map(item=>{
          return(
            <>
              <h1 key={item.strMeal}>{item.strMeal}</h1>
              <img key={"img-"+item.strMeal} onClick={()=>{
                sessionStorage.setItem("json",JSON.stringify(item));
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
