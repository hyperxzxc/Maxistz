import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Слово 1",
                    "Слово 2",
                    "Слово 3",
                    "Слово 4",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
