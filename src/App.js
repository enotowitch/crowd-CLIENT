import React, { useEffect } from "react"
import Header from "./components/Navs/Header"
import Banner from "./components/Banner/Banner"
import Popup from "./components/Popup/Popup"
import Menu from "./components/Navs/Menu"
import Footer from "./components/Navs/Footer"
import ScrollTo from "./components/Navs/ScrollTo"
import AppRouter from "./components/AppRouter/AppRouter"
import Navs from "./components/Navs/Navs"
import useAuthGoogle from "./hooks/useAuthGoogle"

export default function App() {

	// TODO: move to Context
	const { getUser } = useAuthGoogle()
	useEffect(() => { getUser() }, [])

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

		</div>
	)
}