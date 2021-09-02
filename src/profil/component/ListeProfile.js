import React from 'react'
import Carte from './Carte'
import PropTypes from 'prop-types';

const ListeProfile = ({profil }) => {
    const handleName = (elem) =>{
    alert (elem);  };

    return (
        <div>
            
             { profil.map((el, index) =>(<Carte key={index} el={el} handleName={handleName} />))}
        </div>
    )
};

Carte.defaultProps = {

    name: "ameni",
  };
     
  
    ListeProfile.propTypes={
      bio:PropTypes.number,
  
    };

export default ListeProfile
