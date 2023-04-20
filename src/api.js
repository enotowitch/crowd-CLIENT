import axios from "axios"
import { baseURL } from "./consts"

const instance = axios.create({
	baseURL: baseURL
})

export const addArticle = async (value) => {
	try {
		const { data } = await instance.post("/addArticle", { value })
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
