import Head from 'next/head';
import OrderButton from '../components/OrderButton';
import Layout from '../components/Layout';
import ProductCategory from '../components/ProductCategory';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'product',
    order: 'fields.order',
  });
  let cats = await client.getEntries({
    content_type: 'productCategory',
    order: 'fields.order',
  });

  let info = await client.getEntries({
    content_type: 'pageInfo',
  });

  return {
    props: {
      info: info.items,
      products: data.items,
      categories: cats.items,
    },
    revalidate: 1,
  };
}

const Products = ({ info, products, categories }) => {
  let pageInfo;
  info.map((item) => {
    if (item.fields.pageName === 'Products') {
      pageInfo = item.fields.info;
    }
  });

  return (
    <>
      <Head>
        <title>Bretton Does Nails | Products</title>
      </Head>
      <Layout>
        <div className="flex flex-col">
          <h2 className="text-pink text-3xl md:text-4xl font-didact self-center mb-8">
            Products
          </h2>
          <div
            className="font-didact text-lg p-4 bg-white rounded-lg mb-12 "
            id="productPageInfo"
          >
            {documentToReactComponents(pageInfo)}
          </div>
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

        <OrderButton />
      </Layout>
    </>
  );
};

export default Products;
