import { Carousel } from 'react-responsive-carousel';

const ProductCarousel = ({ images, name }) => {
  console.log(images);
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
          <img src={photo.fields.file.url} alt={name} />
        </a>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
