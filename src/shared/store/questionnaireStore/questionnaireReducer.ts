import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option, questionnaireInitialState } from "./questionnaireState";
import axios from "axios";

// const API_URL = "https://www.doctoranytime.gr/searchq/GetQuestions?version=v2";

const API_URL = "/api/searchq/GetQuestions?version=v2";

export const getQuestionsThunk = createAsyncThunk(
  "questionnaire/getQuestions",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
);

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState: questionnaireInitialState,
  reducers: {
    setCurrentQuestionIndex: (state, action: PayloadAction<number>) => {
      state.currentQuestionIndex = action.payload;
    },
    setAnswer: (
      state,
      action: PayloadAction<{ questionId: number; option: Option }>,
    ) => {
      const { questionId, option } = action.payload;
      state.selectedAnswers[questionId] = [option];
    },
    setVisitedQuestion: (state, action: PayloadAction<number>) => {
      if (!state.visitedQuestions.includes(action.payload)) {
        state.visitedQuestions.push(action.payload);
      }
    },
    resetVisitedQuestions: (state) => {
      state.visitedQuestions = []; // ✅ Reset the array
    },
    clearSelectedAnswers: (state) => {
      state.selectedAnswers = {};
    },
    toggleAnswer: (
      state,
      action: PayloadAction<{ questionId: number; option: Option }>,
    ) => {
      const { questionId, option } = action.payload;
      if (!state.selectedAnswers[questionId]) {
        state.selectedAnswers[questionId] = [];
      }
      const selectedOptions = state.selectedAnswers[questionId];

      if (selectedOptions.some((opt) => opt.Id === option.Id)) {
        state.selectedAnswers[questionId] = selectedOptions.filter(
          (opt) => opt.Id !== option.Id,
        );
      } else {
        state.selectedAnswers[questionId].push(option);
      }
    },
    goToNextQuestion: (state) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (!currentQuestion) return;
      const selectedOption = state.selectedAnswers[currentQuestion.Id]?.[0];
      if (selectedOption?.GoToQuestionId) {
        const nextQuestionIndex = state.questions.findIndex(
          (q) => q.Id === selectedOption.GoToQuestionId,
        );
        if (nextQuestionIndex !== -1) {
          state.currentQuestionIndex = nextQuestionIndex;
        }
      }
    },
    goToPreviousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuestionsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload.Data;
      })
      .addCase(getQuestionsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load questions";
      });
  },
});

export default questionnaireSlice;
