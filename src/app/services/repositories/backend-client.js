import fetchJsonp from 'fetch-jsonp'
import qs from 'qs'

export function backendClient() {
  return { run }

  async function run(command) {
    try {
      console.log('command.url', command.url)
      const response = await fetchJsonp(command.url + '?' + qs.stringify(command.payload))
      return response.json()
    }
    catch (error) {
      console.log('Network Error: ', error)
    }
  }
}
