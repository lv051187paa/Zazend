export const countPages = (postsLength, perPage) => {
  return Math.ceil(postsLength / perPage);
};

export const postsToShow = (posts, page, perPage) => {
    let start = (page - 1) * perPage; 
    return posts.slice(start, (start + perPage))
}
