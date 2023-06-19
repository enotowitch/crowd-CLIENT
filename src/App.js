import React from "react"
import Header from "./components/Navs/Header"
import Banner from "./components/Banner/Banner"
import Popup from "./components/Popup/Popup"
import Menu from "./components/Navs/Menu"
import Footer from "./components/Navs/Footer"
import ScrollTo from "./components/Navs/ScrollTo"
import AppRouter from "./components/AppRouter/AppRouter"
import Navs from "./components/Navs/Navs"
import AlertTest from "./components/Forms/AlertTest"

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
					<Navs />
				</div>

				<AppRouter />
			</div>

			<Footer />
			<AlertTest />

		</div>
	)
}