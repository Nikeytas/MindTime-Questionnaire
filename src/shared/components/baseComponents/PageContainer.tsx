interface PageContainerProps {
  children: React.ReactNode;
}
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="min-h-screen w-full content-center overflow-y-auto bg-white p-4 pb-28 md:pb-16">
      {children}
    </div>
  );
};

export default PageContainer;
