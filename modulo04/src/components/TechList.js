import React, { Component } from 'react';
import TechItem from './TechItem';

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

  handleDelete = (tech) => {
    console.log(tech);

    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
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
          {
            this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)} />
            ))
          }
        </ul>
      </form>
    );
  }
}

export default TechList;