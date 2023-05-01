import spi from "../../_assets/spi.json"
import { CustomSensoryPreferences } from "../Context/SensoryPreferencesContext"
const SensoryPreferences = () => {
    const questions = spi.questions.filter(question => question.type === "likert")
    const { q1, setQ1,
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
kinesthetic, setKinesthetic } = CustomSensoryPreferences();
    const questionValues = [q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        q11,
        q12,
        q13,
        q14,
        q15,]
    const handleRadioChange = (questionCode, value) => {
        switch (questionCode) {
            case 'q1':
                setQ1(value);
                break;
            case 'q2':
                setQ2(value);
                break;
            case 'q3':
                setQ3(value);
                break;
            case 'q4':
                setQ4(value);
                break;
            case 'q5':
                setQ5(value);
                break;
            case 'q6':
                setQ6(value);
                break;
            case 'q7':
                setQ7(value);
                break;
            case 'q8':
                setQ8(value);
                break;
            case 'q9':
                setQ9(value);
                break;
            case 'q10':
                setQ10(value);
                break;
            case 'q11':
                setQ11(value);
                break;
            case 'q12':
                setQ12(value);
                break;
            case 'q13':
                setQ13(value);
                break;
            case 'q14':
                setQ14(value);
                break;
            case 'q15':
                setQ15(value);
                break;
            default:
                break;
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const report = { "one":0, "two":0,"three":0};
        const one = [1, 4, 7, 10, 13];
        const two = [2, 5, 8, 11, 14];
        const three = [3, 6, 9, 12, 15];
        let totalPoints = 0;
        questionValues.forEach((value,index) => {
            const question = index + 1
            value = parseInt(value)
            if (one.includes(question)) {
                report.one += value
            }
            if (two.includes(question)) {
                report.two += value
            }
            if (three.includes(question)) {
                report.three += value
            }
            totalPoints+=value

        })
        setVisual(report.one /totalPoints)
        setAuditory(report.two /totalPoints)
        setKinesthetic(report.three /totalPoints)

        console.log(report, visual,auditory,kinesthetic, totalPoints);
    }
    return (
        <form onSubmit={handleSubmit}>
            {questions.map((question, index) => {

                return (
                    <div className="spiQuestion" key={question.code}>
                        <p>{question.stem}</p>
                        <label>Strongly Disagree</label>
                        <input type="radio" name={`${index}`} value="1" onChange={(e) => handleRadioChange(question.code, e.target.value)} />
                        <label>Disagree</label>
                        <input type="radio" name={`${index}`} value="2" onChange={(e) => handleRadioChange(question.code, e.target.value)} />
                        <label>Neutral</label>
                        <input type="radio" name={`${index}`} value="3" onChange={(e) => handleRadioChange(question.code, e.target.value)} />
                        <label>Agree</label>
                        <input type="radio" name={`${index}`} value="4" onChange={(e) => handleRadioChange(question.code, e.target.value)} />
                        <label>Strongly Agree</label>
                        <input type="radio" name={`${index}`} value="5" onChange={(e) => handleRadioChange(question.code, e.target.value)} />
                    </div>
                )
            })}
            <button>Submit</button>
        </form>
    )
}

export default SensoryPreferences
