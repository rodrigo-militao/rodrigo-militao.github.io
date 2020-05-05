import React from 'react';
import './App.css';
import Resume from './Resume';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      type: '',
      resumoCurriculo: '',
      cargo: '',
      desccargo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

    handleForm(e) {
      e.preventDefault();
      const { value, name } = e.target;
      this.setState({
        ...this.state,
        [name]: value
      });
      console.log(this.state);
    }

    handleChange(e) {
      const { value, name } = e.target;
      this.setState({
        ...this.state,
        [name]: value
      });
    }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleForm}>
          <fieldset>
            <input type="text" name="nome" maxLength="40" required placeholder="NOME" value={this.state.name} onChange={this.handleChange}/>
            <input type="text" name="email" maxLength="50" required placeholder="EMAIL" value={this.state.email} onChange={this.handleChange} />
            <input type="text" name="cpf" maxLength="11" required placeholder="CPF" value={this.state.cpf} onChange={this.handleChange} />
            <input type="text" name="adress" maxLength="200" required placeholder="ENDEREÇO" value={this.state.adress} onChange={this.handleChange}/>
            <input type="text" name="city" maxLength="28" required placeholder="CIDADE" value={this.state.city} onChange={this.handleChange}/>
            <select name="state" value={this.state.state} >
              <option value="">Estados Brasil</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Aracaju">Aracaju</option>
            </select>
  
            <input type="radio" id="casa" name="type" value="casa" />
            <label for="casa">Casa</label><br/>
            <input type="radio" id="apt" name="type" value="apt" />
            <label for="apt">Apartamento</label><br/>
          </fieldset>
  
          <fieldset>
            <textarea name="resumoCurriculo" maxLength="1000" required placeholder="Resumo do Curriculo" value={this.state.resumoCurriculo} onChange={this.handleChange}></textarea>
            <textarea name="cargo" maxLength="40" required placeholder="Cargo" value={this.state.cargo} onChange={this.handleChange}></textarea>
            <input type="text" name="desccargo" maxLength="500" required placeholder="Descrição do cargo" value={this.state.desccargo} onChange={this.handleChange}/>
          </fieldset>

          <input type="submit" value="Enviar" />

        </form>
        <br/><br/>
        <div>
        	<Resume data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
