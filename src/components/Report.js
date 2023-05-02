import { CustomSensoryPreferences } from "./Context/SensoryPreferencesContext"

const Report = () => {
    const {visual, auditory, kinesthetic} = CustomSensoryPreferences()
    return (
        <div className="report">
            <h2>Here are your results</h2>
            <div className="results">
                <div><p>Visual</p><p>{Math.floor(visual * 100) + "%" }</p></div>
                <div><p>Auditory</p><p>{Math.floor(auditory * 100) + "%" }</p></div>
                <div><p>Kinesthetic</p><p>{Math.floor(kinesthetic * 100) + "%" }</p></div>
            </div>
        </div>
    )
}

export default Report
