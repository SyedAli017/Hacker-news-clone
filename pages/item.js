import Story from '../components/Story.js'
import Comment from '../components/Comment.js'
import view from '../utils/view.js'


export default async function Item() {
    let story = null
    let hasComments = false
    let hasError = false


    try {
        story = await getStory()
        hasComments = story.comments.length > 0
    } catch(error) {
        hasError = true
    }   
    
    if (hasError) {
        view.innerHTML = `<div class="error">Error fetching the stories </div>`
    }
    view.innerHTML = `
    <div>
    ${Story(story)}
    </div>
    ${hasComments ? story.comments.map(comment => Comment(comment)).join('') : "No comments"}
    
    
    `

}

async function getStory() {
    const storyId = window.location.hash.split("?id=")[1]

    const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
    const story = await response.json()
    return story
}