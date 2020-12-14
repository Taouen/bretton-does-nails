import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

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
      about: data.items,
      src: `https:${photo.fields.file.url}`,
    },
  };
}

export default function About({ about, src }) {
  const paragraphs = about[0].fields.body.content;

  return (
    <Layout>
      <div className="container flex flex-col md:flex-row md:max-h-96">
        <img
          className="rounded-t-lg h-auto w-full md:rounded-lg  md:w-1/3 md:h-full md:mr-4"
          src={src}
        />

        <div className="p-4 font-didact text-lg bg-white bg-opacity-60 rounded-b-lg md:rounded-lg md:overflow-scroll">
          {paragraphs.map((item, index) => (
            <p className="last:mb-0 mb-4" key={index}>
              {item.content[0].value}
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
