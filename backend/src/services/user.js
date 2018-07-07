import admin from '_firebase/admin'

export const listAllUsers = async nextPageToken => {
  try {
    const result = await admin.auth().listUsers(25, nextPageToken)
    return result.users
  } catch (err) {
    throw err
  }
}

export const addUser = async userInfo => {
  try {
    const data = {
      email: userInfo.email,
      password: userInfo.password,
      displayName: userInfo.fullName
    }
    const user = await admin.auth().createUser(data)
    return user
  } catch (err) {
    throw err
  }
}
