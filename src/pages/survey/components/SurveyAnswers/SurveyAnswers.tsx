import { useState, useEffect } from "react";
import {
  SurveyAnswersContainer,
  BelongSection,
  BelongCircle,
  BelongCircleContent,
  BelongCircleLabel,
  BelongCirclePercent,
  ComparisonSection,
  SurveyAnswersTitle,
  Legend,
  LegendItem,
  MarkerText,
  QuestionItem,
  ScaleBackground,
  ScaleContainer,
  SurveyAnswersButton,
  Select,
  Marker,
  BelongUserIndicator,
} from "./SurveyAnswers.styles";

// Tipos TypeScript
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

interface GroupData {
  home: number;
  welcomed: number;
  memories: number;
  unfair: number;
  belong: number;
  dontBelong: number;
}

interface SurveyDataItem {
  question: string;
  yourAnswer: number;
  averageForGroup: number;
}

interface BelongDataItem {
  name: string;
  value: number;
  color: string;
}

interface SurveyAnswersProps {
  userResponses: UserResponses;
}

const SurveyAnswers = ({ userResponses }: SurveyAnswersProps) => {
  const [groupData, setGroupData] = useState<GroupData | null>(null);
  const [surveyData, setSurveyData] = useState<SurveyDataItem[]>([]);
  const [questionSelected, setQuestionSelected] =
    useState<string>("Kuwait is my home");
  const [hoveringAverage, setHoveringAverage] = useState(false);

  const databaseGroups: Record<string, GroupData> = {
    "18 - 25_Female_No": {
      home: 3.9,
      welcomed: 4.0,
      memories: 4.4,
      unfair: 2.0,
      belong: 72.73,
      dontBelong: 27.27,
    },
    "18 - 25_Female_Yes": {
      home: 4.2,
      welcomed: 3.6,
      memories: 4.4,
      unfair: 2.3,
      belong: 50.0,
      dontBelong: 50.0,
    },
    "18 - 25_Male_No": {
      home: 4.6,
      welcomed: 3.4,
      memories: 4.4,
      unfair: 2.8,
      belong: 80.0,
      dontBelong: 20.0,
    },
    "18 - 25_Male_Yes": {
      home: 4.4,
      welcomed: 4.0,
      memories: 4.8,
      unfair: 2.2,
      belong: 72.73,
      dontBelong: 27.27,
    },
    "26 - 33_Female_No": {
      home: 3.5,
      welcomed: 2.9,
      memories: 4.0,
      unfair: 2.7,
      belong: 21.05,
      dontBelong: 78.95,
    },
    "26 - 33_Female_Yes": {
      home: 4.2,
      welcomed: 3.3,
      memories: 4.4,
      unfair: 2.2,
      belong: 53.85,
      dontBelong: 46.15,
    },
    "26 - 33_Male_Yes": {
      home: 4.5,
      welcomed: 3.4,
      memories: 4.5,
      unfair: 2.0,
      belong: 61.54,
      dontBelong: 38.46,
    },
    "34 - 41_Female_No": {
      home: 3.3,
      welcomed: 2.9,
      memories: 3.6,
      unfair: 2.6,
      belong: 50.0,
      dontBelong: 50.0,
    },
    "34 - 41_Female_Yes": {
      home: 4.7,
      welcomed: 4.1,
      memories: 4.5,
      unfair: 1.6,
      belong: 60.0,
      dontBelong: 40.0,
    },
    "34 - 41_Male_No": {
      home: 3.0,
      welcomed: 2.7,
      memories: 3.7,
      unfair: 2.8,
      belong: 33.33,
      dontBelong: 66.67,
    },
    "34 - 41_Male_Yes": {
      home: 4.0,
      welcomed: 3.8,
      memories: 3.6,
      unfair: 2.2,
      belong: 80.0,
      dontBelong: 20.0,
    },
    "more than 41_Female_No": {
      home: 4.0,
      welcomed: 3.7,
      memories: 4.5,
      unfair: 2.3,
      belong: 76.19,
      dontBelong: 23.81,
    },
    "more than 41_Female_Yes": {
      home: 4.7,
      welcomed: 3.9,
      memories: 4.7,
      unfair: 1.7,
      belong: 100.0,
      dontBelong: 0.0,
    },
    "more than 41_Male_No": {
      home: 3.0,
      welcomed: 2.5,
      memories: 4.1,
      unfair: 3.5,
      belong: 20.0,
      dontBelong: 80.0,
    },
    "more than 41_Male_Yes": {
      home: 4.7,
      welcomed: 3.4,
      memories: 4.4,
      unfair: 2.6,
      belong: 42.86,
      dontBelong: 57.14,
    },
    Other_Other_Other: {
      home: 4.0,
      welcomed: 3.4,
      memories: 4.3,
      unfair: 2.4,
      belong: 54.6,
      dontBelong: 45.4,
    },
  };

  const getGroupKey = (age: string, gender: string, born: string): string => {
    let ageKey = age;
    if (["42 - 49", "50 - 57", "58 - 65", "66 - 73"].includes(age)) {
      ageKey = "more than 41";
    }

    const bornKey = born === "Born" ? "Yes" : "No";

    const key = `${ageKey}_${gender}_${bornKey}`;
    return databaseGroups[key] ? key : "Other_Other_Other";
  };

  useEffect(() => {
    if (
      userResponses.ageGroup &&
      userResponses.gender &&
      userResponses.bornInKuwait
    ) {
      const groupKey = getGroupKey(
        userResponses.ageGroup,
        userResponses.gender,
        userResponses.bornInKuwait
      );
      const data = databaseGroups[groupKey];
      setGroupData(data);

      const chartData: SurveyDataItem[] = [
        {
          question: "Kuwait is my home",
          yourAnswer: userResponses.q1_home,
          averageForGroup: data.home,
        },
        {
          question: "I feel welcomed",
          yourAnswer: userResponses.q2_welcomed,
          averageForGroup: data.welcomed,
        },
        {
          question: "Positive memories",
          yourAnswer: userResponses.q3_memories,
          averageForGroup: data.memories,
        },
        {
          question: "Treated unfairly",
          yourAnswer: userResponses.q4_unfair,
          averageForGroup: data.unfair,
        },
      ];

      setSurveyData(chartData);
    }
  }, [userResponses]);

  const belongData: BelongDataItem[] = groupData
    ? [
        { name: "Yes", value: groupData.belong, color: "#fc9918" },
        { name: "No", value: groupData.dontBelong, color: "#5f939a" },
      ]
    : [];

  return (
    groupData && (
      <SurveyAnswersContainer>
        <SurveyAnswersTitle>
          Respondents that are <mark>{userResponses.gender.toLowerCase()}</mark>
          , with ages between{" "}
          <mark>{userResponses.ageGroup.toLowerCase()}</mark>,<br />
          <mark>
            {userResponses.bornInKuwait === "Yes" ? " born" : " raised"}
          </mark>{" "}
          in Kuwait as you do, answered the statements as:
        </SurveyAnswersTitle>

        <Select
          name="questions"
          id="questions"
          value={questionSelected}
          onChange={(e) => setQuestionSelected(e.target.value)}
        >
          <option value="Kuwait is my home">Kuwait is my home</option>
          <option value="I feel welcomed">I feel welcomed</option>
          <option value="Positive memories">Positive memories</option>
          <option value="Treated unfairly">Treated unfairly</option>
        </Select>

        <ComparisonSection>
          {surveyData.map(
            (item, index) =>
              item.question === questionSelected && (
                <QuestionItem key={index}>
                  <Legend>
                    <LegendItem>1</LegendItem>
                    <LegendItem>5</LegendItem>
                  </Legend>
                  <ScaleContainer>
                    <ScaleBackground>
                      <Marker
                        position={item["averageForGroup"]}
                        title={`Average per group: ${item["averageForGroup"]}`}
                        color="#b9b9b9"
                        absolute
                        onMouseEnter={() => setHoveringAverage(true)}
                        onMouseLeave={() => setHoveringAverage(false)}
                      >
                        <MarkerText>
                          <svg
                            width="30"
                            height="47"
                            viewBox="0 0 30 47"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.66443 2.63138C1.74195 3.8306 1.42369 5.3527 1.8342 6.82866C4.00202 14.6236 3.49927 22.9259 3.26865 25.5089C3.08415 25.6934 2.94578 25.8779 2.75667 26.0624C1.55745 27.4461 0.773343 29.1988 0.588848 30.9976C0.178344 34.5953 2.20319 38.2852 5.34423 40.0379C5.39035 40.084 5.43186 40.084 5.52411 40.1302C5.70861 41.3294 6.21597 43.0821 7.69194 44.5119C9.26015 46.0802 11.5202 46.8643 14.3799 46.8643C14.6567 46.8643 14.9334 46.8643 15.2563 46.8181C20.0532 46.5875 23.3741 45.2499 25.1729 42.8515C26.2338 41.4678 26.5105 39.9918 26.5566 38.9771C28.0787 37.7778 29.1857 36.0251 29.6008 34.1802C30.431 30.4903 29.5086 26.8003 27.9865 23.5255C28.314 22.2341 28.4523 20.6659 28.314 19.0054C28.0833 16.3302 27.207 14.2085 25.9155 13.3321C23.7938 11.8562 21.4876 12.548 20.15 13.2399C19.6888 12.548 19.1353 12.0407 18.5818 11.7178C16.6446 10.657 14.7074 11.2104 13.3698 11.9023L13.3698 10.7031C13.3698 2.21627 9.12178 0.832547 6.58496 0.786423C5.06287 0.740299 3.63764 1.43216 2.66443 2.63138ZM14.5183 30.4441C14.9334 30.8546 15.3024 31.3159 15.5837 31.8278C16.4555 33.2577 16.9167 34.872 17.1058 36.5786C18.3973 34.134 18.0744 30.8592 16.3217 28.6914C16.6446 28.2763 16.9675 27.8151 17.1981 27.3538L17.3365 27.3538C18.3973 27.3538 19.2737 27.0771 20.0532 26.5236C20.8373 27.2155 21.8105 27.626 22.8713 27.7689C23.0512 27.7689 23.2403 27.8151 23.4248 27.8151C24.4349 27.8151 25.3574 27.4922 26.0078 26.9387C26.469 29.0604 26.7919 31.3666 26.3768 33.5344C26.1 34.9643 25.4543 36.1635 24.3934 37.1321C23.4248 38.0085 21.5337 39.2077 20.3806 39.9918C21.4876 40.4992 22.5946 40.5914 23.6554 40.4069C23.5171 40.7298 23.3326 41.0988 23.1019 41.4216C21.8105 43.1743 19.043 44.1891 15.0764 44.3736C12.5857 44.5119 10.6946 43.9584 9.49538 42.8053C8.98802 42.298 8.66515 41.7445 8.43453 41.2371C9.58763 41.4216 10.7869 41.2833 11.8477 40.6836C10.1872 39.5767 8.34228 38.9309 6.68182 37.9162C3.77601 36.1174 2.48454 32.1046 4.3295 29.1065C4.74462 28.3686 5.43648 27.7228 6.03609 27.1232C7.92717 25.3244 9.726 23.4333 11.3865 21.4038C11.571 21.1732 11.9861 20.6659 12.1706 20.4814C12.9547 19.8356 14.2462 20.0201 14.7996 20.8965C15.9527 22.4186 15.9989 24.3558 15.0764 26.0624C14.5229 27.3077 13.3698 28.3685 12.7241 29.6139C12.4934 30.0751 12.2628 30.5825 12.1244 31.2282C13.0469 31.1775 13.8264 30.8546 14.5183 30.4441ZM24.4857 15.4538C24.993 15.8228 25.6388 17.2066 25.7771 19.236C25.957 21.6806 25.4081 23.9407 24.3012 24.9554C24.1167 25.1399 23.6554 25.2782 23.102 25.2321C22.5485 25.186 21.995 24.9093 21.5752 24.5403C21.6675 24.3096 21.7597 24.079 21.8566 23.8023C22.5946 21.45 22.2671 18.1752 21.3031 15.5922C22.0872 15.131 23.3787 14.6697 24.4857 15.4538ZM17.3826 13.9318C18.8124 14.6697 20.3806 19.8356 19.412 22.9259C19.1307 23.8484 18.6694 24.3096 18.2082 24.5403C18.5311 22.9259 18.3004 21.2655 17.3365 19.6511C16.5523 18.1752 15.1225 17.2988 13.5958 17.1143C13.5497 16.4686 13.5082 15.6845 13.4574 14.762C13.9694 14.4391 15.8144 13.1015 17.3826 13.9318ZM6.54345 3.32324C7.6043 3.36937 10.833 3.41549 10.833 10.657C10.833 13.7934 10.9714 16.0996 11.1097 17.6217C10.833 17.76 10.6024 17.8984 10.3256 18.0829C9.86438 18.4058 9.40314 19.0054 9.03414 19.4205C8.06554 20.5736 7.05081 21.6806 6.03609 22.7414C6.03609 22.7876 5.98996 22.7876 5.98996 22.8337C6.12834 18.8624 6.03609 12.4558 4.28338 6.17831C4.09888 5.49107 4.23725 4.79921 4.69849 4.1996C5.15973 3.59999 5.80547 3.27712 6.54345 3.32324Z"
                              fill="#00171F"
                            />
                          </svg>
                          <span>average for this group</span>
                        </MarkerText>
                      </Marker>

                      <Marker
                        position={item["yourAnswer"]}
                        title={`Your answer: ${item["yourAnswer"]}`}
                        color="#fc9918"
                        absolute
                      >
                        {!hoveringAverage && (
                          <MarkerText defaultValue={true}>
                            <svg
                              width="30"
                              height="47"
                              viewBox="0 0 30 47"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.66443 2.63138C1.74195 3.8306 1.42369 5.3527 1.8342 6.82866C4.00202 14.6236 3.49927 22.9259 3.26865 25.5089C3.08415 25.6934 2.94578 25.8779 2.75667 26.0624C1.55745 27.4461 0.773343 29.1988 0.588848 30.9976C0.178344 34.5953 2.20319 38.2852 5.34423 40.0379C5.39035 40.084 5.43186 40.084 5.52411 40.1302C5.70861 41.3294 6.21597 43.0821 7.69194 44.5119C9.26015 46.0802 11.5202 46.8643 14.3799 46.8643C14.6567 46.8643 14.9334 46.8643 15.2563 46.8181C20.0532 46.5875 23.3741 45.2499 25.1729 42.8515C26.2338 41.4678 26.5105 39.9918 26.5566 38.9771C28.0787 37.7778 29.1857 36.0251 29.6008 34.1802C30.431 30.4903 29.5086 26.8003 27.9865 23.5255C28.314 22.2341 28.4523 20.6659 28.314 19.0054C28.0833 16.3302 27.207 14.2085 25.9155 13.3321C23.7938 11.8562 21.4876 12.548 20.15 13.2399C19.6888 12.548 19.1353 12.0407 18.5818 11.7178C16.6446 10.657 14.7074 11.2104 13.3698 11.9023L13.3698 10.7031C13.3698 2.21627 9.12178 0.832547 6.58496 0.786423C5.06287 0.740299 3.63764 1.43216 2.66443 2.63138ZM14.5183 30.4441C14.9334 30.8546 15.3024 31.3159 15.5837 31.8278C16.4555 33.2577 16.9167 34.872 17.1058 36.5786C18.3973 34.134 18.0744 30.8592 16.3217 28.6914C16.6446 28.2763 16.9675 27.8151 17.1981 27.3538L17.3365 27.3538C18.3973 27.3538 19.2737 27.0771 20.0532 26.5236C20.8373 27.2155 21.8105 27.626 22.8713 27.7689C23.0512 27.7689 23.2403 27.8151 23.4248 27.8151C24.4349 27.8151 25.3574 27.4922 26.0078 26.9387C26.469 29.0604 26.7919 31.3666 26.3768 33.5344C26.1 34.9643 25.4543 36.1635 24.3934 37.1321C23.4248 38.0085 21.5337 39.2077 20.3806 39.9918C21.4876 40.4992 22.5946 40.5914 23.6554 40.4069C23.5171 40.7298 23.3326 41.0988 23.1019 41.4216C21.8105 43.1743 19.043 44.1891 15.0764 44.3736C12.5857 44.5119 10.6946 43.9584 9.49538 42.8053C8.98802 42.298 8.66515 41.7445 8.43453 41.2371C9.58763 41.4216 10.7869 41.2833 11.8477 40.6836C10.1872 39.5767 8.34228 38.9309 6.68182 37.9162C3.77601 36.1174 2.48454 32.1046 4.3295 29.1065C4.74462 28.3686 5.43648 27.7228 6.03609 27.1232C7.92717 25.3244 9.726 23.4333 11.3865 21.4038C11.571 21.1732 11.9861 20.6659 12.1706 20.4814C12.9547 19.8356 14.2462 20.0201 14.7996 20.8965C15.9527 22.4186 15.9989 24.3558 15.0764 26.0624C14.5229 27.3077 13.3698 28.3685 12.7241 29.6139C12.4934 30.0751 12.2628 30.5825 12.1244 31.2282C13.0469 31.1775 13.8264 30.8546 14.5183 30.4441ZM24.4857 15.4538C24.993 15.8228 25.6388 17.2066 25.7771 19.236C25.957 21.6806 25.4081 23.9407 24.3012 24.9554C24.1167 25.1399 23.6554 25.2782 23.102 25.2321C22.5485 25.186 21.995 24.9093 21.5752 24.5403C21.6675 24.3096 21.7597 24.079 21.8566 23.8023C22.5946 21.45 22.2671 18.1752 21.3031 15.5922C22.0872 15.131 23.3787 14.6697 24.4857 15.4538ZM17.3826 13.9318C18.8124 14.6697 20.3806 19.8356 19.412 22.9259C19.1307 23.8484 18.6694 24.3096 18.2082 24.5403C18.5311 22.9259 18.3004 21.2655 17.3365 19.6511C16.5523 18.1752 15.1225 17.2988 13.5958 17.1143C13.5497 16.4686 13.5082 15.6845 13.4574 14.762C13.9694 14.4391 15.8144 13.1015 17.3826 13.9318ZM6.54345 3.32324C7.6043 3.36937 10.833 3.41549 10.833 10.657C10.833 13.7934 10.9714 16.0996 11.1097 17.6217C10.833 17.76 10.6024 17.8984 10.3256 18.0829C9.86438 18.4058 9.40314 19.0054 9.03414 19.4205C8.06554 20.5736 7.05081 21.6806 6.03609 22.7414C6.03609 22.7876 5.98996 22.7876 5.98996 22.8337C6.12834 18.8624 6.03609 12.4558 4.28338 6.17831C4.09888 5.49107 4.23725 4.79921 4.69849 4.1996C5.15973 3.59999 5.80547 3.27712 6.54345 3.32324Z"
                                fill="#00171F"
                              />
                            </svg>
                            <span>your answer</span>
                          </MarkerText>
                        )}
                      </Marker>
                    </ScaleBackground>
                  </ScaleContainer>
                </QuestionItem>
              )
          )}
        </ComparisonSection>

        <SurveyAnswersTitle>
          Do you feel you belong in Kuwait?
        </SurveyAnswersTitle>
        <span style={{ fontFamily: "Zarathustra, sans-serif" }}>
          (Hovering the circle shows your answer)
        </span>

        <ComparisonSection>
          <BelongSection>
            {belongData.map((item, index) => {
              const circleSize = Math.max(6, Math.min(40, item.value * 0.575));
              const fontSize = Math.max(1.5, Math.min(4, circleSize * 0.18));
              const labelFontSize = Math.max(
                1,
                Math.min(2.5, circleSize * 0.12)
              );
              const isUserAnswer =
                userResponses.belong?.toLowerCase() === item.name.toLowerCase();
              return (
                <BelongCircle
                  key={index}
                  size={circleSize}
                  color={item.value > 0 ? item.color : "transparent"}
                >
                  <BelongCircleContent>
                    <BelongCircleLabel
                      style={{ fontSize: `${labelFontSize}rem` }}
                      isUserAnswer={item.value < 30 && isUserAnswer}
                    >
                      {item.name}
                    </BelongCircleLabel>
                    <BelongCirclePercent
                      style={{ fontSize: `${fontSize}rem` }}
                      isUserAnswer={item.value < 30 && isUserAnswer}
                    >
                      {item.value}%
                    </BelongCirclePercent>
                    {isUserAnswer && (
                      <BelongUserIndicator>
                        you are here!
                        {item.value > 10 && (
                          <Marker
                            position={3}
                            absolute={false}
                            color={item.color}
                            size={2}
                          />
                        )}
                      </BelongUserIndicator>
                    )}
                  </BelongCircleContent>
                </BelongCircle>
              );
            })}
          </BelongSection>
        </ComparisonSection>

        <SurveyAnswersButton href="/about">
          back to the homepage
        </SurveyAnswersButton>
      </SurveyAnswersContainer>
    )
  );
};

export default SurveyAnswers;
