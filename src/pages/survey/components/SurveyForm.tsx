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
} from "./SurveyForm.styles";

const SurveyForm: React.FC = () => {
  return (
    <form action="">
      <SurveyFormContainer>
        <section>
          <SurveyQuestionContainer>
            <SurveyQuestionNumber>1</SurveyQuestionNumber>
            <SurveyQuestion>How do you identify yourself?</SurveyQuestion>
          </SurveyQuestionContainer>

          <SurveyFormColumn>
            <label>
              <input type="radio" name="identify" />
              Male
            </label>
            <label>
              <input type="radio" name="identify" />
              Female
            </label>
            <label>
              <input type="radio" name="identify" />
              Prefer to self describe, below:
            </label>
            <input type="text" placeholder="Write here your answer" />
          </SurveyFormColumn>
        </section>

        <section>
          <SurveyQuestionContainer>
            <SurveyQuestionNumber>2</SurveyQuestionNumber>
            <SurveyQuestion>How old are you?</SurveyQuestion>
          </SurveyQuestionContainer>
          <SurveyFormFlex width={40}>
            <SurveyFormColumn>
              <label>
                <input type="radio" name="age" />
                18-24
              </label>
              <label>
                <input type="radio" name="age" />
                25-34
              </label>
              <label>
                <input type="radio" name="age" />
                35-44
              </label>
            </SurveyFormColumn>
            <SurveyFormColumn>
              <label>
                <input type="radio" name="age" />
                45-54
              </label>
              <label>
                <input type="radio" name="age" />
                55-64
              </label>
              <label>
                <input type="radio" name="age" />
                65+
              </label>
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
            <label>
              <input type="checkbox" />
              Born
            </label>
            <label>
              <input type="checkbox" />
              Raised
            </label>
            <label>
              <input type="checkbox" />
              None of the above
            </label>
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
            <SurveyQuestion>Which languages do you speak?</SurveyQuestion>
          </SurveyQuestionContainer>

          <select id="nationality" name="user-nationality">
            <option value="" selected disabled>
              Select your nationality
            </option>
            <option value="Banglasesh">Banglasesh</option>
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
              <label>
                <input type="radio" name="home" />1
              </label>
              <label>
                <input type="radio" name="home" />2
              </label>
              <label>
                <input type="radio" name="home" />3
              </label>
              <label>
                <input type="radio" name="home" />4
              </label>
              <label>
                <input type="radio" name="home" />5
              </label>
            </SurveyFormFlex>
          </SurveySubQuestionContainer>
          <SurveySubQuestionContainer>
            <SurveyQuestion>
              I feel that I am welcomed as a person living in Kuwait
            </SurveyQuestion>
            <SurveyFormFlex width={50}>
              <label>
                <input type="radio" name="welcomed" />1
              </label>
              <label>
                <input type="radio" name="welcomed" />2
              </label>
              <label>
                <input type="radio" name="welcomed" />3
              </label>
              <label>
                <input type="radio" name="welcomed" />4
              </label>
              <label>
                <input type="radio" name="welcomed" />5
              </label>
            </SurveyFormFlex>
          </SurveySubQuestionContainer>
          <SurveySubQuestionContainer>
            <SurveyQuestion>
              My memories living in Kuwait are overall positive
            </SurveyQuestion>
            <SurveyFormFlex width={50}>
              <label>
                <input type="radio" name="memories" />1
              </label>
              <label>
                <input type="radio" name="memories" />2
              </label>
              <label>
                <input type="radio" name="memories" />3
              </label>
              <label>
                <input type="radio" name="memories" />4
              </label>
              <label>
                <input type="radio" name="memories" />5
              </label>
            </SurveyFormFlex>
          </SurveySubQuestionContainer>
          <SurveySubQuestionContainer>
            <SurveyQuestion>
              I have been treated unfairly or disrespected because of my
              nationality in Kuwait
            </SurveyQuestion>
            <SurveyFormFlex width={50}>
              <label>
                <input type="radio" name="disrespected" />1
              </label>
              <label>
                <input type="radio" name="disrespected" />2
              </label>
              <label>
                <input type="radio" name="disrespected" />3
              </label>
              <label>
                <input type="radio" name="disrespected" />4
              </label>
              <label>
                <input type="radio" name="disrespected" />5
              </label>
            </SurveyFormFlex>
          </SurveySubQuestionContainer>
        </section>

        <section>
          <SurveyQuestionContainer>
            <SurveyQuestionNumber>7</SurveyQuestionNumber>
            <SurveyQuestion>Do you feel you belong in Kuwait?</SurveyQuestion>
          </SurveyQuestionContainer>

          <SurveyFormColumn>
            <label>
              <input type="checkbox" />
              Yes
            </label>
            <label>
              <input type="checkbox" />
              No
            </label>
            <label>
              <input type="checkbox" />
              Maybe
            </label>
            <textarea placeholder="Can you tell us why?" />
          </SurveyFormColumn>
        </section>

        <label>
          <input type="checkbox" />I have read and agree to the Terms and
          Conditions and Privacy Policy, including the collection and use of my
          personal data in compliance with the applicable laws of the State of
          Kuwait.
        </label>
      </SurveyFormContainer>
      <SubmitButtonContainer>
        <SubmitButton>submit responses</SubmitButton>
      </SubmitButtonContainer>
    </form>
  );
};

export default SurveyForm;
