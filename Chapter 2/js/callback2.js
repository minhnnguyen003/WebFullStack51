function doAsync(url, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url)
    console.log(`a`);
    xhr.onload = () => onSuccess(xhr.responseText)
    xhr.onerror = () => onError(xhr.statusText);
    console.log(`a`);
    xhr.send();
    console.log(`done`);
}

doAsync("https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST", valueOnSuccess => {
    console.log(valueOnSuccess);
}, valueOnError => {
    console.log(valueOnError);
});