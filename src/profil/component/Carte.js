import React from 'react'
import {  Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

import Image from './Image';

 const Carte = ({ el: { profession, bio, name}, handleName})=> {
  
    return (
     
         <Card style={{ width: '30rem',
         borderRadius: '50px',
         backgroundColor:'#DCDCDC',
         
         }} onClick={ ()=> handleName(name)} >
  <Image>
  <div>
<img src="https://assets.afcdn.com/story/20170915/1121254_w1878h1878c1cx945cy801.jpg" alt="" />
</div>

</Image>
<Card.Body>
    <Card.Title className='name'>{name} </Card.Title>
    <Card.Text className='text'>{profession}</Card.Text>
    <Card.Text className='text'>{bio}</Card.Text>
    
    
  </Card.Body>
</Card>
) 
};
Carte.defaultProps = {

  name: "ameni",
};
   

  Carte.propTypes={
    bio:PropTypes.string,

  };
  
export default Carte
