import { connect } from 'react-redux';
import { changeDisplayMode } from '../actions/HeaderActions';
import Header from '../components/Header/Header';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
  changeDisplayMode,
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
