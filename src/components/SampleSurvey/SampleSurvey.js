import sample from '../../_assets/sample.json';
import MCQ from './MCQ'
const SampleSurvey = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // console.log(mcqs);
    return (
        <div className='sample-survey'>

            <h2 style={{ textAlign: "center", fontSize: '40px' }}>{sample.name}</h2>
            <p style={{ fontSize: '20px' }}>{sample.instructions}</p>
            <MCQ sample={sample} />


            <button onSubmit={handleSubmit}>Submit</button>
        </div>
    )
}

export default SampleSurvey
