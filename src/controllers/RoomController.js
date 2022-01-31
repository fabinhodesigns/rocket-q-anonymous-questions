module.exports = {
    create(req, res) {
        let roomId = 123456

        res.redirect(`/room/${roomId}`)
    }
}