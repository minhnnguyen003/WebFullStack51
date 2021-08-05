const url = 'https://api.github.com/users/';


export default async function getData (username = '') {
    
    const response = await fetch(url + username, {
        method: 'GET',
        cache: 'no-cache',
    });
    
    return response.json();
}
