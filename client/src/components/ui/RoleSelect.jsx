import React, { useState } from 'react';

const RoleSelect = ({ onSelectRole }) => {
  const [role, setRole] = useState('user'); // Valor por defecto

  const handleChange = (event) => {
    setRole(event.target.value);
    onSelectRole(event.target.value); // Puedes pasar el valor seleccionado al componente padre si es necesario
  };

  return (
    <div className="mb-4">
      <label 
        htmlFor="roleSelect" 
        className="block text-sm font-medium text-slate-300 mb-2"
      >
        Selecciona un rol:
      </label>
      
      <select 
        id="roleSelect" 
        value={role} 
        onChange={handleChange}
        className="bg-zinc-600 block w-full p-2 border rounded-md shadow-sm"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSelect;
