import vars from './vars';

export default () => {
    let footer = document.getElementById('footer');
    footer.innerHTML = `
        <p class="center">
            <span class="footer__span">
            Site by <a class="highlight" href="${vars.info.twitter}" target="_blank" rel="noopener">${vars.info.name}</a>.
            </span>
            <span class="footer__span">
            View <a class="highlight" href="${vars.info.github}" target="_blank" rel="noopener">Source Code</a>
            </span>
        </p>
    `;

}