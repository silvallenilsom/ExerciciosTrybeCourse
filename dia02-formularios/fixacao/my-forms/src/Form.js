import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
    }

  }

  handleChange(event) {
    this.setState({
      nome: event.target.value,
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Meu Formulário</h1>
        <label>
          Escolha sua cor favorita:
          <select>
            <option value='azul'>Azul</option>
            <option value='Amarelo'>Amarelo</option>
            <option value='vermelho'>Vermelho</option>
            <option value='verde'>Verde</option>
          </select>
        </label>
        <br />
        <label>
          Genero:
          <input type='radio' name='genre' value='masculino'/>masculino <br />
          <input type='radio' name='genre' value='feminino'/>eminino
        </label>
        <br />
        <label>
          Nome:
          <input
            type='text'
            name='name'
            value={this.state.nome}
            onChange={this.handleChange}/>
        </label>
        <br />
        <label>
          Conte uma piada:
          <textarea name='campo-texto'/>
        </label>
      </div>
    );
  }
}

export default Form;