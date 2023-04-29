import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home';
import Report from './components/Report';
import SensoryPreferences from './components/SensoryPreferences/SensoryPreferences';
import SampleSurvey from './components/SampleSurvey/SampleSurvey';
import Header from './components/Header';
function App() {
  return (
    <div className='app-container'>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/"><Home /> </Route>
        <Route path="/sensory-pref"><SensoryPreferences /></Route>
        <Route path="/sample-survey"><SampleSurvey /></Route>
        <Route path="/report/:reportId"><Report /></Route>
      </Switch>
      <footer>(c) Copyright ...................................................................................................</footer>
    </div>
  );
}

export default App;
