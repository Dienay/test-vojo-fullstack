export const baseUrl = "https://test-vojo-backend.herokuapp.com"

export const token = window.localStorage.getItem("token")

export const axiosConfig = {
    headers: {
      Authorization: token
    }
}