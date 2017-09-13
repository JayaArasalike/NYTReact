import axios from "axios";

var authKey = "702b9290bd6d47d1aa854012fad33b38";
var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json";

const API = {

  // Retrieves all quotes from the db
  getArticles: function(searchTerm, startDate, endDate) {
    console.log(startDate, endDate);
    return axios.get(queryURLBase, { params: {
      "api-key": authKey,
      "q": searchTerm,
      "startDate": startDate + '0101',
      "endDate": endDate + '1231'
    }});
  },

  // Retrieves all saved articles from the db
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves a new quote to the db
  saveArticle: function(article) {
    return axios.post("/api/articles", { article });
  },
  // Deletes a quote from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  }
  // Toggles a quote's favorite property in the db
  // favoriteArticle: function(quote) {
  //   quote.favorited = !quote.favorited;
  //   const { _id, favorited } = quote;
  //   return axios.patch(`/api/quotes/${_id}`, { favorited });
  // }
};

export default API;
