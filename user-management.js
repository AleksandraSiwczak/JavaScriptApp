const users = [];
const STORAGE_KEY = "users";

export const saveUser =(user)=> {
	users.push(user);
	while (users.length > 10){
        users.shift();
    }
	localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
	console.log(users)
}

export const getUsers=()=> {
	return Promise.resolve(users)

}