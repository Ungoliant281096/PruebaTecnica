import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useProducts } from "../context/productsContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm, Controller } from "react-hook-form";
import { CantidadInput } from "../components/ui/CantidadInput";

dayjs.extend(utc);

export function ProductFormPage() {
  const { createProduct, getProduct, updateProduct } = useProducts();
  const navigate = useNavigate();
  const params = useParams();
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const productData = {
        ...data,
        date: dayjs.utc(data.date).format(),
      };
      console.log("Datos enviados al backend:", productData); // Agrega este log
      if (params.id) {
        await updateProduct(params.id, productData);
      } else {
        await createProduct(productData);
      }
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
        const product = await getProduct(params.id);
        setValue("title", product.title);
        setValue("description", product.description);
        setValue(
          "date",
          product.date ? dayjs(product.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("quantity", product.quantity || 0);
      }
    };
    loadProduct();
  }, [params.id, getProduct, setValue]);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Nombre del producto</Label>
        <Input
          type="text"
          name="title"
          placeholder="Nombre"
          {...register("title", { required: "Ingresa un titulo." })}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">{errors.title.message}</p>
        )}

        <Label htmlFor="description">Descripción</Label>
        <Textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Descripción"
          {...register("description")}
        ></Textarea>

        <Label htmlFor="date">Fecha de registro</Label>
        <Input type="date" name="date" {...register("date")} />

        <Label htmlFor="quantity">Cantidad</Label>
        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <CantidadInput
              value={field.value || 0}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />

        <Button type="submit">Guardar</Button>
      </form>
    </Card>
  );
}
