import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { getDirectRuleOfThree } from '../../utils/usefulFunctions';
import { ContextUTech } from '../context/uTechContext';

const UTechDot = props => {
  const { dotData } = props;

  const { prueba } = useContext(ContextUTech);

  return (
    <circle
      key={dotData.id}
      r={dotData.radius}
      cx={dotData.position.x + dotData.radius}
      cy={dotData.position.y + dotData.radius}
      stroke="white"
      strokeWidth={`24px`}
      className="lalala"
      onClick={() => console.log(dotData)}
      onMouseEnter={() => console.log(dotData)}
    />
  );
};

UTechDot.PropTypes = {
  dotData: PropTypes.shape({
    title: PropTypes.string,
    radius: PropTypes.number,
    id: PropTypes.number,
    related: PropTypes.array,
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  }),
};

export default UTechDot;