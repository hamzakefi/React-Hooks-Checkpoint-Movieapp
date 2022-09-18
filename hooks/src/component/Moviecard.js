import React from 'react'
import { Card } from 'react-bootstrap'
import MovieRating from './Rating'
const Moviecard = ({Movie}) => {
  return (
    <div className='card'>
       <Card style={{  width: '18rem' }}>
      <Card.Img variant="top" src={Movie.posterUrl} />
      <Card.Body>
        <Card.Title> {Movie.title}    </Card.Title>
        <Card.Text>
        <MovieRating ismovieRating={true} movieRating={Movie.rate} />
       
      
        </Card.Text>
        <Card.Text>
        {Movie.description}
        
     
          </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Moviecard