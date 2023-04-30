import sample from '../../_assets/sample.json';
import MCQ from './MCQ'
const SampleSurvey = () => {


    // console.log(mcqs);
    return (
        <div className='sample-survey'>

            <h2 style={{ textAlign: "center", fontSize: '40px' }}>{sample.name}</h2>
            <p style={{ fontSize: '20px' }}>{sample.instructions}</p>
            <MCQ sample={sample} />
        </div>
    )
}

export default SampleSurvey
