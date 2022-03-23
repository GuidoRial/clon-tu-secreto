import "./App.css";
import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import SecretsContainer from "./components/SecretsContainer/SecretsContainer";

function App() {







    return (
        <div className="App">
            <Header />
            
            <SecretsContainer />
            {/*<div className="secrets-display">
                {secrets.map((secret) => (
                    <div className="secret">
                        {secret.edad}
                        {secret.sexo}
                        {secret.secreto}
                    </div>
                ))}
            </div>
            <form>
                <input
                    type="number"
                    placeholder="Edad..."
                    onChange={(e) => setEdad(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Sexo..."
                    onChange={(e) => setSexo(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Secreto..."
                    onChange={(e) => setSecreto(e.target.value)}
                />
                <button onClick={sendSecret}>ENVIAR</button>
            </form> */}
        </div>
    );
}

export default App;
