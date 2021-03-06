import { useState } from 'react';
import Background from './components/Background';
import Settings from './components/Settings';
import Board from './components/Board/Board';

function App() {
    const [gameOptions, setGameOptions] = useState(null)
 
    const startGame = (options) => {
        setGameOptions(options)
    }

    return (
        <>
            <Background />
            <h1>Memory Game</h1>
            {!gameOptions ? <Settings startGame={startGame} /> :
                <Board gameOptions={gameOptions}/>}

        </>
    );
}

export default App;
