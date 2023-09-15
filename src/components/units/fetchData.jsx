export async function fetchData(dataURL, maxRequest) {
    try {
        const responses = await Promise.all(Array.from({
            length: maxRequest},
            () => fetch(dataURL)
            ))
            const jsonData = await Promise.all(responses.map(response => response.json()))
            return jsonData.map(data => data.value)
    } catch(error) {
        console.log(error)
        return[]
    }

}