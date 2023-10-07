const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Comece a adicionar alguns itens à sua lista de viagens 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "Você já pegou tudo! Pronto para ir ✈"
          : `👜 Você tem ${numItems} itens em sua lista e já colocou ${numPacked} na mala (${numPercentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
