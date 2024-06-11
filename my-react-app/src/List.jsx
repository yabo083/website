import PropTypes from "prop-types";

function List(props) {
  const fruits = props.item;
  const category = props.categary;
  //   fruits.sort((a,b) => a.name.localeCompare(b.name)); // sort by name
  //   fruits.sort((a,b) => b.name.localeCompare(a.name)); // reverse sort by name
  //   fruits.sort((a,b) => a.calories - b.calories); // sort by calories
  //   fruits.sort((a, b) => b.calories - a.calories); // reverse sort by calories

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 50);
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories > 50);

  const listItems = fruits.map((fruit, index) => (
    <li
      className="text-3xl text-gray-600  text-center m-0 hover:text-black cursor-pointer"
      key={index}
    >
      {fruit.name}:&nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <div>
      <h1 className="text-4xl font-bold text-black mb-2.5 text-center rounded-lg border-solid bg-blue-300">
        {props.category}
      </h1>
      <ul className="list-none ">{listItems}</ul>
    </div>
  );
}

List.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
  category: PropTypes.string,
};

List.defalutProps = {
  item: [],
  category: "Category",
};
export default List;
