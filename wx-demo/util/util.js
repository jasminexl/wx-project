function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  const hour = parseInt(time / 3600, 10)
  time %= 3600
  const minute = parseInt(time / 60, 10)
  time = parseInt(time % 60, 10)
  const second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

function fib(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

let alert = function (content) {
  console.log("content", content)
  let contentType = Object.prototype.toString.call(content)
  switch (contentType) {
    case '[object String]':
      console.log("type", contentType)
      content = {
        isShow: true,
        text: content
      }
      break;
    default: 
      break;
  }
  this.data.alertOption = {
    isShow: content.isShow,
    text: content.text
  }
  console.log("alert", this.data.alertOption)
  this.setData({
    alertOption: this.data.alertOption
  })
}

module.exports = {
  formatTime,
  formatLocation,
  fib,
  alert
}
