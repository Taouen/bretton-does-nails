import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'aboutMe',
  });

  let photo = await client.getAsset('6iImqPX9VHpHq4SEvByDP6');

  return {
    props: {
      about: data.items[0],
      src: `https:${photo.fields.file.url}`,
    },
    revalidate: 1,
  };
}

export default function About({ about, src }) {
  return (
    <Layout>
      <div className="container flex flex-col md:flex-row h-full">
        <img
          alt="Photo of Bretton Wiltshire"
          className="rounded-t-lg h-auto w-full md:h-full md:rounded-lg md:w-1/4 md:mr-4"
          src={src}
        />

        <div
          id="content"
          className="p-4 font-didact  bg-white bg-opacity-50 rounded-b-lg md:rounded-lg md:overflow-scroll"
        >
          {documentToReactComponents(about.fields.body)}
        </div>
      </div>
    </Layout>
  );
}
