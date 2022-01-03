import Head from 'next/head';
import Layout from '../components/Layout';
import Post from '../components/Post';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'post',
    order: '-fields.date',
  });

  return {
    props: {
      posts: data.items,
    },
    revalidate: 1,
  };
}

export default function News({ posts }) {
  return (
    <Layout>
      {posts.map((post) => {
        const { title, date, body } = post.fields;
        return <Post title={title} date={date} body={body} />;
      })}
    </Layout>
  );
}
