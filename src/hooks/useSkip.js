import { useState } from "react"

export default function useSkip() {

	// onClick to btn showMore skip+=5 => goes to server => skip 5,10,15...
	const [skip, skipSet] = useState(0)
	function showMore() {
		skipSet(prev => prev + 12) // 0+5/5+5/10+5/15+5...
	}

	return (
		{ skip, showMore }
	)
}