import React from 'react';

function App() {
    return (
        <div className="app">
            <h1>Selamat Datang di WORKA!</h1>
            <p>Frontend ini sedang dibangun oleh tim Frontend.</p>
            <div className="login-form">
                <input type="text" placeholder="Nomor HP atau Email" />
                <input type="password" placeholder="Kata Sandi" />
                <button>Masuk</button>
            </div>
        </div>
    );
}

export default App;
