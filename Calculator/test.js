// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection
    this.itemsPerPage = itemsPerPage
    this.bookInfo = function() {
      let book = []
      let page = []
      for (let i = 0; i < this.collection.length; i++) {
        if (page.length < this.itemsPerPage) {
          page.push(this.collection[i])
        } else {
          book.push(page)
          page = []
          page.push(this.collection[i])
        }
      }
      book.push(page)
      return book
    }
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
    return this.collection.length
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
     return this.bookInfo.length
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
      if (!this.bookInfo[n]) return -1
      return this.bookInfo[n].length
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
      for (let i  = 0; i < this.bookInfo.length; i++) {
      if (this.bookInfo[i].includes(this.collection[n])) return i
      }
      return -1
  }
  
  
  PaginationHelper(['a','b','c','d','e','f'], 4)
  
  console.log(PaginationHelper.collection)