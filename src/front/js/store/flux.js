const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Guardar el token en el store 
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
			handleRegister: async (email, password, pay, event) => {
				// Previene el refrescamiento predeterminado de los form
				event.preventDefault()
				const response = await fetch(`${process.env.BACKEND_URL}/api/registro`, {
					method: "POST",
					body: JSON.stringify({ "email": email, "password": password, "pay": pay }),
					headers: { "Content-Type": "application/json" }
				})
				if (!response.ok) return alert("hubo un error con la solicitud")
				console.log("Registro exitoso")
			}
		}
	}
};


export default getState;
