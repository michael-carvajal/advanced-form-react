import { createContext, useContext, useState } from 'react';

export const SampleSurveyContext = createContext();
export default function SampleSurveyProvider(props) {
    const [MCQ1, setMCQ1] = useState("")
    const [MCQ2, setMCQ2] = useState("")

    return (
        <SampleSurveyContext.Provider
            value={{
                MCQ1, setMCQ1,
MCQ2, setMCQ2
            }}
        >
            {props.children}
        </SampleSurveyContext.Provider>
    )
}
export const CustomSampleSurveyHook = () => useContext(SampleSurveyContext)
