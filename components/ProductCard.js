export default function ProductCard(props) {
  const { name, desc, img } = props;
  return (
    <li className="list-none">
      <div className="w-1/4 ">
        <h4 className="text-white">{name}</h4>
        <img src={img} alt={name} className="w-80 h-80" />
        <p>{desc}</p>
      </div>
    </li>
  );
}
