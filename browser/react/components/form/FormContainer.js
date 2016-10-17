import { connect } from 'react-redux';
import { fetchAndGoToArtist } from '../../ducks/selectedArtist';

import Form from './Form';
const mapStateToProps = function (state) {
  return {
    artists: state.artists
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    goToArtist: function () {
      return dispatch(fetchAndGoToArtist)
    }
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
