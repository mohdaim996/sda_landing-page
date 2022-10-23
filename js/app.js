let currentSectionId = '';

function highlight(sectionId) {
    /**
     * this will create a trigger for if a section is 50% in the viewport and will highlight by changing the color to yellow
     * this will also unhighlight any other link previously highlighted
     * credits: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
     */
    const newlink = `link-${sectionId.toLowerCase()}`
    const navlink = document.getElementById(newlink);

    const observerTarget = document.getElementById(sectionId);
    //observer configurations
    const options = {

        threshold: 0.50
    }

    const callback = (entry) => {
        // save the new highlighted link id
        currentSectionId = newlink;
        // clear the previous link if not null
        const previousLink = document.getElementById(currentSectionId);
        previousLink.style.color = 'white';

        // what to do when the section is in the viewport
        if (entry[0].isIntersecting) { navlink.style.color = 'yellow'; }

    }

    const observer = new IntersectionObserver(callback, options);
    return observer;

}

function createNav(title) {
    /**
     * this constructs a nav link and appends it to the navbar
     * if the navbar already has a link or more, it will append a link divider first
     */
    const navbar = document.getElementById('myNav');

    // check weather we have other links or not
    const isPopulated = navbar.children.length > 0;

    // equivalent to if(isPopulated){...}
    isPopulated && navbar.appendChild(document.createTextNode('|'));

    const navlink = document.createElement('a');
    navlink.setAttribute('id', `link-${title.toLowerCase()}`);

    navlink.appendChild(document.createTextNode(title));
    // dynamicly set the link to the section using element id
    navlink.setAttribute('href', `#${title}`);

    // append to the container
    navbar.appendChild(navlink);

}


const style = {
    colors: ["aliceblue", "honeydew"],
    index: 0,
    getColor: function () {
        // return color from the list but always return to first 
        let current = this.colors[this.index];
        this.index = (this.index + 1) % this.colors.length;
        return current;
    }
};

function createSection(content) {
    /**
     * This constructs a section along with it's children.
     * it accepts an object and expects it to have a title, subtitle, and a body. 
     * this will return an HTMLElemnt with all the properties and children set but will not add it to the dom
     * 
     */

    // --construction--
    // create the title
    const sectionTitle = document.createElement('h1');
    const titleText = document.createTextNode(content.title);
    sectionTitle.appendChild(titleText);

    // create the subtitle
    const sectionSubtitle = document.createElement('h5');
    const subtitleText = document.createTextNode(content.subtitle);
    sectionSubtitle.appendChild(subtitleText);

    // create the body
    const sectionBody = document.createElement('p');
    const bodyText = document.createTextNode(content.body);
    sectionBody.appendChild(bodyText);

    // create the container
    const contentSection = document.createElement('section');
    contentSection.setAttribute('class', 'dynamicSection');
    contentSection.setAttribute('id', content.title);

    contentSection.style.backgroundColor = style.getColor();
    // add all the elements to the section
    contentSection.appendChild(sectionTitle);
    contentSection.appendChild(sectionSubtitle);
    contentSection.appendChild(sectionBody);

    //  --triggers and navigation--

    // create the navigation link for the section and append it to the navbar
    createNav(content.title);




    return contentSection;

}


// raw data
const source =
    [
        {
            "title": "Section-1",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "body": "Pellentesque cursus pretium neque, ut facilisis ante faucibus non. Etiam mattis urna mauris, sit amet rutrum lorem lacinia at. Integer sem metus, semper vitae mollis tristique, eleifend eget metus. Nullam eget dui placerat, molestie sem at, bibendum ex. Maecenas in augue quis diam interdum vehicula. Ut ut faucibus nisi. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum, ante at iaculis rutrum, felis arcu fermentum metus, dapibus efficitur lacus nisl lobortis urna. Fusce maximus fermentum eros id iaculis. Morbi fermentum sit amet nisi vel eleifend. In hac habitasse platea dictumst. Ut vitae lorem eget enim condimentum rutrum. Suspendisse ante quam, egestas vitae ante eu, facilisis efficitur sem. Donec eu orci mi. Donec finibus dignissim convallis."
        },
        {
            "title": "Section-2",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "body": "Pellentesque cursus pretium neque, ut facilisis ante faucibus non. Etiam mattis urna mauris, sit amet rutrum lorem lacinia at. Integer sem metus, semper vitae mollis tristique, eleifend eget metus. Nullam eget dui placerat, molestie sem at, bibendum ex. Maecenas in augue quis diam interdum vehicula. Ut ut faucibus nisi. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum, ante at iaculis rutrum, felis arcu fermentum metus, dapibus efficitur lacus nisl lobortis urna. Fusce maximus fermentum eros id iaculis. Morbi fermentum sit amet nisi vel eleifend. In hac habitasse platea dictumst. Ut vitae lorem eget enim condimentum rutrum. Suspendisse ante quam, egestas vitae ante eu, facilisis efficitur sem. Donec eu orci mi. Donec finibus dignissim convallis."
        },
        {
            "title": "Section-3",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "body": "Pellentesque cursus pretium neque, ut facilisis ante faucibus non. Etiam mattis urna mauris, sit amet rutrum lorem lacinia at. Integer sem metus, semper vitae mollis tristique, eleifend eget metus. Nullam eget dui placerat, molestie sem at, bibendum ex. Maecenas in augue quis diam interdum vehicula. Ut ut faucibus nisi. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum, ante at iaculis rutrum, felis arcu fermentum metus, dapibus efficitur lacus nisl lobortis urna. Fusce maximus fermentum eros id iaculis. Morbi fermentum sit amet nisi vel eleifend. In hac habitasse platea dictumst. Ut vitae lorem eget enim condimentum rutrum. Suspendisse ante quam, egestas vitae ante eu, facilisis efficitur sem. Donec eu orci mi. Donec finibus dignissim convallis."
        },
        {
            "title": "Section-4",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "body": "Pellentesque cursus pretium neque, ut facilisis ante faucibus non. Etiam mattis urna mauris, sit amet rutrum lorem lacinia at. Integer sem metus, semper vitae mollis tristique, eleifend eget metus. Nullam eget dui placerat, molestie sem at, bibendum ex. Maecenas in augue quis diam interdum vehicula. Ut ut faucibus nisi. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum, ante at iaculis rutrum, felis arcu fermentum metus, dapibus efficitur lacus nisl lobortis urna. Fusce maximus fermentum eros id iaculis. Morbi fermentum sit amet nisi vel eleifend. In hac habitasse platea dictumst. Ut vitae lorem eget enim condimentum rutrum. Suspendisse ante quam, egestas vitae ante eu, facilisis efficitur sem. Donec eu orci mi. Donec finibus dignissim convallis."
        }

    ]

const pageTarget = document.getElementById('myPage')

// create the section using the raw dat in [source] and append it after the document is loaded.
window.onload = () => {
    source.forEach((s) => {
        const content = createSection(s);
        pageTarget.appendChild(content);



    });
    source.forEach((s) =>    // content title is also the id of the section; this function will highlight the navlink for the section when it is 50% in the viewport
        highlight(s.title).observe(document.getElementById(s.title)));


}


