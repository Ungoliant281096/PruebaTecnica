import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import RoleSelect from "../components/ui/RoleSelect"; // Importa el componente RoleSelect

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    setValue, // Para actualizar manualmente los valores del formulario
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  // Estado local para el rol seleccionado
  const [selectedRole, setSelectedRole] = useState('user');

  const onSubmit = async (value) => {
    value.rol = selectedRole; // Añadir el rol seleccionado al valor que se envía
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/products");
  }, [isAuthenticated]);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-lg">
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-3xl font-bold text-slate-300">Registrarse</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Label htmlFor="username">Nombre de usuario:</Label>
            <Input
              type="text"
              name="username"
              placeholder="juan perez"
              {...register("username")}
              autoFocus
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.username?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username?.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="email">Correo:</Label>
            <Input
              name="email"
              placeholder="tucorreo@ejemplo.com"
              {...register("email")}
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="password">Contraseña:</Label>
            <Input
              type="password"
              name="password"
              placeholder="********"
              {...register("password")}
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="confirmPassword">Confirmar Contraseña:</Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="********"
              {...register("confirmPassword")}
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>

          {/* Componente RoleSelect */}
          <RoleSelect
            onSelectRole={(role) => {
              setSelectedRole(role); // Actualiza el estado local del rol
              setValue("rol", role); // Actualiza el valor en react-hook-form
            }}
            {...register("rol")}
          />

          <div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-slate-100 py-2 px-4 rounded-md">
              Enviar
            </Button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-slate-300">
          Ya estas registrado?
          <Link className="text-sky-500 ml-1" to="/login">
            Ingresar
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;
