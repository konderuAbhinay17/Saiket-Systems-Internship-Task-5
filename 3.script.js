function addBlog(){

    // Get title value

    let title =
        document.getElementById("title").value;

    // Get content value

    let content =
        document.getElementById("content").value;

    // Validation

    if(title === "" || content === ""){

        alert("Please fill all fields");

        return;
    }

    // Get blog container

    let blogPosts =
        document.getElementById("blogPosts");

    // Create blog card

    let blogCard =
        document.createElement("div");

    // Add class

    blogCard.classList.add("blog-card");

    // Current Date & Time

    let currentDate =
        new Date();

    // Add content inside card

    blogCard.innerHTML = `

        <h3>${title}</h3>

        <small>
            ${currentDate.toLocaleString()}
        </small>

        <p>${content}</p>

        <button class="delete-btn">
            Delete
        </button>

    `;

    // Append card

    blogPosts.appendChild(blogCard);

    // Delete functionality

    let deleteBtn =
        blogCard.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function(){

        blogCard.remove();

    });

    // Clear inputs

    document.getElementById("title").value = "";

    document.getElementById("content").value = "";
}