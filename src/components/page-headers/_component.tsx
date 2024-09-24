type Props = {
  title: string;
};

const PageHeader = (props: Props) => {
  return (
    <>
      <h1 className="mt-16 text-2xl">{props.title}</h1>
      <hr className="border-t-2 border-yellow-600 w-14" />
    </>
  );
};

export default PageHeader;
