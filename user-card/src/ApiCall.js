import axios from 'axios'

const gitCard = (user) => {
    return axios
        .get((`https://api.github.com/users/${user}`))
        .then((result) => {
            return result
        })
        .catch((error) =>{
            console.log('Error', error.response )
        });
}

export  default gitCard;