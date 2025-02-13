interface BaseCardContainerProps {
  children: React.ReactNode;
  className?: string;
}
const BaseCardContainer = ({
  children,
  className = "",
}: BaseCardContainerProps) => {
  return (
    <div className={`rounded-md bg-white shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default BaseCardContainer;
