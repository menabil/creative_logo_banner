const Button = ({ btnText, className }) => {
  return (
    <button
      className={`py-3.5 px-7 rounded-[100px] bg-red-500 text-white hover:text-white hover:bg-black  duration-500 ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
