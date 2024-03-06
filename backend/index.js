const express = require("express")
 
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();

app.use(cors())

app.use(express.static('static'))

// Encode body
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))

const indexRouter = require('./routes/index')


app.use(indexRouter.router)


app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})