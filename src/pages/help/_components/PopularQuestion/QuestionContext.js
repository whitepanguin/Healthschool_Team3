import React, { createContext, useState, useContext } from 'react';

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState("");

    return (
        <QuestionContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </QuestionContext.Provider>
    );
};

export const useQuestion = () => useContext(QuestionContext);
