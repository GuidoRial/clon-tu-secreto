import Axios from "axios";
import React, { useEffect, useState } from "react";
import Secret from "./Secret/Secret";
import "./SecretsContainer.css";

function SecretsContainer() {
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState("masculino");
    const [secret, setSecret] = useState("");
    const [secrets, setSecrets] = useState([]);
    const [writeSecret, setWriteSecret] = useState(false);

    const sendSecret = (e) => {
        Axios.post("http://localhost:3001/createSecret", {
            edad: age,
            sexo: sex,
            secreto: secret,
        }).then((response) => {
            setSecrets([
                ...secrets,
                {
                    edad: age,
                    sexo: sex,
                    secreto: secret,
                },
            ]);
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/getSecrets").then((response) => {
            setSecrets(response.data);
        });
    }, []);

    return (
        <section className="secrets-container">
            <button
                className="create-secret"
                onClick={() => setWriteSecret(!writeSecret)}
            >
                Escribir
            </button>
            {writeSecret && (
                <form className="new-secret-form">
                    <div className="user-info">
                        <span>Tengo</span>
                        <input
                            type="number"
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <span>años y mi sexo es</span>
                        <select
                            type="text"
                            placeholder="Sexo..."
                            onChange={(e) => setSex(e.target.value)}
                        >
                            <option value="hombre">masculino</option>
                            <option value="mujer">femenino</option>
                            <option value="otro">otro</option>
                        </select>
                    </div>
                    <div>
                        <textarea
                            className="secret-input"
                            type="text"
                            placeholder="¿Cuál es tu secreto?"
                            onChange={(e) => setSecret(e.target.value)}
                        ></textarea>
                    </div>
                    <button className="send-secret" onClick={sendSecret}>
                        ENVIAR
                    </button>
                </form>
            )}
            {secrets.map((secret) => (
                <Secret key={secret._id} secret={secret} />
            ))}
        </section>
    );
}

export default SecretsContainer;
