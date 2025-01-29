import { FormInputProps } from "../../interface";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";

const FormInput = <T extends object>({
  control,
  name,
  label,
  type = "text",
  placeholder,
}: FormInputProps<T>) => (
  <FormField
    control={control}
    name={name as string}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input type={type} placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormInput;
