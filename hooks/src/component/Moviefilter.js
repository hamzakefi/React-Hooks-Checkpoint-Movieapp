import React from 'react'
import { Form } from 'react-bootstrap'


function Moviefilter({inputSerch,SetinputSerch,RateManagement}) {
  return (
    <div>
<header className='nav'>
<Form.Control className='Form' type="text" placeholder="search" onChange={ (e)=> SetinputSerch (e.target.value)} />

   
</header>
    </div>
  )
}

export default Moviefilter