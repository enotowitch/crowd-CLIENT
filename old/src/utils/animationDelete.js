export default function animationDelete(res, e) {
	if (res.ok) {
		e.target.closest(".card")?.classList.add("animationDelete")
		setTimeout(() => {
			e.target.closest(".card")?.classList.add("dn")
		}, 500);
	}
}