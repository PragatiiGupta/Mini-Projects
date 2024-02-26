const API = "https://api.github.com/users/"
const inputUser = document.querySelector("#input_box");
const avatar = document.getElementById("prof_img");
const name = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const repo = document.getElementById("repo");
const followers = document.getElementById("followers");
const followings = document.getElementById("following");

const fetchUser = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.message === "Not found") {
                alert("User not found, Please check again.");
            } else {
                console.log(data);
                avatar.src = data.avatar_url;
                username.textContent = `@${data.login}`;
                username.href = data.html_url;
                name.textContent = data.name;
                bio.textContent = data.company;
                repo.textContent = data.public_repos;
                followers.textContent = data.followers;
                followings.textContent = data.following;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

const getUser = () => {
    const userId = inputUser.value.trim();
    if (userId.length === 0)
        alert("Please enter a valid URL");
    else
        fetchUser(API+userId)

    inputUser.value = "";
}
