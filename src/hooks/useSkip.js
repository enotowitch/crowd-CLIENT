import { useState } from "react"

export default function useSkip(addskip) { // addskip=4/8/50 = how many to add

	// onClick to btn showMore skip+=5 => goes to server => skip 5,10,15...
	const [skip, skipSet] = useState(0)
	function showMore() {
		skipSet(prev => prev + addskip) // 0+5/5+5/10+5/15+5...
	}

	return (
		// first NOT CORRECT query to server is: skip 0 limit 0
		// first CORRECT query to server is: skip 0 limit 4
		// give 4/8/50 posts on first server query
		{ skip, limit: addskip, showMore }
	)
}