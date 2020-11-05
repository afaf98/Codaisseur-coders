export function selectLoadingPostPage(reduxState) {
  //console.log("ReduxState post pag", reduxState.postPage.post);
  return reduxState.postPage.loading;
}

export function selectPostAndComments(reduxState) {
  return {
    post: reduxState.postPage.post,
    comments: reduxState.postPage.comments,
  };
}
