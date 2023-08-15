import { useState } from "react";
import InteractiveForm from "./components/InteractiveForm";
import { GeneralInfo as TGeneralInfo } from "./types";
import GeneralInfo from "./components/GeneralInfo";

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        submitted: false,
        fullname: "",
        email: "",
        phoneNumber: "",
    });

    function handleGeneralInfoChange(generalInfo: TGeneralInfo) {
        setGeneralInfo(generalInfo);
    }

    return (
        <div className="app">
            <h1>CV generator</h1>
            <InteractiveForm>
                <GeneralInfo
                    data={generalInfo}
                    handleDataChange={handleGeneralInfoChange}
                />
            </InteractiveForm>
            <div>
                <h2>preview</h2>
            </div>
        </div>
    );
}

export default App;
