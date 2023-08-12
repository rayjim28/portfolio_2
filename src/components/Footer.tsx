// src/components/Footer.tsx
import React from 'react';

function getCurrentYear() {
    return new Date().getFullYear();
}

const Footer: React.FC = () => {
    return (
        <footer className="text-white p-4">
            © {getCurrentYear()} Raymond Jimenez. All rights reserved.
        </footer>
    );
};

export default Footer;