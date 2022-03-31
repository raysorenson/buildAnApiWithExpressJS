const express = require('express')
let router = express.Router()
const chirpStore = require('../chirpstore')


router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        res.json(chirpStore.GetChirp(id))
    }else{
    res.json(chirpStore.GetChirps())
    }
})

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body)
    res.sendStatus(200)
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    chirpsStore.DeleteChirp(id);
    res.sendStatus(200);
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    chirpsStore.UpdateChirp(id, body);
    res.sendStatus(200);
})


module.exports = router