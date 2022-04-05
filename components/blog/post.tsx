import { PortableText } from '@portabletext/react';
import { PostGroq } from '../../lib/sanity-queries';
import Author from './author';
import InlineImage from './inlineImage';

interface Props {
  post: PostGroq;
}

function Post({ post }: Props) {
  const components = {
    types: {
      image: InlineImage,
    },
  };

  return (
    <div className="w-full max-w-[730px] mt-[60px] px-3 sm:px-[30px] mx-auto mb-16">
      <div className="pt-8 sm:pt-16">
        <div className="text-5xl font-extrabold">{post.title}</div>
        <Author post={post} />
      </div>
      <div className="portable-text">
        {post.body && (
          <PortableText value={post.body} components={components} />
        )}
      </div>
    </div>
  );
}

export default Post;