document.addEventListener("DOMContentLoaded", function(event) { 
    new DatArchive(document.location).readFile("staff.json").then((data) => {
        try {
            var staff = JSON.parse(data)
            staff.staff.forEach((writer) => {
                console.log(writer.name)
                getPosts(writer).then(updateFeed).catch(console.error)
            })
        } catch (err) {
            console.error("Error occurred when reading staff.json", err)
        }
    })
    console.log("i've loaded!")
})

function el(nodeName, nodeId, nodeClass) {
    var node = document.createElement(nodeName)
    if (nodeId) { node.id = nodeId }
    if (nodeClass) { node.className = nodeClass }
    return node
}

function updateFeed(posts) {
    var parent = document.getElementById("posts")
    posts.forEach((post) => {
        var div = el("div", "", "entry")
        console.log(post)
        // <div class="link">${post.link}</div>
        div.innerHTML = `
                <div class="author">${post.author}</div>
                <div class="desc">${post.message}</div>
            `
        parent.appendChild(div)
    })
}

async function getPosts(writer) {
    console.log("getting posts for", writer.name)
    var data = await new DatArchive(writer.dat).readFile("portal.json")
    try {
        data = JSON.parse(data) 
        return data.feed.filter((post) => {
            return post.message.indexOf("rotonde") >= 0
        }).map((post) => { post.author = writer.name; return post })
    } catch (err) {
        console.error("Error when fetching posts for", writer.name, err)
        return []
    }
}

