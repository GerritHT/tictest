import { Client } from 'boardgame.io/react';
import { TicTacToeBoard } from './Board';

const App = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
});

export default App;
