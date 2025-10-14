// Sample videos for the gallery
const videos = [
    {
        title: "How to Grow Tomatoes",
        url: "https://www.youtube.com/watch?v=abcd1234",
        thumbnail: "https://img.youtube.com/vi/abcd1234/0.jpg"
    },
    {
        title: "Easy Pasta Recipe",
        url: "https://www.youtube.com/watch?v=wxyz5678",
        thumbnail: "https://img.youtube.com/vi/wxyz5678/0.jpg"
    }
];

const gallery = document.getElementById("video-gallery");

videos.forEach(video => {
    const div = document.createElement("div");
    div.className = "video-item";
    div.innerHTML = `
        <a href="${video.url}" target="_blank">
            <img src="${video.thumbnail}" alt="${video.title}">
            <p>${video.title}</p>
        </a>
    `;
    gallery.appendChild(div);
});
