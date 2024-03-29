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
    p-4
    bg-white
    bg-opacity-60
    rounded-lg
    md:flex-row 
    md: justify-between
    md:w-5/6
    md:mx-auto
    md:divide-y-0
    md:divide-x-2
    lg:w-3/4
    "
    >
      <div className="flex flex-col pr-2 pb-2 w-1/3">
        <h2 className="text-pink text-2xl">{title}</h2>
        <p className="text-gray-500">{date}</p>
      </div>
      <div className="md:w-2/3 px-2">
        {' '}
        {/* need to create more space between body and the divide line */}
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
