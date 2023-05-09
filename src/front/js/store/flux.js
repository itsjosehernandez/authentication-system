
const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			token: localStorage.getItem("token") || null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			handleRegister: async (email, password, pay) => {
				// Previene el refrescamiento predeterminado de los form
				console.log(email, password, pay)
				const response = await fetch(`${process.env.BACKEND_URL}/api/registro`, {
					method: "POST",
					body: JSON.stringify({ "email": email, "password": password, "pay": pay }),
					headers: { "Content-Type": "application/json" }
				})
				if (!response.ok) return alert("hubo un error con la solicitud")
				console.log("Registro exitoso")
			},

			handleLogin: async (email, password) => {
				console.log(email, password)
				const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
					method: "POST",
					body: JSON.stringify({ "email": email, "password": password }),
					headers: { "Content-Type": "application/json" }
				})
				if (!response.ok) {
					alert("no pudo ingresar")
					localStorage.removeItem("token")
					return false
				}

				const data = await response.json();
				const store = getStore();
				setStore({ ...store, token: data.access_token });
				JSON.stringify(localStorage.setItem("token", data.access_token));
				return true;

			}
		}
	}
};



export default getState;
