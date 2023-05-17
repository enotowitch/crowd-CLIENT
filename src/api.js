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

export const getArticles = async (skip) => {
	try {
		const { data } = await instance.post("/getArticles", { skip })
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

export const forgot = async (email) => {
	try {
		const { data } = await instance.post(`/forgot`, { email })
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

export const getComments = async (articleId, skip) => {
	try {
		const { data } = await instance.post(`/getComments`, { articleId, skip })
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

export const getCompanies = async (skip) => {
	try {
		const { data } = await instance.post("/getCompanies", { skip })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const deleteCompany = async (id) => {
	try {
		const { data } = await instance.post(`/deleteCompany`, { id })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const editCompany = async (id, formAndValue) => {
	try {
		const { data } = await instance.post(`/editCompany`, { id, ...formAndValue })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getTVL = async () => {
	try {
		const { data } = await instance.get("/getTVL")
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

// !! BONUS
export const addBonus = async (formAndValue) => {
	try {
		const { data } = await instance.post("/addBonus", { ...formAndValue })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getBonuses = async (skip) => {
	try {
		const { data } = await instance.post("/getBonuses", { skip })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getBonus = async (id) => {
	try {
		const { data } = await instance.get(`/bonus/${id}`)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const deleteBonus = async (id) => {
	try {
		const { data } = await instance.post(`/deleteBonus`, { id })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const editBonus = async (id, formAndValue) => {
	try {
		const { data } = await instance.post(`/editBonus`, { id, ...formAndValue })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? BONUS

// !! INVESTMENT
export const addInvestment = async (formAndValue) => {
	try {
		const { data } = await instance.post("/addInvestment", { ...formAndValue })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getInvestments = async (skip) => {
	try {
		const { data } = await instance.post("/getInvestments", { skip })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const removeInvestment = async (id) => {
	try {
		const { data } = await instance.post(`/removeInvestment`, { id })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const deleteInvestment = async (id) => {
	try {
		const { data } = await instance.post(`/deleteInvestment`, { id })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getInvestment = async (id) => {
	try {
		const { data } = await instance.get(`/investment/${id}`)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const editInvestment = async (id, formAndValue) => {
	try {
		const { data } = await instance.post(`/editInvestment`, { id, ...formAndValue })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getInvested = async () => {
	try {
		const { data } = await instance.post(`/getInvested`)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const filterRevenue = async (platform, end) => {
	try {
		const { data } = await instance.post(`/filterRevenue`, { platform, end })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? INVESTMENT

// !! WRITEUS
export const writeus = async (form) => {
	try {
		const { data } = await instance.post(`/writeus`, { ...form })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? WRITEUS