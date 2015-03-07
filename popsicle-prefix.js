module.exports = prefixPopsicle

function prefixPopsicle (prefix) {
  prefix = prefix.replace(/\/$/, '')

  return function (request) {
    request.url = prefix + '/' + request.url.replace(/^\//, '')
  }
}
