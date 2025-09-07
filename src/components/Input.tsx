import { useState, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  type: string;
  name: string;
} & ComponentPropsWithoutRef<"input">;

function Input({ label, type, name, ...props }: InputProps) {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toLowerCase());
  };

  return (
    <div className="w-full h-14 relative">
      <label
        htmlFor={name}
        className={`${
          value
            ? "-top-5 text-white text-4xl"
            : "top-1/2 -translate-y-1/2 text-white/65 text-2xl"
        }
         absolute left-5 z-20 duration-700 ease-linear
        active:top-0 active:text-white active:text-4xl`}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        autoComplete="off"
        onChange={handleChange}
        {...props}
        className="w-full h-full rounded-lg outline-0 shadow shadow-white p-5
         absolute top-0 left-0 z-20 text-white/85 text-xl font-sans"
      />
    </div>
  );
}

export default Input;
