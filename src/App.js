import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      corPrimaria: '#57C278'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29'
    }
  ])

  const [colaboradores, setColabores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColabores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('Colaborador deletado')
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.corPrimaria = cor
      }
      return time
    }))
  }

  return (
    <div className="App">

      <Banner/>

      <Formulario 
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      
      {times.map(time => 
        <Time 
          mudarCor={mudarCorDoTime}
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      )}

      <Rodape/>
      
    </div>
  );
}

export default App;
