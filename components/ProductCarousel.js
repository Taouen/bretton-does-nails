import { Carousel } from 'react-responsive-carousel';

const ProductCarousel = ({ images, name }) => {
  return (
    <Carousel className="w-1/2 mx-auto" showThumbs={false} showStatus={false}>
      {images.map((photo, index) => (
        <a
          href={photo.fields.link}
          target="_blank"
          rel="noopener"
          className="w-full h-full block"
          key={index}
        >
          <img src={photo.fields.file.url} alt={name} loading="lazy" />
        </a>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
