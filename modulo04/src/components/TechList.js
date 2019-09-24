import React, { Component } from 'react';
class TechList extends Component {

  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
    ]
  };

  // funções para serem usadas nas tags jsx precisam ser arrow functions
  // Só essas funções tem acesso ao THIS
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
    // o render executa novamente com as alerações de estado
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [... this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  render() {
    //Tag fragment
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
      </form>
    );
  }
}

export default TechList;