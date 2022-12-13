export default class ApiUtil {
    constructor() {}

    makeDisneyCall({path, method, body}) {
        return fetch(`https://api.disneyapi.dev${path}`, {
        }).then(data => data.json());
    }

}