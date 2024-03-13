import express from "express"
import morgan from "morgan"

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send('Hello Neo')
})
app.listen(4000, ()=>{
    console.log('listening live on 4000')
})