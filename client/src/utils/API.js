import axios from "axios";

export default {
  // Gets all books
  getBills: function() {
    return axios.get("/api/bills");
  },
  // Deletes the book with the given id
  deleteBill: function(id) {
    return axios.delete("/api/bills/" + id);
  },
  // Saves a book to the database
  saveBill: function(billData) {
    console.log(billData);
    return axios.post("/api/bill", billData);
  },
  findBills: function() {
    return (axios.get("https://api.propublica.org/congress/v1/115/senate/bills/active.json", {headers: {"X-API-Key": "7BoKxES5grHLDPrdYNsMrvhgNQuN5aZL0Jdr0ZDU"}})
    .then(function(bills) {
      console.log(bills);
      return bills
    }))
  }
}
