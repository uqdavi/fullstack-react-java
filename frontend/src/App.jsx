import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });

    alert("Conta Criada");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App