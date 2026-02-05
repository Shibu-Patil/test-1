import type { FieldConfig } from "../config/userFields";

interface Props {
  field: FieldConfig;
  value: string;
  onChange: (name: string, value: string) => void;
}

const InputField = ({ field, value, onChange }: Props) => {
  return (
    <div className="w-full min-h-10 h-10 flex justify-center items-center border-2 rounded-md relative group">

      <label
        htmlFor={field.name}
        className={`absolute left-2 ${
          value ? "-top-3.5 text-xs bg-white" : "top-1"
        } duration-75 group-focus-within:-top-3.5 group-focus-within:bg-white group-focus-within:text-xs px-1 py-0.5`}
      >
        {field.label}
      </label>

      <input
        id={field.name}
        name={field.name}
        type={field.type}
        required={field.required}
        value={value || ""}
        onChange={(e) => onChange(field.name, e.target.value)}
        className="size-full px-2 outline-0"
      />

    </div>
  );
};

export default InputField;
