import { PracticalExp } from "../types";
import { dateIntoInput } from "../utility";
import { useState } from "react";

export default function PracticalExp({
    data,
    handleDataChange,
    handleSave,
}: {
    data: PracticalExp;
    handleDataChange: (data: PracticalExp) => void;
    handleSave: () => void;
}) {
    const [editable, setEditable] = useState(true);

    function handleDateChange(startDate: Date, endDate: Date) {
        if (startDate >= endDate) return;

        handleDataChange({ ...data, startDate, endDate });
    }

    if (editable) {
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setEditable(false);
                    handleSave();
                }}
            >
                <label htmlFor="company-name">Company name: </label>
                <input
                    type="text"
                    id="company-name"
                    value={data.companyName}
                    onChange={(e) => {
                        handleDataChange({
                            ...data,
                            companyName: e.target.value,
                        });
                    }}
                />
                <label htmlFor="position-title">Position title: </label>
                <input
                    type="text"
                    id="position-title"
                    value={data.positionTitle}
                    onChange={(e) => {
                        handleDataChange({
                            ...data,
                            positionTitle: e.target.value,
                        });
                    }}
                />
                <label htmlFor="main-responsibilities">
                    Main responsibilities:{" "}
                </label>
                <textarea
                    name="main-responsibilities"
                    id="main-responsibilities"
                    cols={30}
                    rows={10}
                    value={data.mainResponsibilities}
                    onChange={(e) => {
                        handleDataChange({
                            ...data,
                            mainResponsibilities: e.target.value,
                        });
                    }}
                ></textarea>
                <label htmlFor="start-date">Start date: </label>
                <input
                    type="date"
                    id="start-date"
                    value={dateIntoInput(data.startDate)}
                    onChange={(e) => {
                        handleDateChange(
                            new Date(e.target.value),
                            data.endDate
                        );
                    }}
                />
                <label htmlFor="end-date">End date: </label>
                <input
                    type="date"
                    id="end-date"
                    value={dateIntoInput(data.endDate)}
                    onChange={(e) => {
                        handleDateChange(
                            data.startDate,
                            new Date(e.target.value)
                        );
                    }}
                />
                <button>Save</button>
            </form>
        );
    } else {
        return (
            <div>
                <div>Company name: {data.companyName}</div>
                <div>Position title: {data.positionTitle}</div>
                <div>Main responsibilities: {data.mainResponsibilities}</div>
                <div>Start date: {data.startDate.toDateString()}</div>
                <div>End date: {data.endDate.toDateString()}</div>
                <button
                    onClick={() => {
                        setEditable(true);
                    }}
                >
                    Edit
                </button>
            </div>
        );
    }
}
