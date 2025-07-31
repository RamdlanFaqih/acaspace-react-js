const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Selamat Datang!</h1>
        <p className="login-subtitle">Silakan masuk untuk melanjutkan</p>
        
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="contoh@email.com" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
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