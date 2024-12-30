import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Times from './components/Times';

function App() {
  const times = [
    { nome: 'Valorant', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { nome: 'Counter Strike', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' },
    { nome: 'Fortnite', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { nome: 'Pokemon Go', corPrimaria: '#DB6EBF', corSecundaria: '#EAE9F5' },
    { nome: 'Minecraft', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
  ];

  const [jogadores, setJogadores] = useState([]);

  const novoJogador = (jogador) => {
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="App">
      <Banner />
      <Form time={times.map((time) => time.nome)} jogadorCadastrado={novoJogador} />
      {times.map((time) => (
        <Times
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          jogadores={jogadores.filter(jogador => jogador.jogo === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
