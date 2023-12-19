


class APIFeatures{
    constructor ( query, querySring){
      this.query = query; 
      this.querySring = querySring; 
    }
    filter() { 
      const queryObj = {...this.querySring}; 
      
      const excludeQuery = ['page','sort','limit','fields'];
      excludeQuery.forEach(el =>delete queryObj[el]); 
  
      let queryStr = JSON.stringify(queryObj); 
      
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match=>`$${match}`); 
  
      queryStr = JSON.parse(queryStr); 
  
  
      this.query = this.query.find(queryStr); 
      return this; 
       
    }
    sort() {
      if (this.query.sort){
        
        const sortBy = this.queryString.sort.split(','); 
        this.query = this.query.sort(a=> a.sortBy ); 
      }
      return this; 
  
    }
  
  
    limitFields(){
      if (this.query.fields){
        
        
        const fields = this.queryStrings.fields.split(',').join(' ');
        
        this.query = this.query.select(a=>map(a,fields)); 
        
      }
      return this ; 
      
    }
  
    paginate(){
      const page = this.queryString.page*1 || 1; 
      const limit = this.queryString.limit*1 || 10 ; 
      const skip = (page-1)*limit; 
  
      // 4 page=2 limit=10  1 to 10 on page i and from 11 to 20 on page 2
      this.query = this.query.skip(skip).limit(limit) ; 
    }
  }

  module.exports = APIFeatures; 