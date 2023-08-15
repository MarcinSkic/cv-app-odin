import { useState } from "react";
import InteractiveForm from "./components/InteractiveForm";
import { GeneralInfo as TGeneralInfo } from "./types";
import { EducationExp as TEducationExp } from "./types";
import GeneralInfo from "./components/GeneralInfo";
import EducationExp from "./components/EducationExp";

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        submitted: false,
        fullname: "",
        email: "",
        phoneNumber: "",
    });

    const [educationExp, setEducationExp] = useState({
        schoolName: "",
        title: "",
        startDate: new Date(),
        endDate: new Date(),
    });

    function handleGeneralInfoChange(generalInfo: TGeneralInfo) {
        setGeneralInfo(generalInfo);
    }

    function handleEducationExpChange(educationExp: TEducationExp) {
        setEducationExp(educationExp);
    }

    return (
        <div className="app">
            <h1>CV generator</h1>
            <InteractiveForm>
                <GeneralInfo
                    data={generalInfo}
                    handleDataChange={handleGeneralInfoChange}
                />
                <EducationExp
                    data={educationExp}
                    handleDataChange={handleEducationExpChange}
                />
            </InteractiveForm>
            <div>
                <h2>preview</h2>
            </div>
        </div>
    );
}

export default App;
