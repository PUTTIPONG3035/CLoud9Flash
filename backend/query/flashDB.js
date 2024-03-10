import {db, FlashCardTable} from '../dynamo'

// Create or Update users
const createOrUpdateFlashCard = async (data = {}) =>{
    const params = {
        TableName: FlashCardTable,
        Item: data
    }
    try{
        console.log("try")
        await db.put(params).promise()
        return { success: true }
        console.log("try")
    } catch(error){
        console.log("catch")
        return { success: false}
    }
}

// Read all users
const readAllFlashCardSet = async()=>{
    const params = {
        TableName: FlashCardTable
    }

    try{
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }
}

// Read Users by ID
const getFlashCardById = async (value, key = 'FlashCardId') => {
    const params = {
        TableName: FlashCardTable,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        const { Item = {} } =  await db.get(params).promise()
        return { success: true, data: Item }
    } catch (error) {
        return {  success: false, data: null}        
    }
}

// Delete User by ID
const deleteFlashCardById = async(value, key = 'FlashCardId' ) => { 
    const params = {
        TableName: FlashCardTable,
        Key: {
            [key]: parseInt(value)
        }
    }
        
    try {
        await db.delete(params).promise()
        return {  success: true }

    } catch (error) {
        return{ success: false }
    }
}


export {
    createOrUpdateFlashCard,
    readAllFlashCardSet,
    getFlashCardById,
    deleteFlashCardById
}