import Layout from '../components/Layout';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'aboutMe',
  });

  return {
    props: {
      about: data.items,
    },
  };
}

export default function About({ about }) {
  const headline = about[0].fields.headline;
  const body = about[0].fields.body;
  return (
    <Layout>
      <div className="container ">
        <div className="p-4 bg-white rounded-lg">
          <h2 className="text-2xl font-mallanna mb-8">{headline}</h2>

          <p className="font-didact">{body}</p>
        </div>
      </div>
    </Layout>
  );
}
