import { posts } from "./posts.js";

posts.forEach(post => {
    console.log(post)
})
console.clear()

const filterPosts = posts.filter(post => {
    return post.userId === 1;
})

console.log(filterPosts)

const mappedPosts = filterPosts.map(post=>{
    return post.id*10;
})

console.log(mappedPosts)

const reducedPostsValue = mappedPosts.reduce((sum,post)=>{
    return sum + post
})
console.log(reducedPostsValue)