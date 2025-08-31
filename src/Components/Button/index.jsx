import PropTypes from 'prop-types';

import { Button } from './styles';

function DefaltButton({ children, topic, ...props }) {
  return (
    <Button {...props} topic={topic}>
      {children}
    </Button>
  );
}

DefaltButton.propTypes = {
  children: PropTypes.node.isRequired,
  topic: PropTypes.string,
};

export default DefaltButton;
