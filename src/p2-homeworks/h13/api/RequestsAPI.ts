import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

export const requestsAPI = {
    setRequest(isChecked: boolean) {
        return instance.post<{isChecked: boolean}, AxiosResponse<ResponseType>>('auth/test', {success: isChecked})
    }
}

    // body: {success: true}
