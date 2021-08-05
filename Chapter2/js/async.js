function doAsync(url) { 
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            return resolve(xhr.responseText);
        }
        xhr.onerror = () => {
            return reject(xhr.statusText)
        }
        xhr.send();
    });
}

async function run() {
    let responseData;

    try {
        responseData = await doAsync("https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST");
        console.log(responseData);
    }
    catch {
        console.log(error)
    }
}

run();