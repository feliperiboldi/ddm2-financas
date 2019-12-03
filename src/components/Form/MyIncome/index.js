import React from 'react';

import Label from './../../Label';
import Input from './../../Input';
import ButtonSubmit from './../../Button/Submit';

import './../../../bootstrap.min.css';

class FormMyIncome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIncome: 0.00
    };
  }

  handlerInputChange(e) {
    let currentIconeState = this.state.currentIncome;
    currentIconeState[e.target.id] = e.target.value;

    this.setState({
      currentIncome: currentIconeState
    });

    console.log(this.state.currentIncome);
  }

  render() {
    return(
      <div className="container">
        <form>
          <Label text="Renda Mensal" />
          <Input type="number" placeholder="Digite a renda mensal" className="input-app input-income" />
          <ButtonSubmit text="Cadastrar Renda" />
        </form>
      </div>
    );
  }
}

export default FormMyIncome;
