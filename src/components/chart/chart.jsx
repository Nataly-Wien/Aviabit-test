import './chart.scss';
import React, {useState, useEffect, useRef} from 'react';
import {scaleLinear, scaleTime, timeFormat, min, max, extent, isoParse} from 'd3';
import PropTypes from 'prop-types';
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import {getHourMin} from '../../common';
import {CHART_MARGIN, CHART_LEGEND_DATA} from '../../const';

const Chart = ({flights, isFilters}) => {
  const svgContainer = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setSvgContainerSize = () => {
    setWidth(svgContainer.current.clientWidth);
    setHeight(svgContainer.current.clientHeight);
  };

  const formatDate = timeFormat(`%d %b`);

  useEffect(() => {
    setSvgContainerSize();
    window.addEventListener(`resize`, setSvgContainerSize);

    return () => window.removeEventListener(`resize`, setSvgContainerSize);
  }, [isFilters]);

  const innerWidth = width - (CHART_MARGIN.left + CHART_MARGIN.right);
  const innerHeight = height - (CHART_MARGIN.top + CHART_MARGIN.bottom);

  const xScale = scaleTime()
    .domain(extent(flights, (flight) => isoParse(flight.dateFlight)))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain([min(flights, (flight) => flight.timeNight), max(flights, (flight) => flight.timeWork)])
    .range([0, innerHeight])
    .nice();

  return (
    <div ref={svgContainer} className="chart">
      <svg>
        <g transform={`translate(${CHART_MARGIN.left}, ${CHART_MARGIN.top})`}>
          {xScale.ticks().map((tick) =>
            <g key={tick} transform={`translate(${xScale(tick)}, 0)`}>
              <line className="chart__line" y2={innerHeight} stroke={`black`} />
              <text className="chart__axis-text" y={innerHeight + 20} style={{textAnchor: `start`}}>{formatDate(tick)}</text>
            </g>
          )}
          {yScale.ticks().map((tick) =>
            <g key={tick} transform={`translate(0, ${innerHeight - yScale(tick)})`}>
              <line className="chart__line" x2={innerWidth} stroke={`black`} />
              <text className="chart__axis-text" x="-30" dy="5" style={{textAnchor: `middle`}}>{getHourMin(tick)}</text>
            </g>
          )}
          {flights.map((it) =>
            <g key={it.dateFlight} transform={`translate(${xScale(isoParse(it.dateFlight))}, 0)`}>
              <rect className="chart__col chart__col--work" y={innerHeight - yScale(it.timeWork)} width={20} height={yScale(it.timeWork)} />
              <rect className="chart__col chart__col--biological" y={innerHeight - yScale(it.timeBiologicalNight)} width={16} height={yScale(it.timeBiologicalNight)} />
              <rect className="chart__col chart__col--block" y={innerHeight - yScale(it.timeBlock)} width={12} height={yScale(it.timeBlock)} />
              <rect className="chart__col chart__col--flight" y={innerHeight - yScale(it.timeFlight)} width={8} height={yScale(it.timeFlight)}/>
              <rect className="chart__col chart__col--night" y={innerHeight - yScale(it.timeNight)} width={4} height={yScale(it.timeNight)} />
            </g>
          )}
          <text className="chart__text" transform={`translate(-70, ${innerHeight / 2}) rotate(-90)`} x={0} y={0} style={{textAnchor: `middle`}}>Рабочее время</text>
        </g>
      </svg>
      <ul className="chart__legend">
        {CHART_LEGEND_DATA.map((it) => <li key={it.name} className={`chart__legend-text chart__legend-text--${it.name}`}>{it.text}</li>)}
      </ul>
    </div>
  );
};

Chart.propTypes = {
  flights: PropTypes.arrayOf(flightTypesValidation),
  isFilters: PropTypes.bool,
};

export default Chart;
