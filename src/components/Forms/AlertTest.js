export default function AlertTest() {
	function alert_() {
		if (localStorage.getItem("alert")) {
			return
		}
		if (window.confirm("DEAR CLIENT! This site is hosted for free, so it can load up to 30-60 seconds, your site will load INSTANTLY!")) {
			localStorage.setItem("alert", true)
		}
	}
	return (
		alert_()
	)
}