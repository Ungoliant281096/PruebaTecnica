import React, { useState } from 'react'; 
import { Label } from './Label';

const RoleSelect = ({ onSelectRole }) => {
  const [role, setRole] = useState('user'); // Valor por defecto

  const handleChange = (event) => {
    setRole(event.target.value);
    onSelectRole(event.target.value); // Puedes pasar el valor seleccionado al componente padre si es necesario
  };

  return (
    <div className="mb-4">
      <Label 
        htmlFor="roleSelect" 
        className="block text-sm font-medium text-slate-300 mb-2"
      >
        ¿Eres invitado o Usuario?:
      </Label>
      
      <select 
        id="roleSelect" 
        value={role} 
        onChange={handleChange}
        className="bg-green-100 text-black block w-full p-2 border rounded-md shadow-sm"
      >
        <option value="user">Invitado</option>
        <option value="admin">Usuario</option>
      </select>
    </div>
  );
};

export default RoleSelect;
