import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
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
    order: 'fields.order',
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
      <div className="flex flex-col">
        <h2 className="text-pink text-3xl md:text-4xl font-didact self-center mb-8">
          Services
        </h2>
        {categories.map((category, index) => {
          const { name, description, image } = category.fields;

          return (
            <ServiceCategory
              key={index}
              categoryName={name}
              services={services}
              image={image}
              description={description}
            />
          );
        })}
      </div>

      <BookingButton />
    </Layout>
  );
};

export default Services;
