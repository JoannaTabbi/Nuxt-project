// any api file exports a default function defineEventHandler()
// that can directly return JSON data, a Promise 
// or use event.node.res.end() to send response
// can universally be called using await $fetch('/api/users').

export default defineEventHandler(async (event) => {

  // handle query params; getQuery replaces useQuery which is deprecated now
  // const { name } = getQuery(event)

  // handle post data 
  // const { age } = await readBody(event)


  // api call with private key
     const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=9ewD8ya5tXg6D5IVu0a2nKJefkavu161sE4pWLnx&currencies=EUR%2CUSD%2CCAD')
     
  return data
    //message: `Welcome, ${name}, nice to meet you! You are ${age} years old`
    
  

})