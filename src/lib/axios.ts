import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, //* com essa config os cookies do front end sao automaticamente enviados para o backend
})
