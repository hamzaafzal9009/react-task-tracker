import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Fuck OFf");
  };
  return (
    <header className="header">
      {/* Inline Dynamic */}
      {/* <h1 style={{ color: 'blue', backgroundColor: '#f2c022' }}>{title.age}</h1> */}
      {/* Variable Dynamic */}
      {/* <h1 style={con ? headerStyle:headerStyle2}>{title.age}</h1> */}

      <div className="d-flex">
        <h3 className="p-2 w-100">{title}</h3>
        <div className="p-2 flex-shrink-1">
          <Button btnClass="btn-secondary" text="Add" onClick={onClick} />
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Trakker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// const headerStyle2 = {
//     color: '#00ceff',
//     backgroundColor: '#000000'
// };

// const headerStyle = {
//     textDecoration: 'line-through'
// };

export default Header;
