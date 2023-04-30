import { useState } from "react";

const MCQ = ({ sample }) => {
    const mcqs = sample.questions.filter(question => question.type === "mcq")
    // console.log(mcqs);
    const [MCQ1, setMCQ1] = useState("")
    const [MCQ2, setMCQ2] = useState("")
    return (
        <div className='mcq'>
            {mcqs.map((question, questionIndex) => {

                return (
                    <div key={questionIndex}>
                        <div className="question">
                            {question.stem}
                        </div>
                        {question.options.map((option, index) => {
                            const questioChecked = questionIndex === 0 ? MCQ1 === option.text : MCQ2 === option.text
                            return (
                                <div className="q-choice" key={index}>
                                    <label htmlFor={question.stem} >
                                        {option.text}
                                    </label>
                                    <input type="radio" name={`MCQ#${questionIndex}`} checked={questioChecked} value={option.text}
                                        onChange={(e) => {
                                        setMCQ1(e.target.value)
                                    }}
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
