// @import loggit from './modules/test'

const info = {
    github: 'https://github.com/adamrasheed',
    twitter: 'https://twitter.com/ARasheedPhoto',
    name: 'Adam Rasheed'
}

const body = document.body;

const perfectFor = () => {
    let Types = [
        {
            title: 'Designers',
            icon: 'fal fa-paintbrush',
            desc: 'You can learn Kirby with basic HTML and CSS skills. Any PHP you need, you can pick up along the way. Kirby allows you to stay focused on your design.'
        },
        {
            title: 'Developers',
            icon: 'fal fa-code',
            desc: 'Kirby is a flat-file developer-friendly CMS. It let’s you make it as complex or as simple as you want it to be. Oh, and since it’s flat-file. There’s no database for hackers to get into.'
        },
        {
            title: 'Clients',
            icon: 'fal fa-users',
            desc: 'Deliver your next project with a Client-Proof admin panel where your client can make changes, add blog articles, and much more in a simple, hassle-free way.'
        },
        {
            title: 'Teams',
            icon: 'fab fa-pied-piper',
            desc: 'With your entire project in a folder, you can easily use Git to create a team-friendly workflow so you can make the world a better place.'
        },
    ];

    for (let type of Types){
        let perfectType = document.createElement('div');
        perfectType.classList.add('type');
        perfectType.innerHTML = 
            `
                <i class="type__icon ${type.icon}"></i>
                <h3 class="type__title">${type.title}</h3>
                <p class="type__desc">${type.desc}</p>
            `;
        let perfectFor = document.querySelector('#perfectFor');
        perfectFor.appendChild(perfectType);
    }
}

const coursePreview = () => {

}

const footerNotes = () => {
    let footer = document.getElementById('footer');
    footer.innerHTML = `
        <p class="center">
            Site by <a href="${info.twitter}" target="_blank" rel="noopener">${info.name}</a>.
            View <a href="${info.github}" target="_blank" rel="noopener">Source Code</a>
        </p>
    `;

}

const preview = () => {
    let videos = document.getElementById('videos');

    const vidData = [
        {
            title: 'Kirby vs. Wordpress',
            desc: 'This video will how you the main differences between kirby CMS and Wordpress, and which one to use for your project.'
        },
        {
            title: 'Kirby Setup & Installation',
            desc: 'In this video, you will learn how to setup a working installation on your local machine.'
        },
        {
            title: 'Video 3',
            desc: 'video 3 description'
        },
        {
            title: 'Video 4',
            desc: 'video 4 description'
        },
        {
            title: 'Video 5',
            desc: ' Vide 5 desscription'
        }
    ];

    for (let [index, video] of vidData.entries()){
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');
        videoContainer.innerHTML =
        `
            <span class="video__number">&#35;${index+1}</span>
            <img
                src="https://picsum.photos/600/400"
                alt="${video.title}"
                class="video__img" />
            <h3 class="video__title">${video.title}</h3>
            <p class="video__desc">${video.desc}</p>
        `;
        videos.appendChild(videoContainer);
        console.log(index+1);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    perfectFor();
    footerNotes();
    preview();
});