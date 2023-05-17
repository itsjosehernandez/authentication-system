import { toast } from "react-toastify";
const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			token: localStorage.getItem("token") || null,
			message: null,
			// creando store para almacenar productos
			products: [],
			productSearch: [],
			transacciones: [],
			user: localStorage.getItem("email") || ""
		},
		actions: {
			//FETCH REGISTRO DE USUARIO 
			handleRegister: async (email, password, pay) => {
				// Previene el refrescamiento predeterminado de los form
				console.log(email, password, pay)
				const response = await fetch(`${process.env.BACKEND_URL}/api/registro`, {
					method: "POST",
					body: JSON.stringify({ "email": email, "password": password, "pay": pay }),
					headers: { "Content-Type": "application/json" },
				})
				if (!response.ok) return alert("hubo un error con la solicitud")
				console.log("Registro exitoso")
			},
			//FECTH LOGIN DE USUARIO
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
				setStore({ ...store, token: data.access_token, user: data.email });
				JSON.stringify(localStorage.setItem("token", data.access_token));
				JSON.stringify(localStorage.setItem("email", data.email));
				return true;
			},
			//CERRAR SECCION
			handleLogout: () => {
				localStorage.removeItem("token")
				setStore({ ...getStore().store, token: null });
				return true
			},
			//BUSCAR PRODUCTOS
			handleSearch: async (name) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/search`, {
						method: "POST",
						body: JSON.stringify({ "name": name }),
						headers: { "Content-Type": "application/json" }
					});
					if (response.ok) {
						const body = await response.json()
						setStore({ ...getStore().store, productSearch: body })
						return true
					} else if (response.status == 404) {
						console.log("Producto no encontrado")
						return false
					}

				} catch (error) {
					console.log(error)
				}
			},

			getProducts: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/products`, {
						headers: { "Content-Type": "application/json" }
					});
					if (response.ok) {
						const body = await response.json()
						setStore({ ...getStore().store, products: body.products })
						return true
					} else if (response.status == 404) {
						console.log("Producto no encontrado")
						return false
					}

				} catch (error) {
					console.log(error)
				}
			},
			//CREAR PRODUCTO
			handleCreateProduct: async (data) => {
				let token = localStorage.getItem("token")
				console.log(data)
				const formData = new FormData()
				formData.append("name", data.name)
				formData.append("price", data.price)
				formData.append("status", data.status)
				formData.append("product_img", data.product_img[0])
				const response = await fetch(`${process.env.BACKEND_URL}/api/product`, {
					method: "POST",
					body: formData,
					headers: { "Authorization": `Bearer ${token}` }
				})
				if (!response.ok) return toast.error("hubo un error con la creacion del producto")
				getActions().getUserProducts()
				getActions().getProducts()
				toast.success("Producto creado con exito")
			},

			getUserProducts: async () => {
				let token = localStorage.getItem("token")
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/user-products`, {
						headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
					});
					if (response.ok) {
						const body = await response.json()
						setStore({ user_products: body.products })
						return true
					} else if (response.status == 404) {
						console.log("Usuario no tiene productos")
						return false
					}

				} catch (error) {
					console.log(error)
				}
			},

			handleTransaccion: async (product_id, transaccion_status) => {
				console.log(product_id, transaccion_status)
				const response = await fetch(`${process.env.BACKEND_URL}/api/transaccion`, {
					method: "POST",
					body: JSON.stringify({ "product_id": product_id, "transaccion_status": transaccion_status }),
					headers: { "Content-Type": "application/json", authorization: `Bearer ${getStore().token}` }
				})
				if (!response.ok) return alert("hubo un error con la transaccion")
				toast("Transaccion creada con exito")
			},
			getTransacciones: async () => {
				const response = await fetch(`${process.env.BACKEND_URL}/api/transaccion`, {
					method: "GET",
					headers: { "Content-Type": "application/json", authorization: `Bearer ${getStore().token}` }
				})
				if (!response.ok) return alert("hubo un error con la transaccion")
				const data = await response.json()
				const store = getStore()
				setStore({ ...store, transacciones: data.transacciones })
			},
			deleteProduct: async (id) => {

				const response = await fetch(`${process.env.BACKEND_URL}/api/delete/${id}`, {
					method: "DELETE",
					headers: { authorization: `Bearer ${getStore().token}` }
				})
				if (response.ok) {
					toast.success("producto borrado exitosamente")


				} else {
					toast.error("ha ocurrido un error")
				}

			}
		},
	}
}

export default getState;
