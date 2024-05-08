import { z } from "zod";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

import { Control, FieldPath } from "react-hook-form";
import { authFormSchema } from "@/schemas";

const formSchema = authFormSchema("sign-up");

interface FormInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>; // the fields names of the schema
  label: string;
  placeholder: string;
}

const FormInput = ({ control, name, label, placeholder }: FormInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default FormInput;
