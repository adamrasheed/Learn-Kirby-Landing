



const perfectFor = () => {
    let Types = [
        {
            title: 'Designers',
            icon: 'fas fa-paint-brush',
            desc: 'You can learn Kirby with basic HTML and CSS skills. Any PHP you need, you can pick up along the way. Kirby allows you to stay focused on your design.'
        },
        {
            title: 'Developers',
            icon: 'fas fa-code',
            desc: 'Kirby is a flat-file developer-friendly CMS. It let’s you make it as complex or as simple as you want it to be. Oh, and since it’s flat-file. There are no database for hackers to get into.'
        },
        {
            title: 'Clients',
            icon: 'fas fa-users',
            desc: 'Deliver your next project with a Client-Proof admin panel where your client can make changes, add blog articles, and much more in a simple, hassle-free way.'
        },
        {
            title: 'Teams',
            icon: 'fab fa-pied-piper-alt',
            desc: 'With your entire project in a folder, you can easily use Git to create a team-friendly workflow so you can make the world a better place.'
        },
    ];



    for (let type of Types){
        let perfectType = document.createElement('div');
        perfectType.classList.add('col', 'type');
        perfectType.innerHTML = 
        
            `
                <i class="fas ${type.icon} type__icon"></i>
                <h3 class="type__title">${type.title}</h3>
                <p class="type__desc">${type.desc}</p>
            `;
        let perfectFor = document.querySelector('#perfectFor');
        perfectFor.appendChild(perfectType);
    }

    let section = document.querySelector('#perfectFor');
    const hr = document.createElement('hr');
    hr.classList.add('hr', 'hr--small', 'hr--center');
    section.appendChild(hr);
    console.log(section);
}

export default perfectFor;
