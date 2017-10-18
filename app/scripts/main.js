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
            desc: 'Kirby is a flat-file developer-friendly CMS. It let’s you make it as complex or as simple as you want it to be. Oh, and since it’s flat-file. There are no database for hackers to get into.'
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
        perfectType.classList.add('col', 'type');
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

const footerNotes = () => {
    let footer = document.getElementById('footer');
    footer.innerHTML = `
        <p class="center">
            <span class="footer__span">
            Site by <a class="highlight" href="${info.twitter}" target="_blank" rel="noopener">${info.name}</a>.
            </span>
            <span class="footer__span">
            View <a class="highlight" href="${info.github}" target="_blank" rel="noopener">Source Code</a>
            </span>
        </p>
    `;

}

const preview = () => {
    const videos = document.getElementById('videos');

    const vidData = [
        {
            title: 'Kirby vs. Wordpress',
            videoUrl: true,
            url: '4t2e_0plkaM',
            desc: 'This video will how you the main differences between kirby CMS and Wordpress, and which one to use for your project.'
        },
        {
            title: 'Kirby Setup & Installation',
            // videoUrl: 
            url: '',
            desc: 'In this video, you will learn how to setup a working installation on your local machine.'
        },
        {
            title: 'Cleaning Out Starterkit ',
            // videoUrl: true,
            url: '',
            desc: 'In this video, you will learn how to properly delete the content that comes with Kirby Starterkit and create your own'
        },
        {
            title: `Creating Dynamic Content with Fields`,
            // videoUrl: true,
            url: '',
            desc: `In this video, you will learn how to make your static html code into dynamic php with Kirby's custom fields.`
        },
        {
            title: 'More Dynamic Content with Pages',
            // videoUrl: true,
            url: '',
            desc: 'In this video, you will learn how to create pages with custom fields'
        }
    ];

    for (let [index, video] of vidData.entries()){
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video','course-preview__video','video-container');
        videoContainer.innerHTML =
        `
            <span class="video__number">&#35;${index+1}</span>
            ${video.videoUrl == true ? `<iframe
            width="560" height="315"
            src="https://www.youtube.com/embed/${video.url}?rel=0&amp;showinfo=0"
            frameborder="0"
            class="video__video"
            allowfullscreen></iframe>`  :
            `<img
            src="https://picsum.photos/600/400"
            alt="${video.title}"
            class="course-preview__img video__img" />`}

            <h3 class="video__title">${video.title}</h3>
            <p class="video__desc">${video.desc}</p>
        `;
        videos.appendChild(videoContainer);
    }
}


const floatingLabels = () => {
    const formGroup = document.body.getElementsByClassName('form__group');

    for (let group of formGroup){
        let input = group.querySelector('.form__input');

        if (input.value.length != 0) {
            console.log('fillin up');
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    perfectFor();
    footerNotes();
    preview();
    floatingLabels();
});

console.log('yo yo yo');