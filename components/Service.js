import ShowMoreText from 'react-show-more-text';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Service = ({ name, time, price, description }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-2 shadow-lg font-didact">
      <div className="flex justify-between text-lg">
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
      <span className="text-gray-500 mb-2">{time}</span>
      <div className="flex flex-grow flex-col justify-center">
        <div>{documentToReactComponents(description)}</div>
      </div>
    </div>
  );
};

export default Service;
