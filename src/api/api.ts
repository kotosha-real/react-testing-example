import axios, { AxiosResponse } from 'axios'

import { PostData } from './types'

type ApiResponse<T> = Promise<AxiosResponse<T>>

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000
})

const api = {
    getPosts: (): ApiResponse<PostData[]> => axiosInstance.get('/posts')
}

export { api }
