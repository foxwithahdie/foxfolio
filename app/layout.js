import './globals.css';

export const metadata = {
    title: "Ram's Website",
    description: null,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            { children }
        </html>
    )
};
