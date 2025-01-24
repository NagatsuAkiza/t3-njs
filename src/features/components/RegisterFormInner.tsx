import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { type RegisterFormSchema } from "~/features/auth/forms/register";

type RegisterFormInnerProps = {
  onRegisterSubmit: (values: RegisterFormSchema) => void;
};

export const RegisterFormInner = (props: RegisterFormInnerProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useFormContext<RegisterFormSchema>();
  return (
    <form
      onSubmit={form.handleSubmit(props.onRegisterSubmit)}
      action=""
      className="flex flex-col gap-y-2"
    >
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input {...field} type={showPassword ? "text" : "password"} />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
      <Label className="mt-4 flex items-center gap-2">
        <Checkbox
          checked={showPassword}
          onCheckedChange={(checked) => setShowPassword(!!checked)}
        />
        Show password
      </Label>

      <Button className="mt-4 w-full" size="lg">
        Buat akun
      </Button>

      {/* CONTINUE WITH GOOGLE */}
    </form>
  );
};
