import React from 'react'
import Pokemon from './Pokemon'


class PokemonList extends React.Component {
    render() {
      const { poks } = this.props;
  
      return (
        <div>
          {poks.map((item, index) => (
            <Pokemon pok={item} key={index} />
          ))}
        </div>
      );
    }
  }
  
  
  export default PokemonList;
 
        
