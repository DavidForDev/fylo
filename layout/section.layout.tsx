interface Props {
  backCover?: String;
  children?: any;
}

const Section = (props: Props) => {
  const { backCover, children } = props;
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${backCover}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container w-full px-5 py-5 m-auto">{children}</div>
    </div>
  );
};

export default Section;
