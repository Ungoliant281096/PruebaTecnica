import { useProducts } from "../../context/productsContext";
import { Button, ButtonLink, Card } from "../ui";

export function ProductCard({ product }) {
  const { deleteProduct } = useProducts();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{product.title}</h1> 
      </header>
      <p>Descripcion: {product.description}</p>
      {/* format date */}
      <p>
        {" "}
        Fecha de creación:  
        {product.date &&
          new Date(product.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
      </p>
      <footer>
      <div className="flex gap-x-2 items-baseline">
          <Button onClick={() => deleteProduct(product._id)}>Eliminar</Button>
          <ButtonLink to={`/products/${product._id}`}>Editar</ButtonLink>
        </div>
      </footer>
    </Card>
  );
}
