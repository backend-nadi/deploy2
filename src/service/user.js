import http from './api'

const Get = async() => {
    return http.get('/api/users')
}

export default {
    Get
}