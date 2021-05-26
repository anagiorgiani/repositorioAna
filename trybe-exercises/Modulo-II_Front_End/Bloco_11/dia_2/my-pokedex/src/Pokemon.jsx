import React from 'react';


class Pokemon extends React.Component {
    render() {
      const { name, type, image, averageWeight } = this.props.pok;
      
      return (
          <div className='pokemon'>
        <div>
          <p> {name}</p>
          <p> {type}</p> 
          <p> Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}</p>
        </div>
        <img src={image} />
        </div>
      );
    }
  }
  
  export default Pokemon;