import axios from "axios";

export default {
  
  //Deletes the book with the given id
  logBills: function(bill) {
    return axios.post("/api/bills", bill)
    .then(function(response){
    })
  },
  pullBills: function(bills) {
    return axios.get("/api/bills")
    .then(function(response){
      return response;
    })
  },
  checkBill: function(id) {
    console.log(id);
    return axios.get("/api/bills/" + id)
    .then(function(response){
      return response;
    })
  },
  deleteBill: function(id) {
    return axios.delete("/api/bills/" + id);
  },
  // Saves a book to the database
  // saveBills: function(billData) {
  //   return axios.post("/api/bills", billData)
  //   .then(function(billData){
  //   })
  // },
  getBills: function() {
    return (axios.get("https://api.propublica.org/congress/v1/115/house/bills/active.json", {headers: {"X-API-Key": "7BoKxES5grHLDPrdYNsMrvhgNQuN5aZL0Jdr0ZDU"}})
    .then(function(bills) {
<<<<<<< HEAD
      console.log(bills)
=======
>>>>>>> d9fe48a7c45aac8769cce5704fbaf5b6f030b5c4
      return bills
    }))
  },
  searchBills: function(keyword) {
    return (axios.get("https://api.propublica.org/congress/v1/bills/search.json?query="+ keyword, { headers: { "X-API-Key": "7BoKxES5grHLDPrdYNsMrvhgNQuN5aZL0Jdr0ZDU" }})
      .then(function (bills) {
        return bills
      }))
  }
}
