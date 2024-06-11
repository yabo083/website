import PropTypes from "prop-types";

const Student = ({ name = "aaa", age, isStudent }) => {
  return (
    <div className="font-mono text-4xl p-3 border border-gray-300">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>{isStudent ? "Student" : "Not a student"}</p>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

export default Student;
