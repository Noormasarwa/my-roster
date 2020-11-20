class Model {
    getPlayers(data) {
        return $.get(`/teams/${data}`, function (players) {
            return players
        })
    }
}