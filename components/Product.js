import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ShowMoreText from 'react-show-more-text';
import ProductCarousel from './ProductCarousel';

const Product = ({ price, size, description, images, name }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-2 shadow-lg font-didact">
      <div className="flex justify-between text-lg">
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
      <span className="text-gray-500 mb-2">{size}</span>
      {images && images.length === 1 && (
        <img
          src={images[0].fields.file.url}
          alt={name}
          className="w-1/2 mx-auto"
          loading="lazy"
        />
      )}
      {images && images.length > 1 && (
        <ProductCarousel images={images} name={name} />
      )}
      <div className="productDescription pt-2 md:hidden">
        <ShowMoreText
          lines={3}
          more="Show more"
          less="Show less"
          expanded={false}
        >
          {documentToReactComponents(description)}
        </ShowMoreText>
      </div>
      <div className="productDescription pt-2 hidden md:block">
        {documentToReactComponents(description)}
      </div>
    </div>
  );
};

export default Product;
