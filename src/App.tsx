import { useState } from "react";
import InteractiveForm from "./components/InteractiveForm";
import {
    GeneralInfo as TGeneralInfo,
    EducationExp as TEducationExp,
    PracticalExp as TPracticalExp,
} from "./types";
import GeneralInfo from "./components/GeneralInfo";
import EducationExp from "./components/EducationExp";
import PracticalExp from "./components/PracticalExp";

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

    const [practicalExp, setPracticalExp] = useState({
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        startDate: new Date(),
        endDate: new Date(),
    });

    function handleGeneralInfoChange(generalInfo: TGeneralInfo) {
        setGeneralInfo(generalInfo);
    }

    function handleEducationExpChange(educationExp: TEducationExp) {
        setEducationExp(educationExp);
    }

    function handlePracticalExpChange(practicalExp: TPracticalExp) {
        setPracticalExp(practicalExp);
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
                <PracticalExp
                    data={practicalExp}
                    handleDataChange={handlePracticalExpChange}
                />
            </InteractiveForm>
            <div>
                <h2>preview</h2>
            </div>
        </div>
    );
}

export default App;
