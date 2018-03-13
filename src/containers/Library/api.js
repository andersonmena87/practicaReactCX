// Constans
import  { API } from '../../constans/api';

// Utils
import { apiFetch } from '../../lib/utils/api';

class libraryApi {
  static getAllBooks() {
    return apiFetch(API.LIBRARY.BOOKS);
  }

  static getSingleBook(query) {
    return apiFetch(API.LIBRARY.BOOK, {}, query);
  }
}

export default libraryApi;