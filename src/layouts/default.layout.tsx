import React from 'react';

interface props {
    children: React.ReactNode;
};

const containerStyles: React.CSSProperties = {
    maxWidth: "140ch",
    padding: "1rem",
    margin: "auto",
};

export const DefaultLayout: React.FC<props> = ({ children }) => {
    return (
        <div style={containerStyles}>
            {children}
        </div>
    );
};
