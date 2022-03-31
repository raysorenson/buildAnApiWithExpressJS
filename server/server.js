const express = require('express')
const apiRouter = require('./routes')
const app = express()
const port = 3000
app.use(express.json())

app.use('/api', apiRouter) //middleware router



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})