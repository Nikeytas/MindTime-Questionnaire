import { XMarkIcon } from "@heroicons/react/24/outline";
import { RootState } from "../../store/globalStore";
import { useAppSelector } from "../../store/storeHooks";
import { useLocation, useNavigate } from "react-router-dom";

const ProgressBar = () => {
  const { visitedQuestions, questions } = useAppSelector(
    (state: RootState) => state.questionnaire,
  );

  const navigate = useNavigate();
  const location = useLocation();

  const progress =
    location.pathname === "/result"
      ? 100
      : questions.length > 0
        ? ((visitedQuestions.length === 0 ? 1 : visitedQuestions.length) /
            questions.length) *
          100
        : 0;

  return (
    <div className="absolute inset-y-0 flex h-10 w-full items-center justify-between gap-2 p-2">
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-300">
        <div
          className="absolute top-0 left-0 h-full bg-[#1F74AD]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <button
        onClick={() => navigate("/home")}
        className="transition duration-200 hover:text-gray-500"
        title="Go to Home Page"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ProgressBar;
