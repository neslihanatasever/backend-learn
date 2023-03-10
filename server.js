require('dotenv').config()

const express = require('express', process.env.NODE_VERSION)
const app = express()
const port = process.env.PORT

app.get('/frontendship', (req, res) => {
    const menteelist = [
        {
            name: 'Birkan'
        },
        {
            name: 'Busra'
        },
        {
            name: 'Batu'
        },
        {
            name: 'Altan'
        },
        {
            name: 'Eray'
        },
        {
            name: 'Mizgin'
        },
    ]

    res.send(menteelist)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })