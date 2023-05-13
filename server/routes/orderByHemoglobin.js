const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')

// Env vars
//const API_BASE_URL = process.env.API_BASE_URL
//const API_KEY_NAME = process.env.API_KEY_NAME
//const API_KEY_VALUE = process.env.API_KEY_VALUE

// Env vars
const API_BASE_URL = "http://localhost:8085/Management/OrderByHemoglobin"
const API_KEY_NAME = ""
const API_KEY_VALUE = ""


router.get('/OrderByHemoglobin', async (req, res, next) => {
    try {
      const params = new URLSearchParams({
        [API_KEY_NAME]: API_KEY_VALUE,
        ...url.parse(req.url, true).query,
      })
  
      //const apiRes = await needle('get', `${API_BASE_URL}?${params}`)
      const apiRes = await needle('get', `${API_BASE_URL}`)
      const data = apiRes.body
  
      // Log the request to the public API
      if (process.env.NODE_ENV !== 'production') {
        //console.log(`REQUEST: ${API_BASE_URL}?${params}`)
        console.log(`REQUEST: ${API_BASE_URL}`)
      }  
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  })
  
  module.exports = router
