import { connect } from 'react-redux';
import { changeWindowSize } from '../actions/SystemActions';
import Header from '../components/Header/Header';

const mapStateToProps = (state) => ({
  isMaximized: state.getIn(['System', 'windowIsMaximized']),
});

const mapDispatchToProps = {
  changeWindowSize,
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
