import axios from "axios";

export class ServicePosts {
    $host = axios.create({
        baseURL: 'http://localhost:5000/api'
    })

    async getPosts() {
        const {data} = await this.$host.get('/post')
        return data
    }
}
