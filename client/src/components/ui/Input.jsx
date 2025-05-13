import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="w-full bg-green-100 text-black px-4 py-2 rounded-md"
  />
));
