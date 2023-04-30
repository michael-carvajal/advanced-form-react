import { createContext, useContext, useState } from 'react';

export const SampleSurveyContext = createContext();
export default function SampleSurveyProvider(props) {
    const [MCQ1, setMCQ1] = useState("")
    const [MCQ2, setMCQ2] = useState("")
    const [singleCR1, setSingleCR1] = useState("")
    const [singleCR2, setSingleCR2] = useState("")
    const [feedback, setFeedback] = useState("")

    return (
        <SampleSurveyContext.Provider
            value={{
                MCQ1, setMCQ1,
                MCQ2, setMCQ2, singleCR1, setSingleCR1,
                singleCR2, setSingleCR2, feedback, setFeedback
            }}
        >
            {props.children}
        </SampleSurveyContext.Provider>
    )
}
export const CustomSampleSurveyHook = () => useContext(SampleSurveyContext)
