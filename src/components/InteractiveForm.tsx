import React from "react";

export default function InteractiveForm({ children }: React.PropsWithChildren) {
    return (
        <div>
            <h2>Interactive form</h2>
            {children}
        </div>
    );
}
