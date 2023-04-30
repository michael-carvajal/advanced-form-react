import sample from '../../_assets/sample.json';
import { CustomSampleSurveyHook } from '../Context/SampleSurveyContext';
import MCQ from './MCQ'
import SingleCR from './SingleCR'
const SampleSurvey = () => {
    const { MCQ1, setMCQ1,
        MCQ2, setMCQ2, singleCR1, setSingleCR1,
        singleCR2, setSingleCR2, feedback, setFeedback } = CustomSampleSurveyHook()

    const handleSubmit = (e) => {
        e.preventDefault()

        const surveyObj = {
            singleCR1, MCQ1,
            singleCR2, MCQ2, feedback
        }
        console.log(surveyObj);
        setMCQ1("")
        setMCQ2("")
        setSingleCR1("")
        setSingleCR2("")
        setFeedback("")
    }

    // console.log(mcqs);
    return (
        <form className='sample-survey' onSubmit={handleSubmit}>

            <h2 style={{ textAlign: "center", fontSize: '40px' }}>{sample.name}</h2>
            <p style={{ fontSize: '20px' }}>{sample.instructions}</p>
            <MCQ sample={sample} />
            <SingleCR sample={sample} />


            <button >Submit</button>
        </form>
    )
}

export default SampleSurvey
