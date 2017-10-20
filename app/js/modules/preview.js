

const Preview = () => {
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

export default Preview;