// localStorage.clear()

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// render DOM

const mainEl = document.getElementById("main-el")
let mainElDOM = ""

for(let i = 0; i < posts.length; i++) {
    mainElDOM += `
        <main>
            <section class="post-info">
                <img class="artist-avatar" alt="Van Goch avatar" src="${posts[i].avatar}">
                <div class="info-container">
                    <h1>${posts[i].name}</h1>
                    <h2>${posts[i].location}</h2>
                </div>
            </section>  
            
            <section class="post-img">
                <img class="artist-img" alt="Van Goch sefie" src="${posts[i].post}"
                >                    
            </section> 
            
            <section class="interaction">
                <div class="icon-container">
                    <img class="icon" src="images/icon-heart.png" alt="heart icon" id="likes-icon-${posts[i].username}">
                    <img class="icon" src="images/icon-comment.png" alt="comment icon">
                    <img class="icon" src="images/icon-dm.png" alt="dm icon">
                </div>
                <h3 class="likes" id="likes-el-${posts[i].username}">${posts[i].likes} likes</h3>
                <h3 class="caption">${posts[i].username} <span class="comment">${posts[i].comment}</span> </h3>
            </section>
        </main>
    `  
    
     
    
}

mainEl.innerHTML = mainElDOM

// likes functionality

for(let i = 0; i < posts.length; i++) {
    
    const likesIcon = document.getElementById(`likes-icon-${posts[i].username}`)
    const likesEl = document.getElementById(`likes-el-${posts[i].username}`)

    let numberOfLikes = posts[i].likes

    const likesFromLocalStorage = JSON.parse(localStorage.getItem(`numberOfLikes${posts[i].username}`))

    if (likesFromLocalStorage) {
        numberOfLikes = likesFromLocalStorage
    }

    function renderLikes() {
        likesEl.innerHTML = `${numberOfLikes} likes`
    }

    renderLikes()

    likesIcon.addEventListener("dblclick", function() {
        incrementLikes()
    })

    function incrementLikes() {
        numberOfLikes++
        localStorage.setItem(`numberOfLikes${posts[i].username}`, JSON.stringify(numberOfLikes))
        
        renderLikes()
    }
}


