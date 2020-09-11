const fetch = require("node-fetch")

const API_URL = 'https://cat-fact.herokuapp.com/facts'

const random = (amount = 1) => {
  amount = amount > 10 ? 10 : amount
  return get(`${API_URL}/random?amount=${amount}`)
}

const get = async resource => {
  const response = await fetch(resource)

  if (response.ok) {
    const data = await response.json()
    return Array.isArray(data) ? data : [data]
  } else {
    return response.status
  }
}

exports.random = random
