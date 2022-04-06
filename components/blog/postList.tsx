import { PostListGroq, PostListSectionGroq } from '../../lib/sanity-queries';
import PostCard from './postCard';

interface Props {
  data: PostListSectionGroq;
  postList: PostListGroq;
}

function PostListSection({ data, postList }: Props) {
  console.log(data);
  console.log(postList);
  let postListContent;
  switch (data.listType) {
    default: {
      const latestPosts = postList.slice(0, 5);
      postListContent = latestPosts.map((post) => (
        <PostCard key={post.title} post={post} />
      ));
      break;
    }
    case 'featured': {
      const featuredPosts = postList.filter((post) => post.featured);
      postListContent = featuredPosts.map((post) => (
        <PostCard key={post.title} post={post} />
      ));
      break;
    }
    case 'custom':
      postListContent = <div>Custom Post list works</div>;
      break;
  }

  return (
    <div className="flex flex-col items-center w-full py-16 px-global-sm">
      <div className="max-w-primary-col w-full">
        <div className="flex tracking-widest">
          <div className="grow text-xl">{data.headline?.toUpperCase()}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 md:gap-8 mt-6">
          {postListContent}
        </div>
      </div>
    </div>
  );
}

export default PostListSection;
