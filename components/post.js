import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Post = ({ title, date, body }) => {
  return (
    <div
      className="
    font-didact 
    flex 
    flex-col 
    divide-y-2 
    divide-pink
    mb-12
    md:flex-row 
    md:w-3/4 
    md:max-h-40
    md:mx-auto
    md:divide-y-0
    md:divide-x-2
    "
    >
      <div className="flex flex-col p-2">
        <h2 className="text-pink text-2xl">{title}</h2>
        <p className="text-gray-500">{date}</p>
      </div>
      <div className="md:w-3/4 p-2">{documentToReactComponents(body)}</div>
    </div>
  );
};

export default Post;
