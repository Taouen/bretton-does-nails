import { Carousel } from 'react-responsive-carousel';

const InstagramCarousel = ({ photos }) => {
  return (
    <Carousel
      className="w-3/4 mx-auto md:w-1/2"
      showThumbs={false}
      showStatus={false}
    >
      {photos.map((photo, index) => (
        <a
          href={photo.fields.link}
          target="_blank"
          rel="noopener"
          className="w-full h-full block"
        >
          <img
            key={index}
            src={photo.fields.image.fields.file.url}
            alt={photo.fields.image.fields.title}
          />
        </a>
      ))}
    </Carousel>
  );
};

export default InstagramCarousel;
