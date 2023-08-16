export default function InputWithLabel({
    type,
    name,
    label,
    value,
    onChange,
}: {
    type: string;
    name: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <>
            <label htmlFor={name}>{label}: </label>
            <input
                type={type}
                id={name}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
        </>
    );
}
