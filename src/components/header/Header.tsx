import React from 'react';

type HeaderProps = {
    children?: React.ReactNode
}
const Header = ({ children }: HeaderProps) => {
    return (
        <header className="bg-cover bg-center h-60 flex flex-col items-center justify-center header">
            {/* <h2 className="text-xl text-white font-bold">Books</h2> */}
            {children}
        </header>
    )
};

export default Header;