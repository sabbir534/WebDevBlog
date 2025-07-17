'use client';

import { LoginSchema, LoginSchemaType } from "@/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../common/Button";
import FormField from "../common/FormField";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

    const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
        console.log("Form submitted with data:", data);
        // Handle login logic here
    };

    return (<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[500px] m-auto mt-8 gap-2">
        <Heading title="Login to WEBDEV.blog" lg center />
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
        <Button type="submit" label="Register" />
        <div className="flex justify-center my-2">Or</div>
        <SocialAuth />
    </form>);
}

export default LoginForm;