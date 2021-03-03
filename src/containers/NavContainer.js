import { connect } from 'react-redux';
import Nav from '../components/Nav/Nav';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => ({
  category: 'learning',
  game: 'Grade3_U6',
});

const mapDispatchToProps = {
};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavContainer;
