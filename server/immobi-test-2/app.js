const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routers/index')
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", routes)


app.listen(port, () => {
    console.log(`listening to port ${port}`);
})