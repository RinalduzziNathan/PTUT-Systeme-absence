import { AsyncStorage } from "react-native"

//this file contains function and class used for networkings between the mobile app & the server + save the token

//used to get the course of the user, the param is used to determine whiche grouo you have to fetch data
export function GetClassroomWithId(GroupId) {

  const urlTest = 'http://ptutgestionabsences.herokuapp.com/api/classroom_groups/' + GroupId

  return fetch(urlTest)
    .then((response) => console.log(response))
    .catch((error) => console.error(error))
}

export function Post(params) {

}
export async function PostTokenGetDataUser() {

  const STORAGE_KEY = '@save_token'
  const data = await AsyncStorage.getItem(STORAGE_KEY)
  console.log("Token en approche")

  console.log(data)
  const urlTest = 'http://ptutgestionabsences.herokuapp.com/get-user-from-token'
  return fetch(urlTest, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: data,

    }),

  }).then((response) => response.json())
    .then((response) => console.log({ response }))
    .catch((error) => console.error(error))
}


//class with static method for authentification
export class ApiAuth {

  static Token = ""

  static User;

  //post the token to the api, and the api return the user associated to the token
  static GetUserInfo() {
    const url = "http://ptutgestionabsences.herokuapp.com/api/testapi"

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: "hkggkhg"
      })
    }).then((response) => console.log("bjr"));
    console.log(this.Token + " TOKEN !!!")

  }

  static async ValideClassRoom(param) {
    const url = "http://ptutgestionabsences.herokuapp.com/remove-user-from-absence"

     const STORAGE_KEY = '@save_token'

    const data = await AsyncStorage.getItem(STORAGE_KEY)
    console.log("Token en approche " + data)
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: data,
        classroomid: param


      }),
    }).then((res) => res.json())
      .then((response) => console.log(response))
      .catch((error) => console.error(error))

      
  }

  static async GetClassroom() {

    console.log("Entrer dans GetClassroom")


    const url = "http://ptutgestionabsences.herokuapp.com/get-user-classrooms-from-token"
    const STORAGE_KEY = '@save_token'

    const data = await AsyncStorage.getItem(STORAGE_KEY)
    console.log("Token en approche " + data)
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: data,
      }),
    }).then((res) => res.json())
      .catch((error) => console.error(error))
  }


  //Store the token
  static StoreToken(Token) {
    this.Token = Token
  }
}
