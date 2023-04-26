const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api', (req, res) => {
  res.send("GET Request Called")
})

app.get('/api/OrderByHemoglobin', (req, res) => {
  console.log("Call API /OrderByHemoglobin")
  api_helper.make_API_call('http://localhost:8085/Management/OrderByHemoglobin')
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})


app.get('/api/patientInfo/:id', (req, res) => {
  console.log("Call API /patientInfo/:id")  
  var patientId = req.params.id;
  console.log(patientId)
  api_helper.make_API_call('http://localhost:8085/patient/id/'+patientId)
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})

app.get('/api/patientActivity/:id', (req, res) => {
  console.log("Call API /patientActivity/:id")
  var patientId = req.params.id;
  var patientId = req.params.id;
  api_helper.make_API_call('http://localhost:8085/activity/ActivitiesByPatient/'+patientId)
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})



app.listen(5000, () => {console.log("Server started on port 5000")})

