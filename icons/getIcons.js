const axios = require('axios')
const fs = require('fs')

module.exports = async query => {
  const cakePage = await axios.get(
    "https://www.flaticon.com/search?word=" +
      query +
      "&license=selection&order_by=1&color=1&stroke=2"
  )
  const regex = /https:\/\/image\.flaticon\.com\/icons\/png\/\d+\/(\d+)\/(\d+)\.png/g
  const icons = []
  let match

  do {
    match = regex.exec(cakePage.data)
    if (!match) break
    icons.push(match[1] + "/" + match[2])
  } while (match && icons.length < 10)

  return icons
}
