export default function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host__name">{name}</p>
      <img src={picture} alt={name} className="host__picture" />
    </div>
  );
}
