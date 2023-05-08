export default function hideShowMore(resLength) {
	// * hide/show showMore btn
	// !! ".showMore"
	if (resLength === 0) {
		document.querySelector(".showMore").classList.add("dn")
	} else {
		document.querySelector(".showMore").classList.remove("dn")
	}
}