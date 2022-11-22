import PropTypes from 'prop-types';

const flightTypesValidation = PropTypes.shape({
  dateFlight: PropTypes.string,
  plnType: PropTypes.string,
  pln: PropTypes.string,
  timeFlight: PropTypes.number,
  timeBlock: PropTypes.number,
  timeNight: PropTypes.number,
  timeBiologicalNight: PropTypes.number,
  timeWork: PropTypes.number,
  type: PropTypes.number,
  takeoff: PropTypes.shape({
    name: PropTypes.string,
    lat: PropTypes.number,
    long: PropTypes.number,
  }),
  landing: PropTypes.shape({
    name: PropTypes.string,
    lat: PropTypes.number,
    long: PropTypes.number,
  }),
}).isRequired;

export {flightTypesValidation};
