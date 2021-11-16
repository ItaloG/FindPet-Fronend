function Services({ servico, handleDeleteServico, id }) {
  return (
    <div id={id}>
      {servico.servico}
      <span onClick={handleDeleteServico}>&times;</span>
    </div>
  );
}

export const Services;