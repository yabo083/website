import PropTypes from 'prop-types';

const UserGeeting = (props) => {
    const Welcome = () => {
        return <h1 className="text-4xl bg-green-300 text-cyan-50 p-[10px] rounded-lg m-0">Welcome, {props.username}</h1>;
    };

    const NotWelcome = () => {
        return <h1 className="text-4xl bg-red-500 text-cyan-50 p-[10px] rounded-lg m-0">cao</h1>;
    }


  return props.isLoggedIn ? <Welcome /> : <NotWelcome />;
};

UserGeeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired
};

UserGeeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGeeting;
