import React from "react";

interface CardHeaderContainerProps {
  children: React.ReactNode;
}

const CardHeaderContainer = ({ children }: CardHeaderContainerProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-items-center md:flex-row md:justify-between">
      {children}
    </div>
  );
};

export default CardHeaderContainer;
