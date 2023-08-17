import React from "react";

export default function InteractiveForm({ children }: React.PropsWithChildren) {
    return <div className="form">{children}</div>;
}
