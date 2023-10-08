import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  primary = false,
  href,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  primary?: boolean;
  href?: string | undefined;
  onClick?: (event: any) => void;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <>
      <Link
        className={`${
          props.className
        } text-center cursor-pointer inline-block rounded border border-indigo-600  px-3 py-2 text-sm font-medium focus:outline-none focus:ring active:text-indigo-500 ${
          primary
            ? "text-white hover:text-indigo-600 hover:bg-transparent bg-indigo-600"
            : "text-indigo-600 hover:text-white hover:bg-indigo-600"
        }`}
        to={href || ""}
        onClick={onClick}
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
