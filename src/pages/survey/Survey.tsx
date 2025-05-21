import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import { SurveyContainer } from "./Survey.styles";

export default function Survey() {
  return (
    <SurveyContainer>
      <h1>Survey</h1>
      <p>This is the survey page.</p>
      <BottomNavigation />
    </SurveyContainer>
  );
}