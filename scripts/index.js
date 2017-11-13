document.addEventListener("DOMContentLoaded", function(event) { 
    new DatArchive(document.location).readFile("staff.json").then((data) => {
        try {
            var staff = JSON.parse(data)
            staff.staff.forEach((writer) => {
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
        var div = el("div")
        console.log(post)
        div.innerHTML = `
            <div class="entry>
                <div class="author">${post.author}</div>
                <div class="title">${post.title}</div>
                <div class="link">${post.link}</div>
                <div class="desc">${post.long}</div>
            </div>`
        parent.appendChild(div)
        // var container = el("div", "", "entry")
        // var desc = el("div", "", "desc")
        // desc.innerHTML = post.long
        // var link = el("div", "", "link")
        // link.innerHTML = post.link
        // container.appendChild(link)
        // container.appendChild(desc)
        // console.log(container)
    })
}

async function getPosts(writer) {
    var data = await new DatArchive(writer.dat).readFile("writer.json")
    try {
        data = JSON.parse(data) 
        return data.posts.map((post) => { post.author = writer.name; return post })
    } catch (err) {
        console.error("Error when fetching posts for", writer.name, err)
    }
}

