'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// import testFunc from './modules/test';

var info = {
    github: 'https://github.com/adamrasheed',
    twitter: 'https://twitter.com/ARasheedPhoto',
    name: 'Adam Rasheed'
};

var body = document.body;

var perfectFor = function perfectFor() {
    var Types = [{
        title: 'Designers',
        icon: 'fal fa-paintbrush',
        desc: 'You can learn Kirby with basic HTML and CSS skills. Any PHP you need, you can pick up along the way. Kirby allows you to stay focused on your design.'
    }, {
        title: 'Developers',
        icon: 'fal fa-code',
        desc: 'Kirby is a flat-file developer-friendly CMS. It let’s you make it as complex or as simple as you want it to be. Oh, and since it’s flat-file. There are no database for hackers to get into.'
    }, {
        title: 'Clients',
        icon: 'fal fa-users',
        desc: 'Deliver your next project with a Client-Proof admin panel where your client can make changes, add blog articles, and much more in a simple, hassle-free way.'
    }, {
        title: 'Teams',
        icon: 'fab fa-pied-piper',
        desc: 'With your entire project in a folder, you can easily use Git to create a team-friendly workflow so you can make the world a better place.'
    }];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var type = _step.value;

            var perfectType = document.createElement('div');
            perfectType.classList.add('type');
            perfectType.innerHTML = '\n                <i class="type__icon ' + type.icon + '"></i>\n                <h3 class="type__title">' + type.title + '</h3>\n                <p class="type__desc">' + type.desc + '</p>\n            ';
            var _perfectFor = document.querySelector('#perfectFor');
            _perfectFor.appendChild(perfectType);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

var footerNotes = function footerNotes() {
    var footer = document.getElementById('footer');
    footer.innerHTML = '\n        <p class="center">\n            Site by <a href="' + info.twitter + '" target="_blank" rel="noopener">' + info.name + '</a>.\n            View <a href="' + info.github + '" target="_blank" rel="noopener">Source Code</a>\n        </p>\n    ';
};

var preview = function preview() {
    var videos = document.getElementById('videos');

    var vidData = [{
        title: 'Kirby vs. Wordpress',
        videoUrl: true,
        url: '4t2e_0plkaM',
        desc: 'This video will how you the main differences between kirby CMS and Wordpress, and which one to use for your project.'
    }, {
        title: 'Kirby Setup & Installation',
        // videoUrl: 
        url: '',
        desc: 'In this video, you will learn how to setup a working installation on your local machine.'
    }, {
        title: 'Cleaning Out Starterkit ',
        // videoUrl: true,
        url: '',
        desc: 'In this video, you will learn how to properly delete the content that comes with Kirby Starterkit and create your own'
    }, {
        title: 'Creating Dynamic Content with Fields',
        // videoUrl: true,
        url: '',
        desc: 'In this video, you will learn how to make your static html code into dynamic php with Kirby\'s custom fields.'
    }, {
        title: 'More Dynamic Content with Pages',
        // videoUrl: true,
        url: '',
        desc: 'In this video, you will learn how to create pages with custom fields'
    }];

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = vidData.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ref = _step2.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var index = _ref2[0];
            var video = _ref2[1];

            var videoContainer = document.createElement('div');
            videoContainer.classList.add('video-container');
            videoContainer.innerHTML = '\n            <span class="video__number">&#35;' + (index + 1) + '</span>\n            ' + (video.videoUrl == true ? '<iframe\n            width="560" height="315" src="https://www.youtube.com/embed/' + video.url + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>' : '<img\n            src="https://picsum.photos/600/400"\n            alt="' + video.title + '"\n            class="video__img" />') + '\n\n            <h3 class="video__title">' + video.title + '</h3>\n            <p class="video__desc">' + video.desc + '</p>\n        ';
            videos.appendChild(videoContainer);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
};

// Youtube Fun
// buildApiRequest('GET',
//                 '/youtube/v3/channels',
//                 {'id': 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
//                 'part': 'snippet,contentDetails,statistics'});


document.addEventListener("DOMContentLoaded", function () {
    perfectFor();
    footerNotes();
    preview();
});