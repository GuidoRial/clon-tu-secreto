import React from "react";
import "./Secret.css";

function Secret({ secret }) {

    return (
        <div className="secret">
            <header className="secret-header">
                Tengo {secret.edad} años y mi sexo es {secret.sexo}
            </header>
            <div className="secret-text">{secret.secreto}</div>
        </div>
    );
}

export default Secret;
