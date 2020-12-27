import { Carousel } from 'react-responsive-carousel';

const InstagramCarousel = ({ photos }) => {
  return (
    <Carousel
      className="w-3/4 mx-auto md:hidden"
      showThumbs={false}
      showStatus={false}
    >
      {photos.map((photo, index) => (
        <a
          href={photo.fields.link}
          target="_blank"
          rel="noopener"
          className="w-full h-full block"
          key={index}
        >
          <img
            key={index}
            src={photo.fields.image.fields.file.url}
            alt={photo.fields.image.fields.title}
            loading="lazy"
          />
        </a>
      ))}
    </Carousel>
  );
};

export default InstagramCarousel;
