import { connect } from 'react-redux';
import { switchPage } from '../actions/NavActions';
import Nav from '../components/Nav/Nav';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => ({
  active: state.getIn(['NavReducers', 'selectedKey']) === 1,
});

const mapDispatchToProps = {
  onNavChanged: switchPage,
};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavContainer;
