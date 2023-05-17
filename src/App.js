import React from "react"
import NavBottom from "./components/Navs/NavBottom"
import Header from "./components/Navs/Header"
import Banner from "./components/Banner/Banner"
import Popup from "./components/Popup/Popup"
import Menu from "./components/Navs/Menu"
import Footer from "./components/Navs/Footer"
import ScrollTo from "./components/Navs/ScrollTo"
import NavTop from "./components/Navs/NavTop"
import AppRouter from "./components/AppRouter/AppRouter"

export default function App() {

	return (
		<div className="app">

			<Header />
			<Banner />
			<Popup />
			<Menu />
			<ScrollTo className="header" />

			<div className="app__mid">
				<div className="fc g">
					<NavTop />
					<NavBottom />
				</div>

				<AppRouter />
			</div>

			<Footer />

		</div>
	)
}