import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none transition hover:scale-110 ${styles}`}>
        GetStarted
      </button>
  );
}

export default Button;
