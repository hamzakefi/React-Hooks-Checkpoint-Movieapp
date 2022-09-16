
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://kit.fontawesome.com/a076d05399.js';
import './App.css';
import Addmovie from './component/Addmovie';
import Moviefilter from './component/Moviefilter';
import Movieliste from './component/Movieliste';
import { moviesData } from './component/Data/Data';



function App() {
  const [Movies,SetMovies]=useState (moviesData)
const [inputSerch,SetinputSerch]=useState("")
  const Add= (Newmovie)=> {
  SetMovies([...Movies,Newmovie])
 
}



  return (
    <div className="App">
     
      <Moviefilter inputSerch={inputSerch} SetinputSerch={SetinputSerch} />
      < Movieliste Movies={Movies}   inputSerch={inputSerch} SetinputSerch={SetinputSerch}  />
      <Addmovie Add={Add} />
    
   
    </div>
  );
}

export default App;
