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

export const deleteArticle = async (id) => {
	try {
		const { data } = await instance.post(`/deleteArticle`, { id })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const editArticle = async (id, formAndValue) => {
	try {
		const { data } = await instance.post(`/editArticle`, { id, ...formAndValue })
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

// !! COMMENT
export const addComment = async (value, articleId) => {
	try {
		const { data } = await instance.post(`/addComment`, { value, articleId })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getComments = async (articleId) => {
	try {
		const { data } = await instance.post(`/getComments`, { articleId })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const rateComment = async (act, commentId) => {
	try {
		const { data } = await instance.post(`/rateComment`, { act, commentId })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? COMMENT

// !! SUBSCRIBER
export const subscribe = async (form) => {
	try {
		const { data } = await instance.post(`/subscribe`, { ...form })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? SUBSCRIBER

// !! COMPANY
export const addCompany = async (formAndValue) => {
	try {
		const { data } = await instance.post("/addCompany", { ...formAndValue })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getCompany = async (id) => {
	try {
		const { data } = await instance.get(`/company/${id}`)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getCompanies = async () => {
	try {
		const { data } = await instance.get("/getCompanies")
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? COMPANY

// !! ADD IMAGE
export const addImg = async (formData) => {
	try {
		const { data } = await instance.post("/upload", formData)
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? ADD IMAGE
