export function selectFeedLoading(reduxState) {
  console.log("ReduxState", reduxState);
  return reduxState.feed.loading;
}

export function selectFeedPosts(reduxState) {
  return reduxState.feed.posts;
}
