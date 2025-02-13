import { useRouteError } from "react-router-dom";
import PageContainer from "../shared/components/baseComponents/PageContainer";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);
  return (
    <PageContainer>
      <div
        id="error-page"
        className="flex flex-col items-center justify-center text-black"
      >
        <h1 className="text-4xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {error?.statusText || error?.message ? (
            <i>{error.statusText || error.message}</i>
          ) : (
            <i>Page not found!</i>
          )}
        </p>
      </div>
    </PageContainer>
  );
};

export default ErrorPage;
