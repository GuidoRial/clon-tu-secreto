import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
    const [secrets, setSecrets] = useState([]);
    const [edad, setEdad] = useState(0);
    const [sexo, setSexo] = useState("");
    const [secreto, setSecreto] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/getSecrets").then((response) => {
            setSecrets(response.data);
        });
    }, []);

    const sendSecret = () => {
        Axios.post("http://localhost:3001/createSecret", {
            edad,
            sexo,
            secreto,
        }).then((response) => {
            setSecrets([...secrets, { edad, sexo, secreto }]);
        });
    };

    return (
        <div className="App">
            <div className="secrets-display">
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
            </form>
        </div>
    );
}

export default App;
