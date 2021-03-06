import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api/';

export default {
  userPostUrl: () => 'users',
  userLoginUrl: () => 'users/login',
  getProfileUrl: () => 'user',
  getArticleUrl: (slug) => `articles/${slug}`,
  getArticlesListUrl: (limit = 10, offset = 0) => `articles?limit=${limit}&offset=${offset}`,
  setFavoriteArticleURL: (slug) => `articles/${slug}/favorite`,
  articlePostUrl: () => 'articles',
  articleEditUrl: (slug) => `articles/${slug}`,
  articleDeleteUrl: (slug) => `articles/${slug}`,
};
