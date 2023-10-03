import { useContext, createContext, useState } from "react";


const DisplayContext = createContext({
    setDisplay: null,
    display: ''
});

export function DisplayProvider({children}) {
    const [display, setDisplay] = useState('0');

    return (
        <DisplayContext.Provider value={{
            display,
            setDisplay
        }}>
            {children}
        </DisplayContext.Provider>
    );
}


export const useDisplay = () => {
    const displayContext = useContext(DisplayContext);
    return displayContext;
}

