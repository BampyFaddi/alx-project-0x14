import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="px-8 py-2 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300 font-semibold"
    >
      {title}
    </button>
  );
};

export default Button;
