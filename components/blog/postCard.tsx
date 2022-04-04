import { PortableText } from '@portabletext/react';
import { PostCardGroq } from '../../lib/sanity-queries';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity-client';
import Author from './author';
import Link from 'next/link';

interface Props {
  post: PostCardGroq;
}

function PostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug.current}`}>
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
          <Author post={post}></Author>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
