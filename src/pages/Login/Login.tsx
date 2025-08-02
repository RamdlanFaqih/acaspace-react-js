import { useState } from "react";
import { useNavigate } from "react-router";


const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const userDatabase = {
        email: "test@gmail.com",
        password: "@Password123456"
    }

    const tokenDatabase= "123-token-abc"

    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email || !password) {
            // OR
            alert('Email atau Password tidak boleh kosong')
            return
        }

        if (email !== userDatabase.email && password !== userDatabase.password) {
            alert('Email atau Password salah')
            return
        }
        localStorage.setItem('token', tokenDatabase)
        navigate('/')
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <h1 className="login-title">Selamat Datang!</h1>
                <p className="login-subtitle">Silakan masuk untuk melanjutkan</p>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                                placeholder="contoh@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                                placeholder="Masukkan password Anda"
                            />
                        </div>

                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>
             
                <div className="login-footer">
                    <p>Belum punya akun? <a href="#">Daftar di sini</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;