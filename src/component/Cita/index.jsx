import React, { useEffect, useState } from "react";
import Title from "../componentes_formularios/Title";
const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  servicios: "",
  artista: "",
  mensaje: "",
};
const Citas = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.values,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.nombre ||
      !form.email ||
      !form.telefono ||
      !form.servicios ||
      !form.mensaje
    ) {
      alert("Datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <>
      <Title>Citas en nuestro estudio</Title>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placehlder="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="text"
          name="nombre"
          placehlder="nombre"
          onChange={handleChange}
          value={form.nombre}
        />
      </form>
    </>
  );
};
export { Citas };
