import { EducationExp } from "../types";
import { dateIntoInput } from "../utility";
import { useState } from "react";

export default function EducationExp({
    data,
    handleDataChange,
    handleSave,
}: {
    data: EducationExp;
    handleDataChange: (data: EducationExp) => void;
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
                <label htmlFor="school-name">School name: </label>
                <input
                    type="text"
                    id="school-name"
                    value={data.schoolName}
                    onChange={(e) => {
                        handleDataChange({
                            ...data,
                            schoolName: e.target.value,
                        });
                    }}
                />
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    id="title"
                    value={data.title}
                    onChange={(e) => {
                        handleDataChange({ ...data, title: e.target.value });
                    }}
                />
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
                <div>School name: {data.schoolName}</div>
                <div>Title: {data.title}</div>
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
