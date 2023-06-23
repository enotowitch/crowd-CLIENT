import axios from "axios"
import { baseURL } from "./consts"

const instance = axios.create({
	baseURL: baseURL
})

instance.interceptors.request.use(config => {
	config.headers.Authorization = localStorage.getItem("token")
	return config
})

// !! POST (general for article,company,bonus...)
export const likePost = async (id, postType) => {
	try {
		const { data } = await instance.post(`/likePost`, { id, postType })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getPosts = async (skip, limit, postType) => {
	try {
		const { data } = await instance.post("/getPosts", { skip, limit, postType })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const addPost = async (formAndValue, postType) => {
	try {
		const { data } = await instance.post("/addPost", { ...formAndValue, postType })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? POST

// !! ARTICLE
export const getArticle = async (id) => {
	try {
		const { data } = await instance.get(`/article/${id}`)
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

export const userChangeImg = async (imgName) => {
	try {
		const { data } = await instance.post("/userChangeImg", { imgName })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const userChangeName = async (newName) => {
	try {
		const { data } = await instance.post("/userChangeName", { newName })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? USER

// !! PERMISSION (ADMIN)
export const addPermission = async (arr) => {
	try {
		const { data } = await instance.post("/addPermission", { arr })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getPermissions = async () => {
	try {
		const { data } = await instance.post("/getPermissions")
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? PERMISSION (ADMIN)

// !! COMMENT
export const addComment = async (formAndValue, postId, postType) => {
	try {
		const { data } = await instance.post(`/addComment`, { ...formAndValue, postId, postType })
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getComments = async (postId, skip, postType) => {
	try {
		const { data } = await instance.post(`/getComments`, { postId, skip, postType })
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
export const getCompany = async (id) => {
	try {
		const { data } = await instance.get(`/company/${id}`)
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

export const saveRadarImg = async (base64Img, name) => {
	try {
		const { data } = await instance.post("/saveRadarImg", { base64Img, name })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? ADD IMAGE

// !! BONUS
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

export const filterRevenue = async (platform) => {
	try {
		const { data } = await instance.post(`/filterRevenue`, { platform })
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