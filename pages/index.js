import Layout from '../components/Layout';
import BookingButton from '../components/BookingButton';

/*  TO DO

  Content
  - input instagram photos
  - create news component for landing page
  - create blog page for past news items
  
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

export default function Home() {
  return (
    <Layout>
      <BookingButton />
    </Layout>
  );
}
