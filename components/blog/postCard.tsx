import { PortableText } from '@portabletext/react';
import { PostCardGroq } from '../../lib/sanity-queries';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity-client';

interface Props {
  post: PostCardGroq;
}

function PostCard({ post }: Props) {
  return (
    <div className="bg-neutral-800 rounded-lg overflow-clip cursor-pointer transition ease-in-out hover:scale-[1.01]">
      <div className="flex flex-col p-6 h-full">
        <div className="-mx-6 -mt-6">
          <Image
            width={1240}
            height={540}
            src={imageBuilder(post.mainImage).width(1240).height(540).url()}
          />
        </div>
        <div className="flex pt-4">
          {post.categories.map((category) => (
            <div key={category._id} className="mr-4">
              {category.title}
            </div>
          ))}
        </div>
        <div className="mt-4 text-xl font-extrabold">{post.title}</div>
        <div className="grow mt-4 opacity-60">
          <PortableText value={post.excerpt} />
        </div>
        <div className="flex items-center mt-6">
          <div className="w-[60px] h-[60px] rounded-full overflow-clip mr-4">
            <Image
              width={540}
              height={540}
              alt={`Cover Image for ${post.author?.name}`}
              src={imageBuilder(post.author.image).width(540).height(540).url()}
            />
          </div>
          <div className="flex flex-col h-full justify-center">
            <div className="flex items-center grow">{post.author.name}</div>
            <div className="flex items-center grow opacity-60">
              <span className="mr-2">
                {new Intl.DateTimeFormat('en-US', {
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
      </div>
    </div>
  );
}

export default PostCard;
