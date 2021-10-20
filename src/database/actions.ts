import Client from '@models/client'
import firebase from '@utils/firebase'

export const addNewClientIntoDatabase = async (
  client: Client,
  successCallback?: () => Promise<void> | void,
  failCallback?: () => Promise<void> | void
) => {
  await firebase
    .database()
    .ref(`clients/${client.name}`)
    .set(client)
    .then(async () => {
      await successCallback?.()
    })
    .catch(async () => {
      await failCallback?.()
    })
}

export const deleteClientFromDatabase = async (
  client: Client,
  successCallback?: () => Promise<void> | void,
  failCallback?: () => Promise<void> | void
) => {
  await firebase
    .database()
    .ref(`clients/${client.name}`)
    .remove()
    .then(async () => {
      await successCallback?.()
    })
    .catch(async () => {
      await failCallback?.()
    })
}
