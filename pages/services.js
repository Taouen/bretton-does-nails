import BookingButton from '../components/BookingButton';
import Layout from '../components/Layout';
import ServiceCategory from '../components/ServiceCategory';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'service',
  });
  let cats = await client.getEntries({
    content_type: 'serviceCategory',
  });

  return {
    props: {
      services: data.items,
      categories: cats.items,
    },
  };
}

const Services = ({ services, categories }) => {
  return (
    <Layout>
      <div className="pt-10">
        {categories.map((category, index) => {
          const { name } = category.fields;
          console.log('returning category component');
          return (
            <ServiceCategory
              key={index}
              categoryName={name}
              services={services}
            />
          );
        })}
      </div>

      <BookingButton />
    </Layout>
  );
};

export default Services;
