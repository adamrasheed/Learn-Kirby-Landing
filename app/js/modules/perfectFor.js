
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'


// console.log(fontawesome.icon(light.faUsers));


const perfectFor = () => {
    let Types = [
        {
            title: 'Designers',
            icon: fontawesome.icon(solid.faPaintBrush),
            desc: 'You can learn Kirby with basic HTML and CSS skills. Any PHP you need, you can pick up along the way. Kirby allows you to stay focused on your design.'
        },
        {
            title: 'Developers',
            icon: fontawesome.icon(solid.faCode),
            desc: 'Kirby is a flat-file developer-friendly CMS. It let’s you make it as complex or as simple as you want it to be. Oh, and since it’s flat-file. There are no database for hackers to get into.'
        },
        {
            title: 'Clients',
            icon: fontawesome.icon(solid.faUsers),
            desc: 'Deliver your next project with a Client-Proof admin panel where your client can make changes, add blog articles, and much more in a simple, hassle-free way.'
        },
        {
            title: 'Teams',
            icon: fontawesome.icon(brands.faPiedPiperAlt),
            desc: 'With your entire project in a folder, you can easily use Git to create a team-friendly workflow so you can make the world a better place.'
        },
    ];

    for (let type of Types){
        let perfectType = document.createElement('div');
        perfectType.classList.add('col', 'type');
        perfectType.innerHTML = 
        
            `   <i class="type__icon ${type.icon.prefix} fa-${type.icon.iconName}"></i>
                <h3 class="type__title">${type.title}</h3>
                <p class="type__desc">${type.desc}</p>
            `;
        let perfectFor = document.querySelector('#perfectFor');
        perfectFor.appendChild(perfectType);
    }
}

export default perfectFor;
