interface Loading {
  text:string
}

const Loader = ({text }: Loading) => {
  return (
    <div className="size-full flex justify-center items-center gap-5">
    <div>{text}.....</div>
    <div className="size-6 rounded-full border-2 border-t-3 border-t-sky-400 animate-spin"></div>
    </div>
  );
};

export default Loader;
