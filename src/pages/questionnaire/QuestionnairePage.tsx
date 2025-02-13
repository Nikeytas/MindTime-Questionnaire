import { useEffect } from "react";
import ProgressBar from "../../shared/components/UI/ProgressBar";
import QuestionContainer from "../../shared/components/questions/QuestionContainer";
import {
  questionnaireActions,
  RootState,
} from "../../shared/store/globalStore";
import { useAppDispatch, useAppSelector } from "../../shared/store/storeHooks";
import Loader from "../../shared/components/UI/Loader/Loader";
import MindTimeLogo from "../../assets/MindTime_Logo.svg";
import { useParams } from "react-router-dom";

const QuestionnairePage = () => {
  const { questions, currentQuestionIndex, loading, error } = useAppSelector(
    (state: RootState) => state.questionnaire,
  );

  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (questions.length && id) {
      const index = questions.findIndex((q) => q.Id === Number(id));
      if (index !== -1) {
        dispatch(questionnaireActions.setCurrentQuestionIndex(index));
      }
    }
  }, [questions, id, dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>Error loading questions</p>;
  if (!questions.length) return <p>No questions available</p>;

  return (
    <>
      <ProgressBar />
      <div className="flex min-h-screen w-full flex-col overflow-y-auto bg-white pt-10 pb-16 md:pb-16">
        <div className="mb-4 flex h-full justify-center">
          <img src={MindTimeLogo} alt="MindTime Logo" className="w-40" />
        </div>
        {currentQuestionIndex !== undefined && (
          <div className="mx-auto flex h-full min-w-full flex-grow items-center justify-center p-4 md:min-w-2xl">
            <QuestionContainer question={questions[currentQuestionIndex]} />
          </div>
        )}
      </div>
    </>
  );
};

export default QuestionnairePage;
