import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Form/Input";

// type of data that I will have on the form signIn
type SignInFormData = {
  email: string;
  password: string;
};

// validating the data from the form
const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export default function SignIn() {
  // Use form return register and handleSubmit
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const onSubmit: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        // passing the function as a parametor of handlesubmit you can access the input data
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing="4">
          {/* inputs with reference */}
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            // error={errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            error={errors.password}
            // error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
}
