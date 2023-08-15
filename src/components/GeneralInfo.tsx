import { GeneralInfo } from "../types";

export default function GeneralInfo({
    data,
    handleDataChange,
}: {
    data: GeneralInfo;
    handleDataChange: (data: GeneralInfo) => void;
}) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert("Saving general info");
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
}
