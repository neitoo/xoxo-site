import {Header} from '../components/Header';
import { Routes, Route} from "react-router-dom";


import PlayArea from '../pages/tabs/PlayArea';
import Rating from '../pages/tabs/Rating';
import ActivePlayer from '../pages/tabs/ActivePlayer';
import GameHistory from '../pages/tabs/GameHistory';
import PlayerList from '../pages/tabs/PlayerList';
import Home from '../pages/tabs/Home';
import { useContext, useEffect, useState } from 'react';
import { AuthC } from '../context/AuthC';

const Main = () => {

    const { handleProtect } = useContext(AuthC);

    const [hasCalledProtect, setHasCalledProtect] = useState(false);

    useEffect(() => {
        if (!hasCalledProtect) {
            handleProtect();
            setHasCalledProtect(true);
        }
    }, [handleProtect, hasCalledProtect]);

    return (
        
        <div className="App">
            <Header/>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="play" element={<PlayArea/>}/>
                <Route path="rating" element={<Rating/>}/>
                <Route path="active-player" element={<ActivePlayer/>}/>
                <Route path="game-history" element={<GameHistory/>}/>
                <Route path="player-list" element={<PlayerList/>}/>
            </Routes>
        </div>
    );
}

export default Main;