import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';

/*   TO DO

    - fix image placement on md+ screens
    - render Rich Text properly


*/

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
  };
}

/* function renderRichText(data) {
  return { __html: `${data}` };
} */

export default function About({ about, src }) {
  console.log(about);
  return (
    <Layout>
      <div className="container flex flex-col md:flex-row h-full">
        <img
          alt="Photo of Bretton Wiltshire"
          className="rounded-t-lg h-auto w-full md:h-full md:rounded-lg md:w-1/3 md:mr-4"
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
