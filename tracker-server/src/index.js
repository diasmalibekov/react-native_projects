require('./models/User')
const express = require('express')
const mongoose = require('mongoose')
const bodyPareser = require('body-parser')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(bodyPareser.json())
app.use(authRoutes)

const mongoURI = 'mongodb+srv://Admin:welcometomymongodb!@cluster0.mfzoz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
	console.log('Connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
	console.error('Error connecting to mongo', err)
})

app.get('/', (req, res) => {
	res.send('Hi there!')
})

app.listen(3000, () => {
	console.log('Listening on port 3000')
})