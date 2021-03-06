import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ShowMoreText from 'react-show-more-text';

const Post = ({ title, date, body }) => {
  return (
    <div
      className="
    font-didact 
    flex 
    flex-col 
    divide-y-2 
    divide-pink
    mb-10
    md:flex-row 
    md:w-5/6
    md:mx-auto
    md:divide-y-0
    md:divide-x-2
    lg:w-3/4
    "
    >
      <div className="flex flex-col p-2">
        <h2 className="text-pink text-2xl">{title}</h2>
        <p className="text-gray-500">{date}</p>
      </div>
      <div className="md:w-3/4 px-4 py-2 newsPostBody">
        <ShowMoreText
          lines={5}
          more="Show More"
          less="Show Less"
          anchorClass="text-gray-500"
        >
          {documentToReactComponents(body)}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default Post;
