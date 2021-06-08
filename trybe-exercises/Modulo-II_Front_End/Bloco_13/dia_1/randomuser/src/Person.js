import React, { Component } from 'react';

// Esse componente recebe as props passadas do PersonDetails.
class Person extends Component {
  render() {
    
    const { person: { name, email, age, image } } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

export default Person;