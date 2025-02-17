
// eslint-disable-next-line react/prop-types
import {useState} from "react";

// eslint-disable-next-line react/prop-types
function Login({ onLogin }) {
    const API_URL = import.meta.env.VITE_API_URL;

    const [error, setError] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /**
     * Función para recibir los datos del formulario de login, llamar a la API Spring
     * y si el usuario-password son correctos visualiza las plantaciones de ese usuario
     * sino da mensaje de error de login
     * @param e
     */
    const submitForm = (e) => {
        e.preventDefault();

        //Comprobar usuario contraseña
        fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Indica que enviamos JSON
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => {
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("No autorizado. Debes iniciar sesión.");
                } else if (response.status === 403) {
                    throw new Error("Acceso prohibido. No tienes permisos.");
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            }
            return response.json();
        })
        .then(data => {
            console.log("Logueado:", data);
            sessionStorage.setItem("token", data.token);
            onLogin(); // Llama a la función para mostrar el componente principal
        })
        .catch(error => {
            console.log("Error en la API:", error.message);
            setError("⚠️ Usuario o contraseña incorrectos");
            setUsername("");
            setPassword("");
        });
    }

    return (
        <>
            <section className="bg-white">
                <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                    <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                        <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                            Login
                        </h2>

                        {error && <p className="text-red-500 text-sm py-4">{error}</p>}

                        <form onSubmit={submitForm}>
                            <div className="mb-4">
                                <label htmlFor="username" className="mb-2.5 block font-medium text-black dark:text-white">
                                    Username
                                </label>
                                <div className="relative">
                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="Enter your username"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="password" className="mb-2.5 block font-medium text-black dark:text-white">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="6+ Characters, 1 Capital letter"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mb-5">
                                <input
                                    id="submit"
                                    type="submit"
                                    value="Sign In"
                                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-gray transition hover:bg-opacity-90"
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </section>

        </>
)
}

export default Login;