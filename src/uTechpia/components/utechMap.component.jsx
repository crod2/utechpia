import React, { useRef, useEffect, useState } from 'react';
import { select } from 'd3';
import dataJson from '../../utils/data';

const UtechMap = () => {
  const svgRef = useRef();
  const [data, setData] = useState(dataJson);
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll('circle')
      .data(data)
      .join(
        enter => enter.append('circle').attr('class', 'circle'),
        update => update.attr('class', 'updated'),
        exit => exit.remove()
      )
      .attr('r', element => element.radius)
      .attr('cx', element => element.position.x + element.radius)
      .attr('cy', element => element.position.y + element.radius)
      .attr('stroke', 'white')
      .attr('stroke-width', '24px');
  }, [data]);
  return <svg className="map__svg" ref={svgRef} />;
};

export default UtechMap;
