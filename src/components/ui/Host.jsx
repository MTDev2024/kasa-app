export default function Host({ name = "", picture }) {
  // Découpage nom complet en prénom + nom
  // "Alex Dupont" → ["Alex", "Dupont"]
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="host">
      <p className="host__name">
        {firstName}
        <br />
        {lastName}
      </p>

      <img src={picture} alt={name} className="host__picture" />
    </div>
  );
}
