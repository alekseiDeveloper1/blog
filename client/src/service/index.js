import axios from "axios";

class ServicePosts {
    $host = axios.create({
        baseURL: 'http://localhost:5000/api'
    })

    async getPosts() {
        const {data} = await this.$host.get('/post')
        return data
    }
    async createPost(post) {
        const { data } = await this.$host.post('/post', post)
        return data
    }
    async removePost(id) {
        const { data } = await this.$host.delete(`/post/${id}`)
        return data
    }
}

export default new ServicePosts()
