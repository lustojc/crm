import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
          console.log("ФУНКЦИЯ СОРТЕД ПОСТС ОТРАБОТАЛА");
          return [...posts].sort((a, b) =>
            a[sort].localeCompare(b[sort])
          );
        }
        return posts;
      }, [sort, posts]);

      return sortedPosts;

}


export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPost = useMemo(() => {
        return sortedPosts.filter(post => post.name.toLowerCase().includes(query))
      }, [query, sortedPosts]);

      return sortedAndSearchedPost
}

export default usePosts;