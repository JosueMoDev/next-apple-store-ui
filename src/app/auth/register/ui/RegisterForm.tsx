"use client";

import clsx from "clsx";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import { RegisterMutation } from "../api/registerMutaion";

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage("");
    const { lastName, firstName, email, password } = data;

    try {
      const user = await RegisterMutation({ lastName, firstName, email, password });
      console.log( user );
      // Registro exitoso, puedes hacer algo aquí, como redireccionar al usuario a una página de inicio de sesión.
    } catch (error) {
      console.error("Error al registrar:", error);
      // Si hay un error en el registro, establece el mensaje de error para mostrar al usuario.
      setErrorMessage("Error al registrar. Por favor, inténtalo de nuevo.");
    }
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      {/* {
        errors.name?.type === 'required' && (
          <span className="text-red-500">* El nombre es obligatorio</span>
        )
      } */}

      <label htmlFor="email">Nombre completo</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.firstName,
        })}
        type="text"
        autoFocus
        {...register("firstName", { required: true })}
      />

      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.lastName,
        })}
        type="text"
        autoFocus
        {...register("lastName", { required: true })}
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.email,
        })}
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.password,
        })}
        type="password"
        {...register("password", { required: true, minLength: 6 })}
      />

      <span className="text-red-500">{errorMessage} </span>

      <button className="btn-primary">Crear cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};
