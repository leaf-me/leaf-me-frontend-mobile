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

export { 
    checkIfCurrentUserHasBasket,
    createNewBasket,
    populateBasketWithStoreItem,
    getAllBasketStoreItemsFromBasketID,
    getAllStoreItems
}