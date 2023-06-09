export default function Story(story) {
  return `
      <div class="story">
        <div> 
          <span class="gray-text-text">${story.index || ""}</span>
          <span class="upvote">▲</span>
          <a href="${story.url}">${story.title}</a>
          <span>(${story.domain})</span>
        </div>
        <div>
          <div class="gray-text">
            ${story.points} points by ${story.user} ${story.time_ago}
            |
            <a href="#/item?id=${story.id}">
              ${story.comments_count} comments
            </a>
            |
            <span class="favorite" data-story='${JSON.stringify(story)}'>
              <img class="favorite-logo" src="../Images/favourites-symbol.png">
              ${story.isFavorite ? "Remove From Favorites" : "Add To Favorites"}
            </span>
          </div>
        </div>
      </div>
    `;
}
