import { baseURL } from "../consts";

// * used for token only => then token used by autoAuth
export default function useAuthGoogle() {

	const getUser = () => {
		fetch(`${baseURL}/auth/login/success`, {
			method: "GET",
			credentials: "include",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Credentials": true,
			},
		})
			.then((response) => {
				if (response.status === 200) return response.json();
				throw new Error("authentication has been failed!");
			})
			.then((resObject) => {
				resObject.token && localStorage.setItem("token", resObject.token)
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return { getUser }
}