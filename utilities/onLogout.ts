export const onLogout = () => {
    return fetch(`/api/reset-preview`).then(() => {
      window.location.reload()
    })
  }