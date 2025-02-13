import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../../App";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/home/HomePage";
import QuestionnairePage from "../../pages/questionnaire/QuestionnairePage";
import ResultPage from "../../pages/result/ResultPage";

export const HOME_ROUTE = "/home";
export const ERROR_ROUTE = "/error";
export const QUESTIONNAIRE_ROUTE = "/questionnaire";
export const RESULT_ROUTE = "/result";

const NAVIGATION = () => {
  const isAuthenticated = true;

  const navigation = [
    ...(isAuthenticated
      ? [
          { name: "Home", href: HOME_ROUTE },
          { name: "Questionnaire", href: QUESTIONNAIRE_ROUTE },
          { name: "Result", href: RESULT_ROUTE },
        ]
      : [{ name: "Home", href: HOME_ROUTE }]),
  ];

  return navigation;
};

export default NAVIGATION;

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to="/home" />,
      },
      {
        path: HOME_ROUTE,
        element: <HomePage />,
      },
      {
        path: ERROR_ROUTE,
        element: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },

      {
        path: QUESTIONNAIRE_ROUTE,
        children: [
          {
            path: QUESTIONNAIRE_ROUTE,
            element: <QuestionnairePage />,
          },
          {
            path: QUESTIONNAIRE_ROUTE + "/:id",
            element: <QuestionnairePage />,
          },
        ],
      },
      {
        path: RESULT_ROUTE,
        element: <ResultPage />,
      },
    ],
  },
]);
