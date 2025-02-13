interface IQuestionnaireState {
  questions: Question[];
  visitedQuestions: number[];
  currentQuestionIndex: number;
  selectedAnswers: Record<number, Option[]>;
  loading: boolean;
  error: string | null;
}

export interface Option {
  Id: number;
  AnswerId: number;
  Answer: string;
  Action: string;
  GoToQuestionId: number;
  FilterQueryStringKey?: string;
  FilterQueryStringValue?: string;
}

export interface Question {
  Id: number;
  Question: string;
  Subtitle: string;
  QuestionSelectType: number;
  IsOptional: boolean;
  Options: Option[];
}

export const questionnaireInitialState: IQuestionnaireState = {
  questions: [],
  visitedQuestions: [] as number[],
  currentQuestionIndex: 0,
  selectedAnswers: {},
  loading: false,
  error: null,
};
