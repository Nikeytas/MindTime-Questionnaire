import { CSSProperties } from "react";
import { classNames } from "../common/HelperFunctions";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  styleName?: CSSProperties;
  onClick?: () => void;
  styleType:
    | "primary"
    | "secondary"
    | "normal"
    | "cancel"
    | "cancel-secondary"
    | "transparent"
    | "icon"
    | "disabled";
  isItSubmit?: boolean;
  isItDisabled?: boolean;
}

const Button = ({
  children,
  className = "",
  styleName = {},
  onClick,
  styleType,
  isItSubmit = false,
  isItDisabled = false,
}: ButtonProps) => {
  return (
    <>
      <button
        disabled={isItDisabled}
        type={`${isItSubmit ? "submit" : "button"}`}
        style={styleName}
        className={classNames(
          styleType === "primary"
            ? "bg-primary-base hover:bg-primary-baseHover cursor-pointer border border-gray-300 px-4 py-2 text-sm font-medium text-white focus:z-10 focus:outline-none"
            : styleType === "secondary"
              ? "border-primary-base text-primary-base hover:border-primary-baseHover hover:text-primary-baseHover cursor-pointer border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:z-10 focus:outline-none"
              : styleType === "normal"
                ? "cursor-pointer border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-10 focus:outline-none"
                : styleType === "cancel"
                  ? "cursor-pointer bg-red-600 text-white hover:bg-red-700 focus:ring-red-100 focus:outline-none"
                  : styleType === "cancel-secondary"
                    ? "cursor-pointer border border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-100 focus:outline-none"
                    : styleType === "transparent"
                      ? "3xl:text-base flex cursor-pointer items-center gap-3 border-transparent bg-transparent text-sm font-medium shadow-none"
                      : styleType === "icon"
                        ? "3xl:text-base flex cursor-pointer items-center gap-3 border-transparent bg-transparent text-sm font-medium shadow-none"
                        : styleType === "disabled"
                          ? "3xl:text-base flex cursor-not-allowed items-center gap-3 border-transparent bg-transparent text-sm font-medium shadow-none"
                          : "",
          `inline-flex items-center rounded-md border px-4 py-2 text-sm ring-0 shadow-sm focus:ring-0 focus:outline-none ${className}`,
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
