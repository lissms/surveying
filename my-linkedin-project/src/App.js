import ButtonSurveying from "./surveging/ButtonSurveying";
import SurveyingFooter from "./surveging/SurveyingFooter";
import SurveyingLanding from "./surveging/SurveyingLanding";
import SurveyingOptions from "./surveging/SurveyingOptions";

function App() {
  return (
    <div className="App">
      <SurveyingLanding></SurveyingLanding>
      <SurveyingFooter></SurveyingFooter>
      <ButtonSurveying></ButtonSurveying>
      <SurveyingOptions></SurveyingOptions>
    </div>
  );
}

export default App;
