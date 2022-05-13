import { imageBuilder } from '../../lib/sanity-client';
import Image from 'next/image';
import { PostCardGroq, PostGroq } from '../../lib/sanity-queries';

interface Props {
  post: PostGroq | PostCardGroq;
}

function AuthorComponent({ post }: Props) {
  return (
    <div className="flex items-center mt-6">
      <div className="w-[60px] h-[60px]  mr-4">
        {post.author.image && (
          <Image
            className="rounded-full overflow-clip"
            width={540}
            height={540}
            alt={`Cover Image for ${post.author.name}`}
            src={imageBuilder(post.author.image).width(540).height(540).url()}
          />
        )}
      </div>
      <div className="flex flex-col h-full justify-center">
        <div className="flex items-center grow">{post.author.name}</div>
        <div className="flex items-center grow opacity-60">
          <span className="mr-2">
            {post.publishedAt &&
              new Intl.DateTimeFormat('en-US', {
                month: 'short',
                year: 'numeric',
                day: 'numeric',
              }).format(new Date(post.publishedAt))}
          </span>
          <span className="mr-2">-</span>
          <span>{post.estimatedReadingTime} min read</span>
        </div>
      </div>
    </div>
  );
}

export default AuthorComponent;
