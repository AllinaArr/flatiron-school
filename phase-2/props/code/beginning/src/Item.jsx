const Item = ({ name, price }) => {
  return (
    <li>
      {name} (${price})
    </li>
  );
};

export default Item;
