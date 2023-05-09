import React from "react"
import Articles from "./components/Articles/Articles"
import ArticleFull from "./components/Articles/ArticleFull"
import { Routes, Route } from "react-router-dom"
import NavBottom from "./components/Navs/NavBottom"
import Header from "./components/Navs/Header"
import Banner from "./components/Banner/Banner"
import Popup from "./components/Popup/Popup"
import Menu from "./components/Navs/Menu"
import AddArticle from "./components/Articles/AddArticle"
import Footer from "./components/Navs/Footer"
import AddCompany from "./components/Company/AddCompany"
import Companies from "./components/Company/Companies"
import CompanyFull from "./components/Company/CompanyFull"
import ScrollTo from "./components/Navs/ScrollTo"
import Home from "./components/Home/Home"
import AddBonus from "./components/Bonus/AddBonus"
import Bonuses from "./components/Bonus/Bonuses"

export default function App() {

	return (
		<div className="app">

			<Header />
			<Banner />
			<Popup />
			<Menu />
			<ScrollTo className="header" />

			<div className="app__mid">
				<NavBottom />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="add-article" element={<AddArticle />} />
					<Route exact path="articles" element={<Articles />} />
					<Route exact path="article/:articleId" element={<ArticleFull />} />
					<Route exact path="editArticle/:articleId" element={<AddArticle />} />
					<Route exact path="add-company" element={<AddCompany />} />
					<Route exact path="companies" element={<Companies />} />
					<Route exact path="company/:companyId" element={<CompanyFull />} />
					<Route exact path="editCompany/:companyId" element={<AddCompany />} />
					<Route exact path="add-bonus" element={<AddBonus />} />
					<Route exact path="bonuses" element={<Bonuses />} />
				</Routes>
			</div>

			<Footer />

		</div>
	)
}