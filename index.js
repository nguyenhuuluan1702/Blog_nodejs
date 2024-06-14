const express = require('express')
const app = express()
const port = 3000

app.get('/main_1', (req, res) => {   // sau dấu / là đường đi đến web (tùy đặt)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})