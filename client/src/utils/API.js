import axios from "axios";

export default {
  
  //Deletes the book with the given id
  logBills: function(bills) {
    return axios.post("/api/bills", bills)
    .then(function(response){
    })
  },
  deleteBill: function(id) {
    return axios.delete("/api/bills/" + id);
  },
  // Saves a book to the database
  saveBills: function(billData) {
    return axios.post("/api/bills", billData)
    .then(function(billData){
    })
  },
  getBills: function() {
    return (axios.get("https://api.propublica.org/congress/v1/115/senate/bills/active.json", {headers: {"X-API-Key": "7BoKxES5grHLDPrdYNsMrvhgNQuN5aZL0Jdr0ZDU"}})
    .then(function(bills) {
      console.log(bills)
      axios.post("/api/bills", bills)
      return bills
    }))
  }
}
