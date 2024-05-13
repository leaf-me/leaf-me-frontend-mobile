import { API } from '../Providers/Provider'
import axios from 'axios'
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
        console.log('\n called API endpoint:',API,'/users/',userID,'basket` \n RESPONSE: \n',res.data[0])
        const basketID = res.data[0].id
        return basketID
    } catch (error) {
        console.error(error)
        return null
    }
    

    // axios.get(`${API}/users/${userID}/basket`)
    // .then((res)=>{
    //     console.log('\n called API endpoint:',API,'/users/',userID,'basket` \n RESPONSE: \n',res.data[0])
    //     const basketID = res.data[0].id
    //     return basketID
    // })
    // .catch((error) => {
    //     console.error(error)
    //     return null
    // })
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
        console.log('\nRESPONSE FROM CREATE NEW BASKET\n',res.data)
        return res.data.id
    } catch (error) {
        console.error(error)
        return null
    }

    // axios.post(`${API}/users/${userID}/basket`)
    // .then((res)=> {
    //     return res.id
    // })
    // .catch((error) => {
    //     console.error(error)
    //     return null
    // })

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
    
    // make call to api
    console.log('\n Popualting the basket with ID:',basketID,'\n called API endpoint:',API,'/users/',userID,'basket/',basketID,'storeitems')
    console.log(`data to be posted:\n Quantity: ${quantity}\n BasketID: ${basketID}\n StoreItemID: ${storeItemID} `)

    try {
        const res = await axios.post(`${API}/users/${userID}/basket/${basketID}/storeItems`, {
            quantity: quantity,
            basket_id: basketID,
            store_item_id: storeItemID
        })
        console.log('Response from populateBasketWithStoreItem:',res.data)
        return true;
    } catch (error) {
        console.error(error);
        return false
    }

    /*
    axios.post(`${API}/users/${userID}/basket/${basketID}/storeItems`, {
        quantity: quantity,
        basket_id: basketID,
        store_item_id: storeItemID
    })
    .then((res) => {
        return true
    })
    .catch((error) => {
        console.error(error)
        return null
    })
    */
}

export { 
    checkIfCurrentUserHasBasket,
    createNewBasket,
    populateBasketWithStoreItem
}