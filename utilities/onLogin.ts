export const onLogin = async () => {
    const token = localStorage.getItem('tinacms-github-token') || null
    const headers = new Headers()
  
    if (token) {
      headers.append('Authorization', 'Bearer ' + token)
    }
  
    const resp = await fetch(`/api/preview`, { headers: headers })
    const data = await resp.json()
  
    if (resp.status == 200) window.location.href = window.location.pathname
    else throw new Error(data.message)
  }