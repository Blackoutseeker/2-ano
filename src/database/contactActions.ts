import Contact from '@models/contact'
import firebase from '@utils/firebase'

/**
 * Add new contact into database
 * @param {Contact} contact - contact to add
 * @param {Promise<void> | void} successCallback - a callback to be executed after the addition is succeeds
 * @param {Promise<void> | void} failCallback - a callback to be executed after the addition has failed
 * @returns {Promise<void>}
 */

const addNewContactIntoDatabase = async (
  contact: Contact,
  successCallback?: () => Promise<void> | void,
  failCallback?: () => Promise<void> | void
): Promise<void> => {
  await firebase
    .database()
    .ref('question-1/contacts')
    .push({ ...contact })
    .then(async () => {
      await successCallback?.()
    })
    .catch(async () => {
      await failCallback?.()
    })
}

export default addNewContactIntoDatabase
