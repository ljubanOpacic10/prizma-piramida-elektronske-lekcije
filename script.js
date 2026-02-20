window.onload = function () {
    const headingUnderline = document.querySelector('.headingUnderline');
    setTimeout(() => {
        headingUnderline.classList.add('expand');
    }, 300);

    const step1 = document.getElementById('step1');
    const geoGebraFrame = document.getElementById('geoGebraFrame');

    step1.addEventListener('click', function () {
        if (geoGebraFrame.style.display === 'none') {
            geoGebraFrame.style.display = 'block';
            step1.querySelector('img').classList.add('rotate');
        } else {
            geoGebraFrame.style.display = 'none';
            step1.querySelector('img').classList.remove('rotate');
        }
    });
};

document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function () {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

        const arrowDown = this.querySelector('img');
        arrowDown.classList.toggle('rotate');

        this.classList.toggle('active');

        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== dropdownContent) {
                content.style.display = 'none';
                const arrow = content.previousElementSibling.querySelector('img');
                if (arrow.classList.contains('rotate')) {
                    arrow.classList.remove('rotate');
                }

                content.previousElementSibling.classList.remove('active');
            }
        });
    });
});

window.onclick = function (event) {


    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
            const arrow = content.previousElementSibling.querySelector('img');
            arrow.classList.remove('rotate');
            content.previousElementSibling.classList.remove('active');
        });
    }
};


document.addEventListener('DOMContentLoaded', () => {

    const steps = document.querySelectorAll('.shadowText');

    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            const dropdown = document.getElementById(`dropdown${index + 1}`);

            if (dropdown.style.display === "none" || dropdown.style.display === "") {
                dropdown.style.display = "block";
            } else {
                dropdown.style.display = "none";
            }
        });
    });
});

document.querySelectorAll('.shadowText.drawStep').forEach(function (drawStep) {
    drawStep.addEventListener('click', function () {
        const listItem = this.nextElementSibling;
        const arrow = this.querySelector('img');

        if (listItem && listItem.classList.contains('listItem')) {
            if (listItem.style.display === 'none' || listItem.style.display === '') {
                listItem.style.display = 'block';
                arrow.classList.add('rotate');
            } else {
                listItem.style.display = 'none';
                arrow.classList.remove('rotate');
            }
        }
    });
});




function toggleIframe(id) {
    var iframe = document.getElementById(id);
    if (iframe.style.display === "none" || iframe.style.display === "") {
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
}



var params = {
    "appName": "geometry",
    "width": 600,
    "height": 600,
    "showToolBar": false,
    "showAlgebraInput": false,
    "showMenuBar": false,
    "showToolBarHelp": false,
};
var ggbApplet = new GGBApplet(params, true);
window.addEventListener("load", function () {
    ggbApplet.inject('ggb-element');
});






function loadPage(page) {
    fetch(page) // Fetch the HTML content of the selected page
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${page}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("contentContainer").innerHTML = html; // Inject content into the container
        })
        .catch(error => {
            console.error("Error loading the page:", error);
        });
}

// --- Toggle Solution for Task Cards ---
function toggleSolution(button) {
    const solutionContent = button.nextElementSibling;
    if (!solutionContent) return;

    solutionContent.classList.toggle('show');

    if (solutionContent.classList.contains('show')) {
        button.textContent = '🔼 Sakrij rešenje';
    } else {
        button.textContent = '🔎 Prikaži rešenje';
    }
}



































