import { GeneralInfo } from "../types";
import { useState } from "react";

export default function GeneralInfo({
    data,
    handleDataChange,
    handleSave,
}: {
    data: GeneralInfo;
    handleDataChange: (data: GeneralInfo) => void;
    handleSave: () => void;
}) {
    const [editable, setEditable] = useState(true);

    if (editable) {
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setEditable(false);
                    handleSave();
                }}
            >
                <label htmlFor="fullname">Fullname: </label>
                <input
                    type="text"
                    id="fullname"
                    value={data.fullname}
                    onChange={(e) => {
                        handleDataChange({
                            ...data,
                            fullname: e.target.value,
                        });
                    }}
                />
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    value={data.email}
                    onChange={(e) => {
                        handleDataChange({
                            ...data,
                            email: e.target.value,
                        });
                    }}
                />
                <label htmlFor="phone-number">Phone number: </label>
                <input
                    type="number"
                    id="phone-number"
                    value={data.phoneNumber}
                    onChange={(e) => {
                        handleDataChange({
                            ...data,
                            phoneNumber: e.target.value,
                        });
                    }}
                />
                <button>Save</button>
            </form>
        );
    } else {
        return (
            <div>
                <div>Fullname: {data.fullname}</div>
                <div>Email: {data.email}</div>
                <div>Phone number: {data.phoneNumber}</div>
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
