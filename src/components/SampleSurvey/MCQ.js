import { useEffect } from "react";
import { CustomSampleSurveyHook } from "../Context/SampleSurveyContext";

const MCQ = ({ sample }) => {
    const mcqs = sample.questions.filter(question => question.type === "mcq")
    // console.log(mcqs);
    const { MCQ1, setMCQ1,
MCQ2, setMCQ2 } = CustomSampleSurveyHook()

    useEffect(() => {
        // const errors = {}
    })
// console.log(MCQ1, MCQ2);
    return (
        <div className='mcq'>
            {mcqs.map((question, questionIndex) => {

                return (
                    <div key={questionIndex}>
                        <div className="question">
                            {question.stem}
                        </div>
                        {question.options.map((option, index) => {
                            const questionChecked = questionIndex === 0 ? MCQ1 === option.text : MCQ2 === option.text
                            // console.log(questionChecked);
                            return (
                                <div className="q-choice" key={index}>
                                    <label htmlFor={question.stem} >
                                        {option.text}
                                    </label>
                                    <input type="radio" name={`MCQ#${questionIndex}`} checked={questionChecked} value={option.text}
                                        onChange={(e) => questionIndex === 0 ? setMCQ1(e.target.value): setMCQ2(e.target.value)}
                                    />
                                </div >
                            )

                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default MCQ
