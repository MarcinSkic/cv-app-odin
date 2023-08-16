import { useState, useEffect } from "react";
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
    const DATA_KEY = "CV_DATA";

    const [generalInfo, setGeneralInfo] = useState({
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

    useEffect(() => {
        const dataJSON = localStorage.getItem(DATA_KEY);
        if (dataJSON === null) return;

        const { generalInfo, educationExp, practicalExp } =
            JSON.parse(dataJSON);

        setGeneralInfo(generalInfo);
        setEducationExp({
            ...educationExp,
            startDate: new Date(educationExp.startDate),
            endDate: new Date(educationExp.endDate),
        });
        setPracticalExp({
            ...practicalExp,
            startDate: new Date(educationExp.startDate),
            endDate: new Date(educationExp.endDate),
        });
    }, []);

    function handleGeneralInfoChange(generalInfo: TGeneralInfo) {
        setGeneralInfo(generalInfo);
    }

    function handleEducationExpChange(educationExp: TEducationExp) {
        setEducationExp(educationExp);
    }

    function handlePracticalExpChange(practicalExp: TPracticalExp) {
        setPracticalExp(practicalExp);
    }

    function handleSave() {
        localStorage.setItem(
            DATA_KEY,
            JSON.stringify({
                generalInfo,
                educationExp,
                practicalExp,
            })
        );
    }

    return (
        <div className="app">
            <h1>CV generator</h1>
            <InteractiveForm>
                <GeneralInfo
                    data={generalInfo}
                    handleDataChange={handleGeneralInfoChange}
                    handleSave={handleSave}
                />
                <h2>Education</h2>
                <EducationExp
                    data={educationExp}
                    handleDataChange={handleEducationExpChange}
                    handleSave={handleSave}
                />
                <h2>Experience</h2>
                <PracticalExp
                    data={practicalExp}
                    handleDataChange={handlePracticalExpChange}
                    handleSave={handleSave}
                />
            </InteractiveForm>
            <div>
                <h2>preview</h2>
            </div>
        </div>
    );
}

export default App;
