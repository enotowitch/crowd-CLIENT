import React from "react"
import TextEditor from "./components/TextEditor/TextEditor"
import Articles from "./components/Articles/Articles"
import ArticleFull from "./components/Articles/ArticleFull"
import { Routes, Route } from "react-router-dom"
import NavBottom from "./components/Navs/NavBottom"
import Header from "./components/Navs/Header"
import Banner from "./components/Banner/Banner"
import Popup from "./components/Popup/Popup"

export default function App() {

	return (
		<div className="app">

			<Header />
			<Banner />
			<Popup />

			<div className="app__mid">
				<NavBottom />

				<Routes>
					<Route exact path="add-article" element={<TextEditor />} />
					<Route exact path="articles" element={<Articles />} />
					<Route exact path="article/:id" element={<ArticleFull />} />
				</Routes>
			</div>

		</div>
	)
}