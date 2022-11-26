import './flight-short.scss';
import '../table-header/table-header.scss';
import React from 'react';
import dayjs from "dayjs";
import {flightTypesValidation} from '../../types-validation/flight-type-validation';

const FlightShort = ({flight}) => {
  return (
    <div className={`flight-short ${flight.type ? ` flight-short--plan` : ``}`}>
      <div className="flight-short__wrapper flight-short__wrapper--info">
        <span className="flight-short__data flight-date">
          {dayjs(flight.dateFlight).format('DD.MM.YY')}
        </span>
        <span className="flight-short__data flight-time">
          {dayjs(flight.dateFlight).format('HH:mm')}
        </span>
        <span className="flight-short__data flight">
          {flight.flight}
        </span>
        <span className="flight-short__data pln-type">
          {flight.plnType}
        </span>
        <span className="flight-short__data pln">
          {flight.pln}
        </span>
      </div>
      <div className="flight-short__wrapper flight-short__wrapper--data">
        <span className="flight-short__data time-flight">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" height="30" viewBox="0 0 30 30">
            <path d="M 0.300781 15.917969 L 2.140625 17.757812 L 13.164062 17.757812 L 11.324219 25.105469 L 13.164062 25.105469 L 18.679688 17.757812 L 26.027344 17.757812 C 29.703125 17.757812 29.703125 15.917969 29.703125 15.917969 C 29.703125 14.078125 26.027344 12.242188 26.027344 12.242188 L 18.679688 12.242188 L 13.164062 4.894531 L 11.324219 4.894531 L 13.164062 12.242188 L 3.976562 12.242188 L 2.140625 8.566406 L 0.300781 8.566406 Z M 0.300781 15.917969 " fill="currentColor" />
          </svg>
          {flight.timeFlight}
        </span>
        <span className="flight-short__data time-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M 1.910156 1.878906 L 0.300781 3.492188 L 2.171875 3.492188 L 2.171875 6.714844 L 4.875 6.714844 L 4.875 3.492188 L 5.796875 3.480469 L 6.714844 3.460938 L 5.121094 1.863281 L 3.523438 0.269531 Z M 24.84375 1.964844 L 23.265625 3.542969 L 24.179688 3.558594 L 25.101562 3.578125 L 25.121094 5.171875 L 25.128906 6.769531 L 27.835938 6.769531 L 27.847656 5.171875 L 27.863281 3.578125 L 28.785156 3.558594 L 29.699219 3.542969 L 28.125 1.964844 C 27.253906 1.097656 26.519531 0.382812 26.484375 0.382812 C 26.449219 0.382812 25.710938 1.097656 24.84375 1.964844 Z M 14.296875 0.902344 C 13.570312 1.085938 13.171875 1.558594 12.949219 2.5 C 12.867188 2.835938 12.851562 3.546875 12.820312 7.886719 L 12.789062 12.886719 L 7.234375 15.496094 C 4.179688 16.929688 1.53125 18.171875 1.347656 18.257812 C 0.902344 18.453125 0.628906 18.707031 0.46875 19.058594 C 0.347656 19.308594 0.328125 19.429688 0.328125 20.046875 C 0.328125 20.664062 0.339844 20.753906 0.421875 20.753906 C 0.53125 20.753906 12.636719 18.6875 12.746094 18.652344 C 12.804688 18.632812 12.816406 19.367188 12.804688 22.28125 L 12.789062 25.933594 L 11.417969 26.582031 C 10.664062 26.941406 9.960938 27.304688 9.859375 27.390625 C 9.546875 27.632812 9.414062 27.976562 9.378906 28.636719 C 9.347656 29.203125 9.351562 29.214844 9.472656 29.214844 C 9.542969 29.214844 10.769531 29.027344 12.1875 28.808594 C 13.617188 28.585938 14.875 28.40625 14.984375 28.40625 C 15.101562 28.40625 16.355469 28.59375 17.78125 28.808594 C 19.210938 29.035156 20.421875 29.214844 20.480469 29.214844 C 20.574219 29.214844 20.585938 29.15625 20.585938 28.65625 C 20.585938 28.035156 20.492188 27.757812 20.179688 27.457031 C 20.082031 27.367188 19.375 26.992188 18.609375 26.625 L 17.21875 25.960938 L 17.199219 22.320312 L 17.1875 18.683594 L 17.316406 18.6875 C 17.390625 18.6875 20.191406 19.160156 23.546875 19.734375 L 29.648438 20.78125 L 29.664062 20.070312 C 29.675781 19.394531 29.671875 19.332031 29.53125 19.050781 C 29.453125 18.882812 29.304688 18.675781 29.199219 18.589844 C 29.09375 18.503906 26.363281 17.1875 23.117188 15.660156 L 17.21875 12.894531 L 17.183594 7.972656 C 17.160156 4.503906 17.132812 2.957031 17.085938 2.695312 C 16.917969 1.828125 16.609375 1.320312 16.078125 1.050781 C 15.78125 0.902344 15.683594 0.878906 15.128906 0.867188 C 14.789062 0.855469 14.414062 0.871094 14.296875 0.902344 Z M 2.171875 9.9375 L 2.171875 11.316406 L 4.875 11.316406 L 4.875 8.554688 L 2.171875 8.554688 Z M 25.132812 9.992188 L 25.132812 11.375 L 27.835938 11.375 L 27.835938 8.613281 L 25.132812 8.613281 Z M 25.132812 9.992188 " fill="currentColor" />
            <path d="M 2.171875 14.488281 C 2.171875 15.574219 2.1875 15.867188 2.246094 15.847656 C 2.28125 15.835938 2.890625 15.632812 3.597656 15.398438 L 4.875 14.972656 L 4.875 13.101562 L 2.171875 13.101562 Z M 25.132812 14.132812 L 25.132812 15.046875 L 26.441406 15.484375 C 27.164062 15.726562 27.765625 15.921875 27.796875 15.921875 C 27.820312 15.921875 27.835938 15.3125 27.835938 14.570312 L 27.835938 13.214844 L 25.132812 13.214844 Z M 2.171875 23.691406 L 2.171875 25.070312 L 4.875 25.070312 L 4.875 22.308594 L 2.171875 22.308594 Z M 25.132812 23.746094 L 25.132812 25.128906 L 27.835938 25.128906 L 27.835938 22.367188 L 25.132812 22.367188 Z M 2.171875 28.292969 L 2.171875 29.675781 L 4.875 29.675781 L 4.875 26.910156 L 2.171875 26.910156 Z M 25.132812 28.351562 L 25.132812 29.730469 L 27.835938 29.730469 L 27.835938 26.96875 L 25.132812 26.96875 Z M 25.132812 28.351562 " fill="currentColor" />
          </svg>
          {flight.timeBlock}
        </span>
        <span className="flight-short__data time-night">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" height="30" viewBox="0 0 30 30">
            <path d="M 12.792969 1.117188 C 11.136719 1.269531 9.664062 1.945312 8.457031 3.109375 C 7.863281 3.683594 7.421875 4.242188 7.097656 4.828125 L 6.933594 5.125 L 6.519531 5.070312 C 4.585938 4.820312 3.003906 5.378906 1.703125 6.769531 C 1.121094 7.382812 0.644531 8.238281 0.429688 9.050781 C 0.246094 9.742188 0.257812 11.066406 0.460938 11.769531 C 0.984375 13.601562 2.355469 14.988281 4.199219 15.546875 C 4.710938 15.703125 4.773438 15.703125 9.085938 15.734375 L 13.445312 15.753906 L 13.445312 12.855469 L 9.222656 12.835938 L 4.992188 12.8125 L 4.605469 12.621094 C 4.136719 12.390625 3.566406 11.804688 3.359375 11.351562 C 3.242188 11.09375 3.207031 10.875 3.207031 10.398438 C 3.199219 9.851562 3.226562 9.722656 3.390625 9.363281 C 3.648438 8.824219 4.109375 8.347656 4.640625 8.113281 C 4.992188 7.949219 5.152344 7.921875 5.648438 7.921875 C 6.199219 7.914062 6.269531 7.933594 6.828125 8.210938 C 7.492188 8.535156 7.878906 8.582031 8.328125 8.394531 C 8.816406 8.1875 8.996094 7.941406 9.265625 7.085938 C 9.722656 5.648438 10.867188 4.539062 12.34375 4.105469 C 12.632812 4.019531 13.152344 3.988281 14.574219 3.964844 L 16.414062 3.929688 L 16.414062 1.046875 L 14.882812 1.054688 C 14.035156 1.0625 13.09375 1.089844 12.792969 1.117188 Z M 12.792969 1.117188 " fill="currentColor"/>
            <path d="M 20.292969 1.191406 C 19.78125 1.445312 19.472656 2.027344 19.535156 2.59375 C 19.554688 2.75 19.699219 3.171875 19.863281 3.53125 C 20.6875 5.359375 21.003906 7.132812 20.886719 9.203125 C 20.589844 14.332031 16.773438 18.78125 11.714844 19.914062 C 9.273438 20.460938 6.71875 20.226562 4.53125 19.257812 C 3.515625 18.8125 3.363281 18.769531 3.03125 18.8125 C 2.289062 18.914062 1.761719 19.5 1.761719 20.234375 C 1.761719 20.570312 1.804688 20.714844 2.085938 21.242188 C 3.496094 23.890625 5.785156 26.121094 8.464844 27.445312 C 9.832031 28.121094 11.285156 28.582031 12.859375 28.839844 C 13.882812 28.996094 16.152344 29.003906 17.164062 28.839844 C 20.457031 28.308594 23.347656 26.808594 25.597656 24.457031 C 29.410156 20.496094 30.671875 14.84375 28.933594 9.605469 C 27.757812 6.0625 25.109375 2.972656 21.8125 1.289062 C 21.230469 0.992188 20.753906 0.964844 20.292969 1.191406 Z M 24.234375 6.925781 C 26.351562 9.652344 27.199219 12.890625 26.664062 16.207031 C 26.0625 19.90625 23.679688 23.128906 20.3125 24.820312 C 17.683594 26.132812 14.835938 26.441406 12.027344 25.710938 C 10.371094 25.285156 8.511719 24.316406 7.410156 23.304688 L 7.0625 22.984375 L 7.648438 23.039062 C 8.582031 23.117188 10.3125 23.074219 11.136719 22.957031 C 15.9375 22.269531 20.015625 19.355469 22.210938 15.054688 C 22.757812 13.972656 23.066406 13.179688 23.351562 12.0625 C 23.710938 10.667969 23.828125 9.550781 23.777344 7.949219 C 23.765625 7.210938 23.722656 6.546875 23.695312 6.476562 C 23.578125 6.195312 23.820312 6.402344 24.234375 6.925781 Z M 24.234375 6.925781 " fill="currentColor"/>
          </svg>
          {flight.timeNight}
        </span>
        <span className="flight-short__data time-biological-night">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" height="30" viewBox="0 0 30 30">
            <path d="M 21.332031 0.363281 C 20.867188 0.433594 20.054688 0.644531 19.714844 0.792969 L 19.480469 0.886719 L 19.707031 0.976562 C 20.074219 1.136719 20.949219 1.730469 21.449219 2.171875 C 22.40625 3.019531 23.25 4.386719 23.601562 5.679688 C 23.832031 6.488281 23.914062 7.9375 23.773438 8.757812 C 23.609375 9.792969 23.195312 10.851562 22.609375 11.75 C 22.035156 12.625 20.585938 13.902344 19.789062 14.226562 C 19.667969 14.277344 19.5625 14.34375 19.5625 14.371094 C 19.5625 14.433594 20.550781 14.75 21.117188 14.863281 C 21.722656 14.980469 23.152344 14.957031 23.808594 14.820312 C 26.0625 14.34375 27.925781 12.914062 28.925781 10.886719 C 31.15625 6.363281 28.347656 1.074219 23.328125 0.355469 C 22.761719 0.28125 21.902344 0.28125 21.332031 0.363281 Z M 11.382812 6.226562 C 8.894531 6.550781 6.949219 8.289062 6.363281 10.699219 C 6.050781 11.96875 6.210938 13.351562 6.796875 14.578125 C 8.398438 17.929688 12.695312 18.957031 15.628906 16.683594 C 17.097656 15.539062 17.90625 13.890625 17.90625 12.019531 C 17.90625 10.175781 16.988281 8.386719 15.457031 7.269531 C 14.738281 6.742188 13.652344 6.335938 12.664062 6.226562 C 12.011719 6.148438 11.976562 6.148438 11.382812 6.226562 Z M 10.898438 19.480469 C 7.417969 19.703125 4.519531 20.855469 2.621094 22.753906 C 1.902344 23.472656 1.472656 24.085938 1.023438 25.011719 C 0.507812 26.101562 0.300781 27.144531 0.300781 28.742188 L 0.300781 29.699219 L 23.863281 29.699219 L 23.824219 28.511719 C 23.773438 27.199219 23.714844 26.765625 23.464844 25.9375 C 23.105469 24.742188 22.511719 23.804688 21.46875 22.761719 C 20.597656 21.890625 19.859375 21.371094 18.707031 20.828125 C 16.527344 19.785156 13.707031 19.296875 10.898438 19.480469 Z M 10.898438 19.480469 " fill="currentColor" />
          </svg>
          {flight.timeBiologicalNight}
        </span>
        <span className="flight-short__data time-work">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M 29.261719 12.847656 L 29.699219 3.097656 L 26.601562 5.179688 C 23.796875 1.929688 19.714844 0.0078125 15.296875 0.0078125 C 7.027344 0.0078125 0.300781 6.730469 0.300781 15 C 0.300781 23.269531 7.027344 29.996094 15.296875 29.996094 C 18.25 29.996094 21.039062 29.128906 23.402344 27.601562 C 22.660156 26.449219 21.902344 25.257812 21.09375 24.128906 C 19.390625 25.210938 17.386719 25.828125 15.296875 25.828125 C 9.328125 25.828125 4.472656 20.96875 4.472656 15 C 4.472656 9.03125 9.328125 4.175781 15.296875 4.175781 C 18.253906 4.175781 21.066406 5.410156 23.09375 7.53125 L 20.074219 9.554688 Z M 29.261719 12.847656 " fill="currentColor" />
            <path d="M 14.054688 7.8125 L 14.054688 13.636719 L 11.425781 13.636719 L 11.425781 16.59375 L 17.007812 16.59375 L 17.007812 7.8125 Z M 14.054688 7.8125 " fill="currentColor" />
          </svg>
          {flight.timeWork}
        </span>
      </div>
      <div className="flight-short__wrapper flight-short__wrapper--place">
        <span className="flight-short__data takeoff-name">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3987 7.04297L29.3362 6.98828C28.7893 6.60547 28.0159 6.40625 27.0901 6.40625C25.6213 6.40625 24.1018 6.90234 23.4182 7.37109L18.0159 11.0586L7.48461 13.2969C7.39086 13.3164 7.30883 13.3516 7.2307 13.4062C7.02758 13.5469 6.91039 13.7891 6.92211 14.0352C6.94164 14.3906 7.21117 14.6758 7.56273 14.7109L12.0198 15.1562L7.67601 18.1211C6.38304 17.5273 5.15648 16.9492 4.02758 16.4102C2.28148 15.5742 1.13695 15.4219 0.601793 15.9609C0.0431997 16.5195 0.406481 17.4727 0.601793 17.7656L4.78539 23.1875C4.92601 23.3945 5.09007 23.5117 5.28148 23.543C5.60179 23.6016 5.88304 23.4062 6.17211 23.1992L7.2307 22.4688L13.1135 19.6133L12.2541 22.6875C12.1565 23.0312 12.3245 23.3867 12.6448 23.5312C12.7385 23.5742 12.8401 23.5938 12.9416 23.5938C13.0862 23.5938 13.2268 23.5547 13.3479 23.4727C13.426 23.418 13.4885 23.3555 13.5432 23.2734L16.9065 18.1602L18.9651 15.75L28.0979 9.51562C28.2385 9.42188 28.3752 9.33203 28.5119 9.24609C28.8284 9.04687 29.1252 8.85547 29.3401 8.63672C29.7971 8.17969 29.8244 7.66406 29.3987 7.04297ZM5.39476 22.9141C5.39476 22.9141 5.36351 22.9023 5.29711 22.8086L1.11742 17.3867C0.992419 17.2031 0.832262 16.625 1.05101 16.4102C1.10961 16.3516 1.24242 16.2734 1.51976 16.2734C2.02367 16.2734 2.77367 16.5156 3.75414 16.9844C5.02367 17.5938 6.31273 18.1914 7.57445 18.7695L7.73851 18.8477L13.8166 14.6953L7.62133 14.0703C7.58617 14.0664 7.55882 14.0352 7.55492 13.9961C7.55101 13.9727 7.56664 13.9453 7.61351 13.918L18.2073 11.668L23.7737 7.89453C24.3791 7.48437 25.8284 7.03906 27.1096 7.03906C27.8713 7.03906 28.4768 7.18359 28.9221 7.47656C29.1604 7.85547 29.0471 8.02344 28.883 8.1875C28.7212 8.34931 28.472 8.51112 28.1767 8.7029C28.1726 8.70558 28.1684 8.70825 28.1643 8.71094C28.0276 8.80078 27.883 8.89063 27.7346 8.99219L18.3518 15.3945L16.6213 17.4297L12.9885 22.9453C12.9768 22.9531 12.9573 22.957 12.9104 22.9492C12.8752 22.9336 12.8596 22.8945 12.8674 22.8555L14.1096 18.4219L6.91039 21.9219L5.80492 22.6797C5.67211 22.7734 5.47289 22.9141 5.39476 22.9141Z" fill="currentColor" />
            <path d="M5.39476 22.9141C5.39476 22.9141 5.36351 22.9023 5.29711 22.8086L1.11742 17.3867C0.992419 17.2031 0.832262 16.625 1.05101 16.4102C1.10961 16.3516 1.24242 16.2734 1.51976 16.2734C2.02367 16.2734 2.77367 16.5156 3.75414 16.9844C5.02367 17.5938 6.31273 18.1914 7.57445 18.7695L7.73851 18.8477L13.8166 14.6953L7.62133 14.0703C7.58617 14.0664 7.55882 14.0352 7.55492 13.9961C7.55101 13.9727 7.56664 13.9453 7.61351 13.918L18.2073 11.668L23.7737 7.89453C24.3791 7.48437 25.8284 7.03906 27.1096 7.03906C27.8713 7.03906 28.4768 7.18359 28.9221 7.47656C29.1604 7.85547 29.0471 8.02344 28.883 8.1875C28.7212 8.34931 28.472 8.51112 28.1767 8.7029L28.1643 8.71094C28.0276 8.80078 27.883 8.89063 27.7346 8.99219L18.3518 15.3945L16.6213 17.4297L12.9885 22.9453C12.9768 22.9531 12.9573 22.957 12.9104 22.9492C12.8752 22.9336 12.8596 22.8945 12.8674 22.8555L14.1096 18.4219L6.91039 21.9219L5.80492 22.6797C5.67211 22.7734 5.47289 22.9141 5.39476 22.9141Z" fill="currentColor" />
          </svg>
          {flight.takeoff.name}
        </span>
        <span className="flight-short__data takeoff-lat">
          {flight.takeoff.lat}
        </span>
        <span className="flight-short__data takeoff-long">
          {flight.takeoff.long}
        </span>
        <span className="flight-short__data landing-name">
          <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.9258 17.0352L19.3633 14.1016L11.2031 5.53516C11.1328 5.46094 11.0508 5.39844 10.957 5.35938C10.7109 5.25391 10.4141 5.28125 10.1875 5.43359C9.86719 5.65625 9.75781 6.07422 9.92969 6.42188L12.0742 10.8477L6.80469 8.49219C6.625 7.02734 6.45703 5.5625 6.30078 4.09375C6.07422 1.96094 5.56641 0.824219 4.74609 0.628906C4.66406 0.613281 4.58594 0.601562 4.5 0.601562C3.77734 0.601562 3.21094 1.33203 3.05859 1.67578L0.394531 8.71094C0.285156 8.96094 0.269531 9.17969 0.347656 9.38281C0.484375 9.71875 0.820312 9.86328 1.18359 10.0156L2.47656 10.5859L8.53516 14.4453L5.16406 15.4102C4.78906 15.5195 4.55469 15.875 4.60156 16.2617C4.63672 16.5312 4.8125 16.7734 5.0625 16.8828C5.15625 16.9258 5.25391 16.9492 5.35938 16.9531L11.9414 17.1523C11.957 17.6133 12.2344 18.0273 12.6641 18.2188C12.7969 18.2773 12.9375 18.3125 13.0977 18.3203C13.2031 18.4336 13.3242 18.5156 13.4609 18.5742C14.0352 18.8359 14.7422 18.5859 15.0312 18.0469C15.2539 17.9961 15.4492 17.8906 15.6094 17.7344L23.6406 21.3203C23.5391 21.4219 23.4609 21.543 23.3984 21.6719C23.2656 21.9727 23.2578 22.3008 23.375 22.6094C23.4883 22.9141 23.7227 23.1523 24.0195 23.2891C24.0898 23.3203 24.1602 23.3477 24.2383 23.3633C24.3281 23.3867 24.4258 23.3984 24.5195 23.3984C25 23.3984 25.4375 23.1133 25.6367 22.6719C25.6953 22.5391 25.7266 22.4023 25.7383 22.2578L26.6094 22.6484C26.7812 22.7227 26.9414 22.8008 27.1016 22.8789C27.4727 23.0586 27.8203 23.2266 28.1445 23.3008C28.2734 23.332 28.4023 23.3477 28.5156 23.3477C29.0234 23.3477 29.3984 23.0625 29.6758 22.4414L29.6914 22.3516C29.8203 20.1914 27.2891 17.6445 25.9258 17.0352ZM24.9961 22.3867C24.8828 22.6445 24.5664 22.7656 24.3047 22.6484C24.1758 22.5937 24.0781 22.4922 24.0273 22.3594C23.9805 22.2266 23.9805 22.0859 24.0391 21.9609C24.1172 21.7812 24.2891 21.668 24.4844 21.6523L24.7578 21.6328L24.9258 21.8477C25.0508 22.0078 25.0781 22.2109 24.9961 22.3867ZM5.34766 16.2461C5.32031 16.2344 5.30078 16.207 5.29688 16.1797C5.29297 16.1367 5.32031 16.0938 5.35938 16.082L10.2227 14.6875L2.80469 9.97266L1.45703 9.375C1.30078 9.30469 1.03125 9.19141 1.00391 9.12891C1.00391 9.12891 0.996094 9.09375 1.04297 8.98047L3.70703 1.94531C3.8125 1.70703 4.25391 1.23438 4.58594 1.3125C4.75781 1.35547 5.33984 1.68359 5.60547 4.17188C5.76953 5.70703 5.94531 7.25781 6.13281 8.77734L6.15625 8.97656L13.5469 12.2773L10.5586 6.11719C10.543 6.07813 10.5547 6.03125 10.5859 6.00781C10.6016 6 10.6211 5.99219 10.6367 5.99219L10.6992 6.01953L18.9062 14.6367L25.6406 17.6719C26.6992 18.1484 29.0508 20.3594 28.9961 22.2461C28.8242 22.5977 28.6562 22.6484 28.5156 22.6484C28.457 22.6484 28.3906 22.6367 28.3125 22.6211C28.0621 22.5594 27.766 22.418 27.4206 22.253C27.4158 22.2507 27.4111 22.2484 27.4062 22.2461C27.4036 22.2448 27.401 22.2435 27.3984 22.2423C27.2406 22.1653 27.0752 22.0846 26.8984 22.0039L15.3672 16.8555L15.207 17.1211C15.1133 17.2734 14.9531 17.3711 14.7734 17.375L14.5312 17.3867L14.4375 17.6719C14.3242 17.9297 14.0117 18.0508 13.7461 17.9336C13.6641 17.8984 13.5977 17.8398 13.5391 17.7617L13.4219 17.5938L13.2188 17.6172C13.1172 17.625 13.0312 17.6133 12.9492 17.5781C12.6992 17.4648 12.582 17.1875 12.668 16.9297L12.8242 16.4805L5.34766 16.2461Z" fill="currentColor" />
            <path d="M5.34766 16.2461C5.32031 16.2344 5.30078 16.207 5.29688 16.1797C5.29297 16.1367 5.32031 16.0938 5.35938 16.082L10.2227 14.6875L2.80469 9.97266L1.45703 9.375C1.30078 9.30469 1.03125 9.19141 1.00391 9.12891C1.00391 9.12891 0.996094 9.09375 1.04297 8.98047L3.70703 1.94531C3.8125 1.70703 4.25391 1.23438 4.58594 1.3125C4.75781 1.35547 5.33984 1.68359 5.60547 4.17188C5.76953 5.70703 5.94531 7.25781 6.13281 8.77734L6.15625 8.97656L13.5469 12.2773L10.5586 6.11719C10.543 6.07813 10.5547 6.03125 10.5859 6.00781C10.6016 6 10.6211 5.99219 10.6367 5.99219L10.6992 6.01953L18.9062 14.6367L25.6406 17.6719C26.6992 18.1484 29.0508 20.3594 28.9961 22.2461C28.8242 22.5977 28.6562 22.6484 28.5156 22.6484C28.457 22.6484 28.3906 22.6367 28.3125 22.6211C28.0621 22.5594 27.766 22.418 27.4206 22.253L27.4062 22.2461L27.3984 22.2423C27.2406 22.1653 27.0752 22.0846 26.8984 22.0039L15.3672 16.8555L15.207 17.1211C15.1133 17.2734 14.9531 17.3711 14.7734 17.375L14.5312 17.3867L14.4375 17.6719C14.3242 17.9297 14.0117 18.0508 13.7461 17.9336C13.6641 17.8984 13.5977 17.8398 13.5391 17.7617L13.4219 17.5938L13.2188 17.6172C13.1172 17.625 13.0312 17.6133 12.9492 17.5781C12.6992 17.4648 12.582 17.1875 12.668 16.9297L12.8242 16.4805L5.34766 16.2461Z" fill="currentColor" />
          </svg>
          {flight.landing.name}
        </span>
        <span className="flight-short__data landing-lat">
          {flight.landing.lat}
        </span>
        <span className="flight-short__data landing-long">
          {flight.landing.long}
        </span>
      </div>
    </div>
  );
};

FlightShort.propTypes = flightTypesValidation;

export default FlightShort;
