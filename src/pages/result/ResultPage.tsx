import { RootState } from "../../shared/store/globalStore";
import { useAppSelector } from "../../shared/store/storeHooks";
import ProgressBar from "../../shared/components/UI/ProgressBar";
import MindTimeLogo from "../../assets/MindTime_Logo.svg";

const ResultPage: React.FC = () => {
  const selectedAnswers = useAppSelector(
    (state: RootState) => state.questionnaire.selectedAnswers,
  );

  const filterParams: Record<string, string[]> = {};

  Object.values(selectedAnswers).forEach((answers: any[]) => {
    answers.forEach((answer) => {
      if (answer.FilterQueryStringKey && answer.FilterQueryStringValue) {
        if (!filterParams[answer.FilterQueryStringKey]) {
          filterParams[answer.FilterQueryStringKey] = [];
        }
        filterParams[answer.FilterQueryStringKey].push(
          answer.FilterQueryStringValue,
        );
      }
    });
  });

  const queryString = Object.entries(filterParams)
    .map(([key, values]) => `${key}=${values.join("_and_")}`)
    .join("&");

  const resultLink = `https://www.doctoranytime.gr/s/Psychologos?${queryString}`;

  return (
    <>
      <ProgressBar />
      <div className="flex min-h-screen w-full flex-col overflow-y-auto bg-white pt-10">
        <div className="mt-10 flex h-full justify-center">
          <img src={MindTimeLogo} alt="MindTime Logo" className="w-40" />
        </div>
        <div className="mx-auto flex h-full max-w-4xl flex-grow flex-col items-center justify-center p-4">
          <h1 className="mb-4 text-center text-4xl font-bold text-[#055285]">
            Questionnaire Completed!
            <br />
            Use this url to find your match
          </h1>

          <a
            href={resultLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold break-all text-gray-700 underline hover:text-[#055285]"
          >
            {resultLink}
          </a>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
