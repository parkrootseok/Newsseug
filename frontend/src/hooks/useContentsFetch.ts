import { useInfiniteQuery } from 'react-query';
import { ContentsFetchType, PageType } from 'types/api/article';

function useContentsFetch<T extends PageType>({
  queryKey,
  fetchData,
  category,
  pressId,
  sectionType,
  initialPage = 1,
}: ContentsFetchType<T>) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery(
      queryKey,
      ({ pageParam = initialPage }) => {
        if (category && pressId) {
          return fetchData({ page: pageParam, category, pressId });
        } else if (category) {
          return fetchData({ page: pageParam, category });
        } else {
          return fetchData({ page: pageParam });
        }
      },
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.sliceDetails?.hasNext) {
            return lastPage.sliceDetails.currentPage + 1;
          }
          return undefined;
        },
      },
    );

  const pages = data?.pages || [];
  // 마지막 페이지의 sliceDetails를 가져옴 (undefined 체크)
  const sliceDetails =
    pages.length > 0 ? pages[pages.length - 1].sliceDetails : {};

  // 모든 페이지의 content를 합침
  const articleList = pages.flatMap((page) => page.content) || [];

  return {
    sectionType,
    queryKey,
    articleList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    sliceDetails,
  };
}
export default useContentsFetch;
