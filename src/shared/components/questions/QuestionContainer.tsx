import { Question } from "../../store/questionnaireStore/questionnaireState";
import SelectionMultiple from "../common/SelectionMultiple";
import SelectionSingle from "../common/SelectionSingle";

const QuestionContainer = ({ question }: { question: Question }) => {
  return (
    <div className="max-w-2xl min-w-full rounded-md bg-white">
      <h2 className="mb-2 text-lg font-semibold">{question?.Question}</h2>
      {question?.IsOptional && (
        <div className="mb-2">
          <span className="rounded-sm bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
            Optional
          </span>
        </div>
      )}
      {question?.Subtitle && (
        <h3 className="mb-2 text-sm font-medium text-gray-600">
          {question.Subtitle}
        </h3>
      )}
      {question.QuestionSelectType === 0 ? (
        <SelectionSingle options={question.Options} />
      ) : (
        <SelectionMultiple options={question.Options} />
      )}
    </div>
  );
};

export default QuestionContainer;
