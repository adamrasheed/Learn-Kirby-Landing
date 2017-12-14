

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
            url: '02-Kirby-installation-setup.png',
            desc: 'In this video, you will learn how to setup a working installation on your local machine.'
        },
        {
            title: 'Cleaning Out Starterkit ',
            // videoUrl: true,
            url: '03-kirby-cms-cleaning-structure-screenshot.png',
            desc: 'In this video, you will learn how to properly delete the content that comes with Kirby Starterkit and create your own'
        },
        {
            title: `Creating Dynamic Content with Fields`,
            // videoUrl: true,
            url: '04-kirby-creating-dynamic-content.png',
            desc: `In this video, you will learn how to make your static html code into dynamic php with Kirby's custom fields.`
        },
        {
            title: 'More Dynamic Content with Pages',
            // videoUrl: true,
            url: '05-creating-more-dynamic-content-screenshot.png',
            desc: 'In this video, you will learn how to create pages with custom fields'
        }
    ];

    for (let [index, video] of vidData.entries()){
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video','course-preview__video','video-container');
        let imgPath = "../../assets/screenshots/";
        let imgRaw = video.url.slice(0, -4);
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
            src="${imgPath + video.url}"
            srcset=
                "${imgPath + video.url} 1x,
                ${imgPath + imgRaw}@2x.png 2x,
                ${imgPath + imgRaw}@3x.png 3x,
                "
            alt="${video.title}"
            class="course-preview__img video__img" />`}

            <h3 class="video__title">${video.title}</h3>
            <p class="video__desc">${video.desc}</p>
        `;
        videos.appendChild(videoContainer);
    }
}

export default Preview;