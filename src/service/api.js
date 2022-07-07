import axios from 'axios'

export default axios.create({
    baseURL: 'http://api1.rolandadifandana.xyz',
    headers: {
        "Content-type": "application/json"
      }
})