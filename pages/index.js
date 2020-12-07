import Layout from '../components/Layout';
import BookingButton from '../components/BookingButton';

/*  TO DO

  Content
  - input instagram photos
  - make prducts page, displaying available products
  - make services page, displaying available services
  - add contact form emailing to email address (brettondoesnails@gmail.com)
  - create news component for landing page
  - create blog page for past news items
  √ link book nav to booking site
  √ add social media buttons
  √ make mobile layouts
  √ add floating booking button on mobile

  
  Style
  √ fade background

*/

/*  Issues

  √ hover on links in header not changing styling

*/

/* const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'productCard',
  });

  return {
    props: {
      products: data.items,
    },
  };
} */

export default function Home({ products }) {
  return (
    <Layout>
      <BookingButton />
    </Layout>
  );
}