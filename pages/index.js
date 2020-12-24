import Layout from '../components/Layout';
import BookingButton from '../components/BookingButton';
import Post from '../components/Post';
import InstagramCarousel from '../components/Carousel';

/*  TO DO

  Content
  - create news component for landing page
  - create blog page for past news items
  
  √ input instagram photos
  √ add contact form emailing to email address (brettondoesnails@gmail.com) **Added mail icon in footer
  √ make services page, displaying available services
  √ make prducts page, displaying available products
  √ find a way to control order of services/products coming from contentful
  √ link book nav to booking site
  √ add social media buttons
  √ make mobile layouts
  √ add floating booking button on mobile

  
  Style
  
  √ fade background

*/

/*  Issues

  - FOUC on desktop production version
  - Android: Footer hidden behind address bar (Firefox) and cut off at bottom (Chrome)
  - Firefox (Desktop, Android): FOUC including external link icon being fullscreen size.
  - Landscape view on small phones has header taking up half the screen. (might work to just adjust what sm: is in tailwind config)
  - Page title doesn't change based on page
  - iPad - footer cut off in landscape
  - iPhone 11 Pro (Chrome): horizontal scroll on page, and then displays smaller on rotation to portait orientation

  √ Gradient background on mobile isn't large enough to hide text before it gets to the "logo"
  √ hover on links in header not changing styling

*/

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'post',
    order: 'fields.date',
  });

  let photos = await client.getEntries({
    content_type: 'instagramPhoto',
    // order: 'createdAt',
  });

  return {
    props: {
      posts: data.items,
      photos: photos.items,
    },
    revalidate: 1,
  };
}

export default function Home({ photos, posts }) {
  const { title, date, body } = posts[0].fields;

  return (
    <Layout>
      <h2 className="font-didact text-pink text-2xl self-center mb-4">News</h2>
      <Post title={title} date={date} body={body} />
      <h2 className="font-didact text-pink text-2xl self-center mb-4">
        Instagram
      </h2>
      <InstagramCarousel photos={photos} />
      <div className=" w-3/4 md:flex md:w-3/4 mx-auto hidden">
        {photos.map((photo, index) => (
          <a
            href={photo.fields.link}
            className="
                
                mx-auto
                md:w-1/3"
            target="_blank"
            rel="noopener"
          >
            <img
              key={index}
              src={photo.fields.image.fields.file.url}
              alt={photo.fields.image.fields.title}
            />
          </a>
        ))}
      </div>
      <BookingButton />
    </Layout>
  );
}
