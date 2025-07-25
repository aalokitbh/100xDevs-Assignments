/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const TotalCategory = {}
  transactions.forEach(transaction => {
    let category = transaction.category;
    let totalspent = transaction.price;
    if (TotalCategory[category]) {
      TotalCategory[category] += totalspent;
    } else {
      TotalCategory[category] = totalspent;
    }
  })
  const result= [];
  for (let cat in TotalCategory) {
    result.push({
      category: cat,
      totalSpent: TotalCategory[cat]
    });
  }
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
