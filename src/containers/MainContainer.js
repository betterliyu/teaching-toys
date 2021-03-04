import { connect } from 'react-redux';
import Main from '../components/Main/Main';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;
