
//this file contains function and class used for networkings between the mobile app & the server + save the token

//used to get the course of the user, the param is used to determine whiche grouo you have to fetch data
export function GetClassroomWithId(GroupId) 
{

    const urlTest = 'http://ptutgestionabsences.herokuapp.com/api/classroom_groups/'+GroupId
  
    return fetch(urlTest)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
}

export function Post(params) {
    
}

//class with static method for authentification
export class ApiAuth{

    static Token=""

    static User;

    //post the token to the api, and the api return the user associated to the token
    static GetUserInfo(){
        const url = "http://ptutgestionabsences.herokuapp.com/api/testapi"

        fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data:"hkggkhg"              
            })
          }).then((response) => console.log("bjr"));
          console.log(this.Token+ " TOKEN !!!")

    }

    //Store the token
    static StoreToken(Token) 
    {
        this.Token=Token
    }
}
