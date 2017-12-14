const loveKirby = () => {
    let loveKirbyContainer = document.getElementById('love-kirby');

    let Content = {
        'Header': {
            title: 'Why You\’ll Love Kirby',
            tagline: 'Wordpress is Too Bloated for Small Websites'
        },

        'Reasons':[
            {
                title: 'Drag n\’ Drop Your Entire Project',
                desc: 'Don’t mess with Databases, huge php files, etc. Kirby is a flat-file CMS that lets you keep your entire project in a folder.'
            },
            {
                title: 'As Robust as You Want',
                desc: 'Kirby lets you easily create website with a complete back–end complete with custom fields baked right in. Make your CMS as feature-rich as you want. Learn it the easy way with a Free 5-Part Crash Course.'
            }
        ]
        
    };

    loveKirbyContainer.innerHTML =
        `
        <h3 class="col--full section__title center love-kirby__headline">${Content.Header.title}</h3>
        <h2 class="col col--1 love-kirby__tagline">${Content.Header.tagline}</h2>
        <div id="kirbyReasons" class="col love-kirby__items"></div>
        `;
    let reasonsContainer = document.getElementById('kirbyReasons');

    for ( let Reason of Content.Reasons){
        let reasonDiv = document.createElement('div');
        reasonDiv.innerHTML =
        `
        <div class="love-kirby__item">
            <h3 class="love-kirby__title">${Reason.title}</h3>
            <p class="love-kirby__desc">${Reason.desc}</p>
        </div>
        `;
        reasonsContainer.appendChild(reasonDiv);
    }
}

export default loveKirby;


