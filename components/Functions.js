import { API } from '../Providers/Provider'
import axios from 'axios'

/**
 * retrieves all the storeItems. used to retrieve storeItems names for BasketItems and OrderItems tables.
 * @returns {Promise<Array><Object>}
 */
const getAllStoreItems = async () => {
    try {
        res = await axios.get(`${API}/allstoreitems`)
        const allStoreItems = res.data
        return allStoreItems
    } catch (error){
        console.error(error)
        return null
    }
}

/**
 * checks if the inputed user has a basket currently
 * @param {Number} userID - the id of the user to check for basket
 * @returns {Number|null} Returns the basket id if the user has one, or null if there's no basket for the user
 */

const checkIfCurrentUserHasBasket = async (userID) => {
    // make call to api
    // https://leaf-me-0183706079ed.herokuapp.com/users/{UserIDHERE}}/basket/
    try {
        const res = await axios.get(`${API}/users/${userID}/basket`)
        const basketID = res.data[0].id
        return basketID
    } catch (error) {
        console.error(error)
        return null
    }
}

/**
 * populates a new basket in relation to the input user
 * @param {Number} userID - the id of the user who's basket is being created
 * @returns {Number|null} Returns the basket id or null if there's an error

 */
const createNewBasket = async (userID) => {
    // make call to api
    try {
        const res = await axios.post(`${API}/users/${userID}/basket`, {
            client_user_id: userID
        })
        return res.data.id
    } catch (error) {
        console.error(error)
        return null
    }
}

/**
 * retrives all the basketStoreItems from the input basket
 * @param {Number} basketID - the id of the basket to retrive basketStoreItems from
 * @returns {Promise<Array><Object>>} - a promise that resolves to an array of store item objects.
 */
const getAllBasketStoreItemsFromBasketID = async (basketID,userID) => {
    // check that input is provided
    if(!basketID){
        throw new Error('Basket ID is required!')
    }
    let basketIDNumber = Number(basketID)
    // if the input is NaN
    if(isNaN(basketIDNumber)){
        throw new Error('Basket ID must be a number!')

    }
    // try to make the api call
    try {
        const res = await axios.get(`${API}/users/${userID}/basket/${basketIDNumber}/storeitems`)
        return res.data
    } catch (error) {
        console.error('Error fetching basket store items: ', error)
        throw error
    }

}

/**
 * populates a user's basket with a store item
 * @param {Number} basketID - The ID of the basket to populate
 * @param {Number} userID - The ID of the user owning the basket
 * @param {Number} dispensaryID - The ID of the dispensary where the store item is located ( Unused atm )
 * @param {Number} storeItemID - The ID of the store item to add to the basket
 * @param {Number} quantity - the amount of store items that are being added on to the basket
 * @returns {Boolean} True if the store item is successfully added to the basket, otherwise false
 */
const populateBasketWithStoreItem =  async (basketID,userID,dispensaryID,storeItemID,quantity) => {
    try {
        const res = await axios.post(`${API}/users/${userID}/basket/${basketID}/storeItems`, {
            quantity: quantity,
            basket_id: basketID,
            store_item_id: storeItemID
        })
        return true;
    } catch (error) {
        console.error(error);
        return false
    }
}
/**
 * Iterates over the input unsorted basketItems array and returns an array of objects,
 * each containing store items sorted by their unique dispensary ID along with additional
 * order information (total, status, client_user_id, dispensary_id).
 * basket items are also returned in the items key which makes it easier to populate the orderStoreItems table once the order is created
 * This is used to prepare a basket to be sent to the backend, containing store items from multiple dispensaries.
 *
 * @param {Array} basketItems - The unsorted array of basket items, where each item is an object containing at least a dispensary_id and other item details.
 * @param {number} order.total - The total amount for the order.
 * @param {string} order.status - The status of the order.
 * @param {string} order.client_user_id - The client user ID associated with the order.
 * @param {Array} [storeItems] - (Optional) The array of store items for reference. Only provide this if the store items change.
 * @returns {Array} An array of objects, where each object represents a unique dispensary and contains its associated store items and order information.
 *
 * @example
 * const basketItems = [
 *   { id: 1, name: 'Item 1', dispensary_id: 'A' },
 *   { id: 2, name: 'Item 2', dispensary_id: 'B' },
 *   { id: 3, name: 'Item 3', dispensary_id: 'A' }
 * ];
 * const orderInfo = {
 *   total: 100,
 *   status: 'pending',
 *   client_user_id: 'user123'
 * };
 * const sortedBasket = sortBasketItemsByDispensary(basketItems, orderInfo);
 * console.log(sortedBasket);
 * // Output:
 * // [
 * //   {
 * //     dispensary_id: 'A',
 * //     items: [
 * //       { id: 1, name: 'Item 1', dispensary_id: 'A' },
 * //       { id: 3, name: 'Item 3', dispensary_id: 'A' }
 * //     ],
 * //     total: 100,
 * //     status: 'pending',
 * //     client_user_id: 'user123'
 * //   },
 * //   {
 * //     dispensary_id: 'B',
 * //     items: [
 * //       { id: 2, name: 'Item 2', dispensary_id: 'B' }
 * //     ],
 * //     total: 100,
 * //     status: 'pending',
 * //     client_user_id: 'user123'
 * //   }
 * // ]
 */
function sortBasketItemsByDispensary(basketItems,order,
    storeItems=[
       {
           "id": 1,
           "name": "Item 1",
           "type": "flower",
           "image": "item1.jpg",
           "description": "Description for Item 1",
           "price": "9.99",
           "dispensary_id": 1
       },
       {
           "id": 2,
           "name": "Item 2",
           "type": "edible",
           "image": "item2.jpg",
           "description": "Description for Item 2",
           "price": "12.99",
           "dispensary_id": 1
       },
       {
           "id": 3,
           "name": "Item 3",
           "type": "flower",
           "image": "item3.jpg",
           "description": "Description for Item 3",
           "price": "6.99",
           "dispensary_id": 2
       }
   ]){
   const batchOfOrders = []
   let count = 0

   const retrieveDispensaryID = (storeItemID, storeItems) => {
       for(let i = 0; i < storeItems.length; i++){
           let item = storeItems[i]
           if(storeItemID == item.id){
               return item.dispensary_id
           }
       }
   }

   for(let i = 0; i < basketItems.length; i++){
       const basketItem = basketItems[i]
       // get the dispensaryID of the current basketItem by referencing basketItem.store_item_id to storeItems[k].id
       const dispensaryID = retrieveDispensaryID(basketItem.store_item_id, storeItems)
       
       // if theres null from the find method; we create a new orderEl then push to returnArr
       let orderEl = batchOfOrders.find(order => order.dispensary_id === dispensaryID);
       if(!orderEl){
           orderEl = {
               dispensary_id: dispensaryID,
               items: [],
                   total: 0,
                   status: order.status,
                   client_user_id: order.client_user_id
               }
           batchOfOrders.push(orderEl)
       }
       
       // append basket item to orders item key
       orderEl.items.push({
           quantity: basketItem.quantity,
           basket_id: basketItem.basket_id,
           store_item_id: basketItem.store_item_id
       })
       // update total of order
       const storeItem = storeItems.find(item => item.id === basketItem.store_item_id)
       if(storeItem) {
           orderEl.total += parseFloat(storeItem.price) * basketItem.quantity
       }
   }
   return batchOfOrders
}



// send order function
// populate order items function


export { 
    checkIfCurrentUserHasBasket,
    createNewBasket,
    populateBasketWithStoreItem,
    getAllBasketStoreItemsFromBasketID,
    getAllStoreItems,
    sortBasketItemsByDispensary
}