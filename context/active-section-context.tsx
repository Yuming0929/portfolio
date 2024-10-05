'use client';
import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";



interface ActiveSectionContextProviderProps {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({children}: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // keep track of time of the last click to prevent the active section from
    //changing when the user clicks on a link to the current active section

    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
            {children}
        </ActiveSectionContext.Provider>
    )
};

export default ActiveSectionContextProvider

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if(context === null){
        throw new Error(
            ""
        );
    }
    return context;
}