import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

/* 
  - Will publish with single images, will need to learn to make a carousel for products that have multiple images.

*/

const Product = ({ price, size, description, images, name }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-2 shadow-lg font-didact">
      <div className="flex justify-between text-lg">
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
      <span className="text-gray-500 mb-2">{size}</span>
      {images && (
        <img
          src={images[0].fields.file.url}
          alt={name}
          className="w-1/2 mx-auto"
          loading="lazy"
        />
      )}
      <div className="productDescription pt-2">
        {documentToReactComponents(description)}
      </div>
    </div>
  );
};

export default Product;
