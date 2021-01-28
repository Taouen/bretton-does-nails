import Head from 'next/head';
import Layout from '../components/Layout';
import BookingButton from '../components/BookingButton';
import Post from '../components/Post';
import InstagramCarousel from '../components/InstagramCarousel';

/*  TO DO

  Content
  - create blog page for past news items
  - add next/link into carousel components
  - test rel="noopener" on Link component vs on the child a element
  
  
  √ create news component for landing page
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
  - Firefox (Desktop, Android): FOUC including external link icon being fullscreen size.
  - Android: Footer hidden behind address bar (Firefox) and cut off at bottom (Chrome)
  - iPad - footer cut off
  - iPhone 11 Pro (Chrome): horizontal scroll on page, and then displays smaller on rotation to portait orientation
  - md: is too large for mobile landscape (aside from full screen iphones)
  
  √ Desktop/iPad: Show More/Less not adhering to positioning (show more does not push other elements down to make space, leaving 'show less' behind other elements.) - Due to md:max-h-40 on parent div for Post component
  √ Mobile: Book Now link wraps second word onto a new line.
  √ Mobile: Instagram carousel is sized based off largest image, need to center smaller images vertically.
  √ Landscape view on small phones has header taking up half the screen. (might work to just adjust what sm: is in tailwind config)
  √ Page title doesn't change based on page
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
    order: '-sys.createdAt',
    limit: 3,
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
    <>
      <Head>
        <title>Bretton Does Nails | Home</title>
      </Head>
      <Layout>
        <h2 className="font-didact text-pink text-2xl self-center mb-4">
          News
        </h2>
        <Post title={title} date={date} body={body} />
        <h2 className="font-didact text-pink text-2xl self-center mb-4">
          Instagram
        </h2>
        <InstagramCarousel photos={photos} />
        <div className=" w-3/4 md:flex items-center md:w-3/4 mx-auto hidden">
          {photos.map((photo, index) => (
            <a
              href={photo.fields.link}
              className="
                
                mx-auto
                md:w-1/4"
              target="_blank"
              rel="noopener"
              key={index}
            >
              <img
                src={photo.fields.image.fields.file.url}
                alt={photo.fields.image.fields.title}
              />
            </a>
          ))}
        </div>
        <BookingButton />
      </Layout>
    </>
  );
}
