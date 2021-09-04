export async function getResult(string, language) {
  const res = await fetch(window.location + 'api/stringcleaner', {
    method: "POST",
    body: JSON.stringify({source: string, language: language}),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  return res.json()
}
export async function getJsResult(string) {
  return getResult(string, "js");
}
export async function getGoResult(string) {
  return getResult(string, "go");
}
export async function getPyResult(string) {
  return getResult(string, "py");
}
