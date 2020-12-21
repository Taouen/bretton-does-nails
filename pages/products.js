import BookingButton from '../components/BookingButton';
import Layout from '../components/Layout';
import ProductCategory from '../components/ProductCategory';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'product',
    // order: 'fields.order',
  });
  let cats = await client.getEntries({
    content_type: 'productCategory',
  });

  return {
    props: {
      products: data.items,
      categories: cats.items,
    },
    revalidate: 1,
  };
}

const Products = ({ products, categories }) => {
  return (
    <Layout>
      <div className="flex flex-col">
        <h2 className="text-pink text-3xl md:text-4xl font-didact self-center mb-8">
          Products
        </h2>
        {categories.map((category, index) => {
          const { name, description } = category.fields;

          return (
            <ProductCategory
              key={index}
              categoryName={name}
              products={products}
              description={description}
            />
          );
        })}
      </div>

      <BookingButton />
    </Layout>
  );
};

export default Products;
