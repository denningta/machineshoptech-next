import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { PostGroq } from '../../lib/sanity-queries';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import Sections from '../sections/sections';
import Author from './author';
import InlineImage from './inlineImage';

interface Props {
  post: PostGroq;
}

function Post({ post }: Props) {
  console.log(post);
  const components = {
    types: {
      image: InlineImage,
    },
  };

  let thisPostIndex: number | undefined = undefined;
  let nextPost: any | undefined = undefined;
  let prevPost: any | undefined = undefined;
  let firstPost: any | undefined = undefined;

  if (post.series) {
    thisPostIndex = post.series.posts.findIndex(
      (seriesPost) => seriesPost.slug.current === post.slug?.current
    );
    firstPost =
      thisPostIndex && thisPostIndex > 1 ? post.series.posts[0] : undefined;
    prevPost = post.series.posts[thisPostIndex - 1];
    nextPost = post.series.posts[thisPostIndex + 1];
  }
  return (
    <div className="w-full max-w-primary-col mx-auto">
      <div className="w-full max-w-[800px] mt-[60px] px-3 sm:px-[30px] mx-auto mb-10">
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
      {post.series && post.series.posts.length > 1 && (
        <div className="mb-10 mx-5">
          <div className="flex flex-col items-center mb-4">
            <div>Did you find this post helpful?</div>
            <div>Continue reading:</div>
          </div>
          <div className="grid grid-cols-2 gap-x-10 ">
            <div className="place-self-end text-primary-300 underline underline-offset-4">
              {prevPost && (
                <Link href={prevPost.slug.current}>
                  <div className="flex items-center cursor-pointer">
                    <BsFillArrowLeftSquareFill className="text-white mr-4 w-[40px]" />
                    {prevPost.title}
                  </div>
                </Link>
              )}
            </div>
            <div className="place-self-start text-primary-300 underline underline-offset-4">
              {nextPost && (
                <Link href={nextPost.slug.current}>
                  <div className="flex items-center cursor-pointer">
                    {nextPost.title}
                    <BsFillArrowRightSquareFill className="text-white mr-4 w-[40px]" />
                  </div>
                </Link>
              )}
            </div>
          </div>
          {firstPost && (
            <div className="flex flex-col items-center w-full">
              <div className="mt-6">
                Or return to the first post in this series:
              </div>
              <div>
                <Link href={firstPost.slug.current}>{firstPost.title}</Link>
              </div>
            </div>
          )}
        </div>
      )}
      {post.footerSections && (
        <div className="mb-10">
          <Sections sections={post.footerSections} postList={[]} />
        </div>
      )}
    </div>
  );
}

export default Post;
