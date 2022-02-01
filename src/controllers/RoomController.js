const Database = require('../db/config')

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let isRoom = true
        let roomId

        while (isRoom) {
            /*Gera o número da sala */

            for (var i = 0; i < 6; i++) {
                //Quando o I for igual a zero, ele iguala ao Math para o número aleatório não ser]
                // inicíado com undefined

                i == 0 ?
                    (roomId = Math.floor(Math.random() * 10).toString()) :
                    (roomId += Math.floor(Math.random() * 10).toString())
            }

            /* Verificar se o id da sala já existe*/
            const roomExistIds = await db.all(`SELECT id FROM rooms`)

            isRoom = roomExistIds.some(roomExistIds => roomExistIds === roomId)

            if (!isRoom) {
                await db.run(`
                    INSERT INTO rooms (
                    id,
                    pass
                    ) VALUES (
                        ${parseInt(roomId)},
                        ${pass}
                    )`)
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    // REABRIR SALA
    open(req, res) {
        const roomId = req.params.room
        res.render('room', { roomId: roomId })
    }
}