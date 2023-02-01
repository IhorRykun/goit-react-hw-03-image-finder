import PropTypes from 'prop-types';
import { ButtonLoader } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <>
      <ButtonLoader type="button" onClick={onClick}>
        Load More
      </ButtonLoader>
    </>
  );
};

ButtonLoader.prototype = {
  onClick: PropTypes.func.isRequired,
};
