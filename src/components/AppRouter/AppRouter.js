import useUser from "../../hooks/useUser";
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

export default function AppRouter() {

	const { user } = useUser()

	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="articles" element={<Articles />} />
			<Route exact path="article/:articleId" element={<ArticleFull />} />
			<Route exact path="companies" element={<Companies />} />
			<Route exact path="company/:companyId" element={<CompanyFull />} />
			<Route exact path="bonuses" element={<Bonuses />} />
			<Route exact path="bonus/:bonusId" element={<BonusFull />} />
			<Route exact path="aboutus" element={<Aboutus />} />
			<Route exact path="writeus" element={<Writeus />} />

			{/* USER ROUTES */}
			{user &&
				<>
					<Route exact path="add-article" element={<AddArticle />} />
					<Route exact path="editArticle/:articleId" element={<AddArticle />} />
					<Route exact path="add-company" element={<AddCompany />} />
					<Route exact path="editCompany/:companyId" element={<AddCompany />} />
					<Route exact path="add-bonus" element={<AddBonus />} />
					<Route exact path="editBonus/:bonusId" element={<AddBonus />} />
					<Route exact path="investments" element={<AddInvestment />} />
					<Route exact path="editInvestment/:investmentId" element={<AddInvestment />} />
					<Route exact path="dashboard" element={<Dashboard />} />
				</>
			}

			<Route path="*" element={<Click />} />
		</Routes>
	)
}