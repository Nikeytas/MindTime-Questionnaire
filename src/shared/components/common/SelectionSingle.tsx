import { questionnaireActions, RootState } from "../../store/globalStore";
import { Option } from "../../store/questionnaireStore/questionnaireState";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { useParams } from "react-router-dom";

interface SelectionSingleProps {
  options: Option[];
}

const SelectionSingle = ({ options }: SelectionSingleProps) => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const { selectedAnswers } = useAppSelector(
    (state: RootState) => state.questionnaire,
  );
  const selectedOption = selectedAnswers[id ? Number(id) : -1];

  const handleSelect = (option: Option) => {
    if (id) {
      dispatch(
        questionnaireActions.setAnswer({
          questionId: Number(id),
          option,
        }),
      );
    }
  };

  return (
    <fieldset
      aria-label="Question options"
      className="space-y-2 rounded-md bg-white"
    >
      {options.map((option: Option) => {
        const isSelected =
          selectedOption && selectedOption[0]?.Id === option.Id;

        return (
          <label
            key={option.Id}
            className={`group flex cursor-pointer items-center rounded-md border p-4 transition ${
              isSelected
                ? "border-[#1F74AD] bg-[#F4F9FD]"
                : "border-gray-300 bg-white hover:bg-gray-100"
            }`}
          >
            <input
              type="radio"
              name={`question-${id}`}
              className="hidden"
              checked={isSelected}
              onChange={() => handleSelect(option)}
            />
            <div
              className={`relative size-4 shrink-0 rounded-full border transition ${
                isSelected
                  ? "border-[#1F74AD] bg-[#1F74AD]"
                  : "border-gray-300 bg-white"
              }`}
            >
              {isSelected && (
                <div className="absolute inset-1 flex items-center justify-center rounded-full bg-white">
                  <div className="size-2 rounded-full"></div>
                </div>
              )}
            </div>
            <span
              className={`ml-3 text-sm font-medium ${
                isSelected ? "text-[#1F74AD]" : "text-gray-900"
              }`}
            >
              {option.Answer}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
};

export default SelectionSingle;
