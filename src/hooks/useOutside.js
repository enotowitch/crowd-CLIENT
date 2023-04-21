import { useState, useEffect, useRef } from "react"

// * hides Component which is inside <div ref={ref}>...</div> on click outside
// * how it works: check Popup.js 
// * + add `ignoreOutside` to btns, icons, etc... which must display inner content anyway
export default function useOutside(initialIsVisible) {
	const [isComponentVisible, isComponentVisibleSet] = useState(initialIsVisible)
	const ref = useRef(null)

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			if (event.target.getAttribute("ignoreOutside")) {
				isComponentVisibleSet(true)
				return
			}
			isComponentVisibleSet(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [])

	return { ref, isComponentVisible, isComponentVisibleSet }
}