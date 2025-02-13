import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { useParams } from "react-router-dom";
import { questionnaireActions, RootState } from "../../store/globalStore";
import { Option } from "../../store/questionnaireStore/questionnaireState";

interface SelectionMultipleProps {
  options: Option[];
}

const SelectionMultiple: React.FC<SelectionMultipleProps> = ({ options }) => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const selectedAnswers = useAppSelector(
    (state: RootState) => state.questionnaire.selectedAnswers[Number(id)] || [],
  );

  const handleChange = (option: Option) => {
    if (id) {
      dispatch(
        questionnaireActions.toggleAnswer({
          questionId: Number(id),
          option: option,
        }),
      );
    }
  };

  return (
    <fieldset
      aria-label="Question options"
      className="space-y-2 rounded-md bg-white"
    >
      {options.map((option) => {
        const isSelected = selectedAnswers.some(
          (selectedOption) => selectedOption.Id === option.Id,
        );

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
              type="checkbox"
              name={`question-${id}`}
              className="h-4 w-4 border-gray-300 text-[#1F74AD] focus:ring-[#1F74AD]"
              checked={isSelected}
              onChange={() => handleChange(option)}
            />
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

export default SelectionMultiple;
