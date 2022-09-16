import React from 'react'
import { Form } from 'react-bootstrap'
import ReactStars from "react-stars";
function Moviefilter({inputSerch,SetinputSerch,RateManagement}) {
  return (
    <div>
<header>
<Form.Control type="text" placeholder="search" onChange={ (e)=> SetinputSerch (e.target.value)} />
<ReactStars count={5} size={24} color2={"yellow"} onChange={RateManagement} />
   
</header>
    </div>
  )
}

export default Moviefilter