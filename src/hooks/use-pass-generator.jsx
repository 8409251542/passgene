import { useState } from 'react';

const usePasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [errorMsg, setError] = useState("");

    const generatePassword = (checkboxData, length) => {
        let charset = "";
        let generatedPsw = "";

        const selectedOption = checkboxData.filter((checkBox) => checkBox.state);

        if (selectedOption.length === 0) {
            setError("Select at least one!");
            setPassword("");
            return;
        }

        selectedOption.forEach((element) => {
            switch (element.title) {
                case "Include Uppercase Letter":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Numbers":
                    charset += "1234567890";
                    break;
                case "Include Lowercase Letter":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Symbols":
                    charset += "~!@#$%^&*()_+}{`-=][;'/.,;";
                    break;
            }
        });

        for (let index = 0; index < length; index++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPsw += charset[randomIndex];
        }

        setPassword(generatedPsw);
        setError("");
    };

    return { password, errorMsg, generatePassword };
};

export default usePasswordGenerator;
