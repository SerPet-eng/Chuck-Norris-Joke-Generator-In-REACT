export async function fetchData(dataURL, maxRequestPerHour) {
    try {
        const responses = await Promise.all(Array.from({
            length: maxRequestPerHour},
            () => fetch(dataURL)
            ))
            const jsonData = await Promise.all(responses.map(response => response.json()))
            return jsonData.map(data => data.value)
    } catch(error) {
        console.log(error)
        return[]
    }

}