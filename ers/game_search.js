function matchRequest(socket) {
    socket.on('match_request', function () {
        console.log("User " + this.id + " requested a game");
    })
}

module.exports = {
    matchRequest
};
