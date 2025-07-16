import { useState } from "react";
import {
  SurveyFormColumn,
  SurveyFormFlex,
  SurveyFormContainer,
  SurveyQuestion,
  SurveyQuestionContainer,
  SurveyQuestionNumber,
  SurveyQuestionSecondary,
  SurveySubQuestionContainer,
  SubmitButton,
  SubmitButtonContainer,
  CancelButton,
} from "./SurveyForm.styles";
import SurveyAnswers from "../SurveyAnswers/SurveyAnswers";

interface UserResponses {
  ageGroup: string;
  gender: string;
  bornInKuwait: string;
  q1_home: number;
  q2_welcomed: number;
  q3_memories: number;
  q4_unfair: number;
  belong: string;
}

const SurveyForm: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  const [userResponses, setUserResponses] = useState<UserResponses>({
    ageGroup: "",
    gender: "",
    bornInKuwait: "",
    q1_home: 3,
    q2_welcomed: 3,
    q3_memories: 3,
    q4_unfair: 3,
    belong: "",
  });

  const ageOptions = [
    "Under 18",
    "18 - 25",
    "26 - 33",
    "34 - 41",
    "42 - 49",
    "50 - 57",
    "58 - 65",
    "66 and above",
  ];

  const genderOptions = [
    "Female",
    "Male",
    "Prefer to self describe, below:",
  ];
  const bornOptions = ["Born", "Raised", "None of the above"];

  return (
    <>
      <form action="">


        <SurveyFormContainer>
          <section>
            <SurveyQuestionContainer>
              <SurveyQuestionNumber>1</SurveyQuestionNumber>
              <SurveyQuestion>How do you identify yourself?</SurveyQuestion>
            </SurveyQuestionContainer>

            <SurveyFormColumn>
              {genderOptions.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="identify"
                    value={option}
                    checked={userResponses.gender === option}
                    onChange={(e) =>
                      setUserResponses({
                        ...userResponses,
                        gender: e.target.value,
                      })
                    }
                  />
                  {option}
                </label>
              ))}
              <input
                disabled={
                  userResponses.gender !== "Prefer to self describe, below:"
                }
                type="text"
                placeholder="Write here your answer"
              />
            </SurveyFormColumn>
          </section>

          <section>
            <SurveyQuestionContainer>
              <SurveyQuestionNumber>2</SurveyQuestionNumber>
              <SurveyQuestion>How old are you?</SurveyQuestion>
            </SurveyQuestionContainer>
            <SurveyFormFlex width={40}>
              <SurveyFormColumn>
                {ageOptions.slice(0, 4).map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="age"
                      value={option}
                      checked={userResponses.ageGroup === option}
                      onChange={(e) =>
                        setUserResponses({
                          ...userResponses,
                          ageGroup: e.target.value,
                        })
                      }
                    />
                    {option}
                  </label>
                ))}
              </SurveyFormColumn>
              <SurveyFormColumn>
                {ageOptions.slice(4, 9).map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="age"
                      value={option}
                      checked={userResponses.ageGroup === option}
                      onChange={(e) =>
                        setUserResponses({
                          ...userResponses,
                          ageGroup: e.target.value,
                        })
                      }
                    />
                    {option}
                  </label>
                ))}
              </SurveyFormColumn>
            </SurveyFormFlex>
          </section>

          <section>
            <SurveyQuestionContainer>
              <SurveyQuestionNumber>3</SurveyQuestionNumber>
              <div>
                <SurveyQuestion>
                  Were you born and/or raised in Kuwait?
                </SurveyQuestion>
                <SurveyQuestionSecondary>
                  (you can select more than one)
                </SurveyQuestionSecondary>
              </div>
            </SurveyQuestionContainer>

            <SurveyFormColumn>
              {bornOptions.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="bornInKuwait"
                    value={option}
                    checked={userResponses.bornInKuwait === option}
                    onChange={(e) =>
                      setUserResponses({
                        ...userResponses,
                        bornInKuwait: e.target.value,
                      })
                    }
                  />
                  {option}
                </label>
              ))}
            </SurveyFormColumn>
          </section>

          <section>
            <SurveyQuestionContainer>
              <SurveyQuestionNumber>4</SurveyQuestionNumber>
              <div>
                <SurveyQuestion>Which languages do you speak?</SurveyQuestion>
                <SurveyQuestionSecondary>
                  (you can select more than one)
                </SurveyQuestionSecondary>
              </div>
            </SurveyQuestionContainer>
            <SurveyFormFlex width={73.75}>
              <SurveyFormColumn>
                <label>
                  <input type="checkbox" />
                  English
                </label>
                <label>
                  <input type="checkbox" />
                  Arabic
                </label>
                <label>
                  <input type="checkbox" />
                  Hindi
                </label>
                <label>
                  <input type="checkbox" />
                  Bangla
                </label>
              </SurveyFormColumn>
              <SurveyFormColumn>
                <label>
                  <input type="checkbox" />
                  Urdu
                </label>
                <label>
                  <input type="checkbox" />
                  Tagalog
                </label>
                <label>
                  <input type="checkbox" />
                  Tamil
                </label>
                <label>
                  <input type="checkbox" />
                  Persian
                </label>
              </SurveyFormColumn>
              <SurveyFormColumn>
                <label>
                  <input type="checkbox" />
                  Nepali
                </label>
                <label>
                  <input type="checkbox" />
                  Amharic
                </label>
                <label>
                  <input type="checkbox" />
                  Other
                </label>
              </SurveyFormColumn>
            </SurveyFormFlex>
          </section>

          <section>
            <SurveyQuestionContainer>
              <SurveyQuestionNumber>5</SurveyQuestionNumber>
              <SurveyQuestion>What is your nationality?</SurveyQuestion>
            </SurveyQuestionContainer>

            <select id="nationality" name="user-nationality">
              <option value="" selected disabled>
                Select your nationality
              </option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Egypt">Egypt</option>
              <option value="Nepal">Nepal</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Philippines">Philippines</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Syria">Syria</option>
              <option value="Others">Others</option>
            </select>
          </section>

          <section>
            <SurveyQuestionContainer>
              <SurveyQuestionNumber>6</SurveyQuestionNumber>
              <SurveyQuestion>
                Rate the following statements on a scale of 1 to 5 (1 = strongly
                disagree 5 = strongly agree)
              </SurveyQuestion>
            </SurveyQuestionContainer>
            <SurveySubQuestionContainer>
              <SurveyQuestion>Kuwait is my home</SurveyQuestion>
              <SurveyFormFlex width={50}>
                {[1, 2, 3, 4, 5].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="q1_home"
                      value={option}
                      checked={userResponses.q1_home === option}
                      onChange={(e) =>
                        setUserResponses({
                          ...userResponses,
                          q1_home: Number(e.target.value),
                        })
                      }
                    />
                    {option}
                  </label>
                ))}
              </SurveyFormFlex>
            </SurveySubQuestionContainer>
            <SurveySubQuestionContainer>
              <SurveyQuestion>
                I feel that I am welcomed as a person living in Kuwait
              </SurveyQuestion>
              <SurveyFormFlex width={50}>
                {[1, 2, 3, 4, 5].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="q2_welcomed"
                      value={option}
                      checked={userResponses.q2_welcomed === option}
                      onChange={(e) =>
                        setUserResponses({
                          ...userResponses,
                          q2_welcomed: Number(e.target.value),
                        })
                      }
                    />
                    {option}
                  </label>
                ))}
              </SurveyFormFlex>
            </SurveySubQuestionContainer>
            <SurveySubQuestionContainer>
              <SurveyQuestion>
                My memories living in Kuwait are overall positive
              </SurveyQuestion>
              <SurveyFormFlex width={50}>
                {[1, 2, 3, 4, 5].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="q3_memories"
                      value={option}
                      checked={userResponses.q3_memories === option}
                      onChange={(e) =>
                        setUserResponses({
                          ...userResponses,
                          q3_memories: Number(e.target.value),
                        })
                      }
                    />
                    {option}
                  </label>
                ))}
              </SurveyFormFlex>
            </SurveySubQuestionContainer>
            <SurveySubQuestionContainer>
              <SurveyQuestion>
                I have been treated unfairly or disrespected because of my
                nationality in Kuwait
              </SurveyQuestion>
              <SurveyFormFlex width={50}>
                {[1, 2, 3, 4, 5].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="q4_unfair"
                      value={option}
                      checked={userResponses.q4_unfair === option}
                      onChange={(e) =>
                        setUserResponses({
                          ...userResponses,
                          q4_unfair: Number(e.target.value),
                        })
                      }
                    />
                    {option}
                  </label>
                ))}
              </SurveyFormFlex>
            </SurveySubQuestionContainer>
          </section>

          <section>
            <SurveyQuestionContainer>
              <SurveyQuestionNumber>7</SurveyQuestionNumber>
              <SurveyQuestion>
                Do you feel like you belong in Kuwait?
              </SurveyQuestion>
            </SurveyQuestionContainer>

            <SurveyFormColumn>
              {["Yes", "No", "Maybe"].map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="belong"
                    value={option}
                    checked={userResponses.belong === option}
                    onChange={(e) =>
                      setUserResponses({
                        ...userResponses,
                        belong: e.target.value,
                      })
                    }
                  />
                  {option}
                </label>
              ))}
              <textarea placeholder="Can you tell us why?" />
            </SurveyFormColumn>
          </section>

          <label>
            <input type="checkbox" />I have read and agree to the Terms and
            Conditions and Privacy Policy, including the collection and use of
            my personal data in compliance with the applicable laws of the State
            of Kuwait.
          </label>
        </SurveyFormContainer>
        <SubmitButtonContainer>
          <CancelButton type="reset" onClick={onCancel}>
            cancel
          </CancelButton>
          <SubmitButton type="submit">submit responses</SubmitButton>
        </SubmitButtonContainer>
      </form>

      <SurveyAnswers userResponses={userResponses} />
    </>
  );
};

export default SurveyForm;
