const APP_URL = 'http://localhost:4200'
export const API_URL = `${APP_URL}/api` //process.env.APP_URL

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`
export const getGenresUrl = (string: string) => `/genres${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
export const getRatingsUrl = (string: string) => `/ratings${string}`