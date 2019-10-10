import React from 'react';
import './estilo.css';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="container">
          <img className="img" src={require('./assets/cronometro.png')} />
          <a className="timer">0.0</a>
          <div className="areaBtn">
            <a className="botao">Vai</a>
            <a className="botao">Limpar</a>
          </div>
      </div>
    );
  }
}
export default App;
