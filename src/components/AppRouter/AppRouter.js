import Articles from "../Articles/Articles"
import ArticleFull from "../Articles/ArticleFull"
import { Routes, Route } from "react-router-dom"
import AddArticle from "../Articles/AddArticle"
import AddCompany from "../Company/AddCompany"
import Companies from "../Company/Companies"
import CompanyFull from "../Company/CompanyFull"
import Home from "../Home/Home"
import AddBonus from "../Bonus/AddBonus"
import Bonuses from "../Bonus/Bonuses"
import BonusFull from "../Bonus/BonusFull"
import Aboutus from "../Aboutus/Aboutus"
import AddInvestment from "../Investment/AddInvestment"
import Writeus from "../Writeus/Writeus"
import Dashboard from "../Dashboard/Dashboard"
import Click from "../Forms/Click"
import Legal from "../Aboutus/Legal";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import Profile from "../Profile/Profile"
import { useLocation } from "react-router-dom"

export default function AppRouter() {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [useLocation().pathname])

	const { user } = useContext(Context)

	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="articles" element={<Articles skip={50} />} />
			<Route exact path="article/:articleId" element={<ArticleFull />} />
			<Route exact path="companies" element={<Companies skip={50} />} />
			<Route exact path="company/:companyId" element={<CompanyFull />} />
			<Route exact path="bonuses" element={<Bonuses skip={50} />} />
			<Route exact path="bonus/:bonusId" element={<BonusFull />} />
			<Route exact path="aboutus" element={<Aboutus />} />
			<Route exact path="writeus" element={<Writeus />} />
			<Route exact path="legal" element={<Legal />} />

			{/* USER ROUTES */}
			{user &&
				<>
					<Route exact path="investments" element={<AddInvestment />} />
					<Route exact path="editInvestment/:investmentId" element={<AddInvestment />} />
					<Route exact path="dashboard" element={<Dashboard />} />
					<Route exact path="profile" element={<Profile />} />
				</>
			}

			{/* ADMIN & Author ROUTES */}
			{(user?.isAdmin || user?.isAuthor) &&
				<>
					<Route exact path="add-article" element={<AddArticle />} />
					<Route exact path="editArticle/:articleId" element={<AddArticle />} />
					<Route exact path="add-company" element={<AddCompany />} />
					<Route exact path="editCompany/:companyId" element={<AddCompany />} />
					<Route exact path="add-bonus" element={<AddBonus />} />
					<Route exact path="editBonus/:bonusId" element={<AddBonus />} />
				</>
			}

			{/* click Login if no user */}
			<Route path="*" element={<Click />} />
		</Routes>
	)
}