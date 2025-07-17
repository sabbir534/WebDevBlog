'use client';

import { RegisterSchema, RegisterSchemaType } from "@/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../common/Button";
import FormField from "../common/FormField";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });

    const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
        console.log("Form submitted with data:", data);
        // Handle login logic here
    };

    return (<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[500px] m-auto mt-8 gap-2">
        <Heading title="Create a WEBDEV.blog Account" lg center />
        <FormField
            id="name"
            register={register}
            errors={errors}
            placeholder="Name"
        />
        <FormField
            id="email"
            register={register}
            errors={errors}
            placeholder="Email"
        />
        <FormField
            id="password"
            register={register}
            errors={errors}
            placeholder="Password"
            type="password"
        />
        <FormField
            id="confirmPassword"
            register={register}
            errors={errors}
            placeholder="confirmPassword"
            type="password"
        />
        <Button type="submit" label="Login" />
        <div className="flex justify-center my-2">Or</div>
        <SocialAuth />
    </form>);
}

export default RegisterForm;