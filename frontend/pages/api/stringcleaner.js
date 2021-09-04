export default function handler(req, res) {
  const languagesurl = {
    js: 'http://firsttest-service2:8080/',
    py: 'http://stringcleaner-python-service/',
    go: 'http://stringcleaner-go-service:8000/'
  }
  const url = languagesurl[req.body.language];
  fetch(url, {
    method: "POST",
    body: JSON.stringify({source: req.body.source}),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(function(res) {
    return res.json();
  }).then(function(resjson) {
    res.status(200).json(resjson)
  });
}
