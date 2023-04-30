import { CustomSampleSurveyHook } from "../Context/SampleSurveyContext"

const SingleCR = ({ sample }) => {
    const singles = sample.questions.filter(question => question.type === "cr" && question.lines === 1)
    const followUp = sample.questions.filter(question => question.type === "section")
    const feedbackObj = sample.questions.filter(question => question.stem === "Additional Feedback")
    const { singleCR1, setSingleCR1,
        singleCR2, setSingleCR2, feedback, setFeedback } = CustomSampleSurveyHook()
    // console.log(singleCR1, singleCR2);
    return (
        <div className="single-cr">
            <h2>{followUp[0].title}</h2>
            <p>{followUp[0].instructions}</p>
            {singles.map((question, index) => {
                return (
                    <div className="single-cr" key={index}>
                        <label>{question.stem}</label>
                        <input type="text" value={index === 0 ? singleCR1 : singleCR2} onChange={(e) => index === 0 ? setSingleCR1(e.target.value) : setSingleCR2(e.target.value)}></input>
                    </div>
                )
            })}
            <label>{feedbackObj[0].stem}</label>
            <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
        </div>
    )
}

export default SingleCR
