import React from "react";
import ReportList from "../containers/ReportList";
import { scoreFormatted, findCorrectAnswerAmount } from "../utils/utils";
export const Report = ({ quizLength, report }) => {
  // if index === 0 then right === 0 --> this way when index is reset in toggle so is right answers
  let rightAnswer = findCorrectAnswerAmount(report);
  return (
    <>
      <div id="quiz-report-title-text">
        <h1 id="quiz-title">Quiz Report</h1>
        <div className="quiz-result">
          <h3>Final Score: {scoreFormatted(rightAnswer, quizLength)}%</h3>

          <h3>
            {rightAnswer}/{quizLength} Correct
          </h3>
        </div>
      </div>
      <ReportList report={report} />

      {console.log(report)}
      <p id="thank-you">
        Thanks for checking out my project{" "}
        <span aria-label="Hand Waving" role="img">
          👋🏽
        </span>
      </p>
    </>
  );
};
