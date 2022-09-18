
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://kit.fontawesome.com/a076d05399.js';
import './App.css';
import Addmovie from './component/Addmovie';
import Moviefilter from './component/Moviefilter';
import Movieliste from './component/Movieliste';
import { moviesData } from './component/Data/Data';
import FilterByrate from './component/Rating'



function App() {
  const [Movies,SetMovies]=useState (moviesData)
const [inputSerch,SetinputSerch]=useState("")
  const Add= (Newmovie)=> {
  SetMovies([...Movies,Newmovie])
 
}
const [Rating, setRating] = useState(0)



  return (
    <div className="App">
      
     <nav> 
      <Moviefilter  inputSerch={inputSerch} SetinputSerch={SetinputSerch}  />
      </nav>
      <FilterByrate ismovieRating={false} rating={Rating} setRating={setRating} />
     
      < Movieliste Movies={Movies}   inputSerch={inputSerch} SetinputSerch={SetinputSerch} Rating={Rating} />
    <footer className='footer'>  <Addmovie Add={Add} /> </footer>
    
   
    </div>
  );
}

export default App;
