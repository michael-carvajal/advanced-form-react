import { createContext, useContext, useState } from 'react';

export const SensoryPreferencesContext = createContext();
export default function SensoryPreferencesProvider(props) {
    const [q1, setQ1] = useState("")
    const [q2, setQ2] = useState("")
    const [q3, setQ3] = useState("")
    const [q4, setQ4] = useState("")
    const [q5, setQ5] = useState("")
    const [q6, setQ6] = useState("")
    const [q7, setQ7] = useState("")
    const [q8, setQ8] = useState("")
    const [q9, setQ9] = useState("")
    const [q10, setQ10] = useState("")
    const [q11, setQ11] = useState("")
    const [q12, setQ12] = useState("")
    const [q13, setQ13] = useState("")
    const [q14, setQ14] = useState("")
    const [q15, setQ15] = useState("")
    const [visual, setVisual] = useState(0)
    const [auditory, setAuditory] = useState(0)
    const [kinesthetic, setKinesthetic] = useState(0)


    return (
        <SensoryPreferencesContext.Provider
            value={{
                q1, setQ1,
                q2, setQ2,
                q3, setQ3,
                q4, setQ4,
                q5, setQ5,
                q6, setQ6,
                q7, setQ7,
                q8, setQ8,
                q9, setQ9,
                q10, setQ10,
                q11, setQ11,
                q12, setQ12,
                q13, setQ13,
                q14, setQ14,
                q15, setQ15,
                visual, setVisual,
                auditory, setAuditory,
                kinesthetic, setKinesthetic
            }}
        >
            {props.children}
        </SensoryPreferencesContext.Provider>
    )
}
export const CustomSensoryPreferences = () => useContext(SensoryPreferencesContext)
