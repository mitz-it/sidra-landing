import type { UserResponses } from "../../Survey";
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
  ErrorMessage,
} from "./SurveyForm.styles";
import { useState } from "react";

type SurveyFormProps = {
  onCancel: () => void;
  setHasSubmitted: (value: boolean) => void;
  userResponses: UserResponses;
  setUserResponses: (responses: UserResponses) => void;
};

const SurveyForm: React.FC<SurveyFormProps> = ({
  onCancel,
  setHasSubmitted,
  userResponses,
  setUserResponses,
}) => {
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

  const genderOptions = ["Female", "Male", "Prefer to self describe, below:"];
  const bornOptions = ["Born", "Raised", "None of the above"];
  const languageOptions = [
    "English",
    "Arabic",
    "Hindi",
    "Bangla",
    "Urdu",
    "Tagalog",
    "Tamil",
    "Persian",
    "Nepali",
    "Amharic",
    "Other",
  ];
  const nationalityOptions = [
    "Bangladesh",
    "India",
    "Egypt",
    "Nepal",
    "Pakistan",
    "Philippines",
    "Saudi Arabia",
    "Sri Lanka",
    "Syria",
    "Others",
  ];

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const userLanguages = userResponses.languages || [];
  const userNationality = userResponses.nationality || "";
  const userTermsAccepted = userResponses.termsAccepted || false;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!userResponses.gender) newErrors.gender = "This field is required.";
    if (!userResponses.ageGroup) newErrors.ageGroup = "This field is required.";
    if (!userResponses.bornInKuwait)
      newErrors.bornInKuwait = "This field is required.";
    if (!userResponses.q1_home) newErrors.q1_home = "This field is required.";
    if (!userResponses.q2_welcomed)
      newErrors.q2_welcomed = "This field is required.";
    if (!userResponses.q3_memories)
      newErrors.q3_memories = "This field is required.";
    if (!userResponses.q4_unfair)
      newErrors.q4_unfair = "This field is required.";
    if (!userResponses.belong) newErrors.belong = "This field is required.";
    if (!userLanguages || userLanguages.length === 0)
      newErrors.languages = "Please select at least one language.";
    if (!userNationality)
      newErrors.nationality = "Please select your nationality.";
    if (!userTermsAccepted)
      newErrors.termsAccepted = "You must accept the Terms and Conditions.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setHasSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
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
            {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
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
          {errors.ageGroup && <ErrorMessage>{errors.ageGroup}</ErrorMessage>}
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
            {errors.bornInKuwait && (
              <ErrorMessage>{errors.bornInKuwait}</ErrorMessage>
            )}
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
            {Array.from({ length: 3 }).map((_, colIdx) => (
              <SurveyFormColumn key={colIdx}>
                {languageOptions.slice(colIdx * 4, colIdx * 4 + 4).map(
                  (lang) =>
                    lang && (
                      <label key={lang}>
                        <input
                          type="checkbox"
                          checked={userLanguages.includes(lang)}
                          onChange={() => {
                            const newLangs = userLanguages.includes(lang)
                              ? userLanguages.filter((l: string) => l !== lang)
                              : [...userLanguages, lang];
                            setUserResponses({
                              ...userResponses,
                              languages: newLangs,
                            });
                          }}
                        />
                        {lang}
                      </label>
                    )
                )}
              </SurveyFormColumn>
            ))}
          </SurveyFormFlex>
          {errors.languages && <ErrorMessage>{errors.languages}</ErrorMessage>}
        </section>

        <section>
          <SurveyQuestionContainer>
            <SurveyQuestionNumber>5</SurveyQuestionNumber>
            <SurveyQuestion>What is your nationality?</SurveyQuestion>
          </SurveyQuestionContainer>
          <select
            id="nationality"
            name="user-nationality"
            value={userNationality}
            onChange={(e) =>
              setUserResponses({
                ...userResponses,
                nationality: e.target.value,
              })
            }
          >
            <option value="" disabled>
              Select your nationality
            </option>
            {nationalityOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.nationality && (
            <ErrorMessage>{errors.nationality}</ErrorMessage>
          )}
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
            {errors.q1_home && <ErrorMessage>{errors.q1_home}</ErrorMessage>}
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
            {errors.q2_welcomed && (
              <ErrorMessage>{errors.q2_welcomed}</ErrorMessage>
            )}
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
            {errors.q3_memories && (
              <ErrorMessage>{errors.q3_memories}</ErrorMessage>
            )}
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
            {errors.q4_unfair && (
              <ErrorMessage>{errors.q4_unfair}</ErrorMessage>
            )}
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
                  onChange={(e) => {
                    setUserResponses({
                      ...userResponses,
                      belong: e.target.value,
                      belongReason:
                        e.target.value === "Maybe"
                          ? userResponses.belongReason
                          : "",
                    });
                  }}
                />
                {option}
              </label>
            ))}
            <textarea
              placeholder="Can you tell us why?"
              value={userResponses.belongReason}
              onChange={(e) =>
                setUserResponses({
                  ...userResponses,
                  belongReason: e.target.value,
                })
              }
              disabled={userResponses.belong !== "Maybe"}
            />
            {errors.belong && <ErrorMessage>{errors.belong}</ErrorMessage>}
          </SurveyFormColumn>
        </section>

        <label>
          <input
            type="checkbox"
            checked={userTermsAccepted}
            onChange={(e) =>
              setUserResponses({
                ...userResponses,
                termsAccepted: e.target.checked,
              })
            }
          />
          I have read and agree to the Terms and Conditions and Privacy Policy,
          including the collection and use of my personal data in compliance
          with the applicable laws of the State of Kuwait.
        </label>
        {errors.termsAccepted && (
          <ErrorMessage>{errors.termsAccepted}</ErrorMessage>
        )}
      </SurveyFormContainer>
      <SubmitButtonContainer>
        <CancelButton type="reset" onClick={onCancel}>
          cancel
        </CancelButton>
        <SubmitButton type="submit">submit responses</SubmitButton>
      </SubmitButtonContainer>
    </form>
  );
};

export default SurveyForm;
