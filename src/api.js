import axios from "axios"
import { baseURL } from "./consts"

const instance = axios.create({
	baseURL: baseURL
})

instance.interceptors.request.use(config => {
	config.headers.Authorization = localStorage.getItem("token")
	return config
})

// !! ARTICLE
export const addArticle = async (formAndValue) => {
	try {
		const { data } = await instance.post("/addArticle", { ...formAndValue })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getArticles = async () => {
	try {
		const { data } = await instance.get("/getArticles")
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getArticle = async (id) => {
	try {
		const { data } = await instance.get(`/article/${id}`)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const likeArticle = async (id) => {
	try {
		const { data } = await instance.post(`/likeArticle`, { id })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? ARTICLE

// !! USER
export const auth = async (type, form) => {
	try {
		const { data } = await instance.post(`/auth`, { type, ...form })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const autoAuth = async () => {
	try {
		const { data } = await instance.post(`/autoAuth`)
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? USER
