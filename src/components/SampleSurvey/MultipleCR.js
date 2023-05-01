import { CustomSampleSurveyHook } from "../Context/SampleSurveyContext"

const MultipleCR = ({sample}) => {
    const chosenQuestion = sample.questions.filter(question => question.stem === "Why or Why Not?")
    const { MultipleCR, setMultipleCR } = CustomSampleSurveyHook()
    return (
        <div className="multiple-cr">
            <label>{chosenQuestion[0].stem}</label>
            <textarea value={MultipleCR} onChange={(e) => setMultipleCR(e.target.value)}></textarea>
        </div>
    )
}

export default MultipleCR
