import React, { Component } from 'react';
import io from 'socket.io-client'

const socket = io('http://localhost:3000');

function findGame() {
    socket.emit('match_request')
}

class GameSearch extends Component {
    render() {
        return (
            <button onClick={findGame} id="game_search">Find a Game</button>
        );
    }
}

export default GameSearch;