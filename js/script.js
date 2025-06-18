
/**
 * invitee: The name of the person who is inviting.
 * guest: List of names of the guests who are invited.
 * eventCodes: List of which event they are invited to. See below
 * Svr: Sparrow Valley Retreat
 * Tea: Tea Ceremony
 * Koi: Koi Palace Reception
 */
const GUEST_LIST = [
    {
        invitee: "Anthony Dao",
        guests: ["Yenia Angulo"], 
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Anthon1 Da1",
        guests: ["Jane Doe", "Kid A", "Kid B"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Anthon0 Da0",
        guests: ["Yeni0 Angul0", "Kid A0", "Kid B0"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Diep Dao",
        guests: ["Minh Nguyen"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Huong Dao",
        guests: ["Vinh Huynh"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Phuong Dao",
        guests: [],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Ngoc Dao",
        guests: ["Mai Tran"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Annie Dao",
        guests: ["Joseph Garcia"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Tri Dao",
        guests: ["Huong", "Danny Dao", "Kylan Dao"], // TODO Huong last name? 
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Thuy Dao",
        guests: ["Loi Tran", "Teo Tran"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Angela Tran",
        guests: ["Thomas Nguyen"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Xuan Dao",
        guests: ["Minh Lu", "Kha Lu", "Khiem Lu", "Donna Nguyen"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Tien Lu",
        guests: ["Andrew Deng"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Dai Tran",
        guests: ["Tuyet Pham", "Lilly Trieu"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Daihieu Tran",
        guests: ["Thu Tran", "Nathaniel Tran"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Elise Abraham",
        guests: ["Justin Abraham", "Tala Tran Abraham"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Victor Tran",
        guests: ["Becky Tran", "Huey Tran"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Huu Trieu",
        guests: [],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Kenneth Trieu",
        guests: ["Amina Villyena"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Thuan Tran",
        guests: ["Ashley Tran", "Hayley Tran", "Jonathan Tran"],
        eventCodes: ["Tea", "Koi"],
    },
    // {
    //     invitee: "Trang Lam",
    //     guests: ["Ashley Tran", "Hayley Tran", "Jonathan Tran"],
    //     eventCodes: ["Tea", "Koi"],
    // },
    {
        invitee: "Pham Ngoc Huong",
        guests: [],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Andrew Seaman",
        guests: ["Victoria Wong"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Hien Pham",
        guests: ["MyHuong Hoang"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Tuan Pham",
        guests: ["Bele Nguyen"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Hieu Pham",
        guests: ["Tuyet Lan Luu"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Vu Pham",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Nikki Pham",
        guests: ["Justin Ybarra"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Vivian Pham",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Lan Truong",
        guests: ["Trang Nguyen"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Phuong Nguyen",
        guests: ["Thanh Ha"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Dat Nguyen",
        guests: ["Phuong Bui"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "MyPhuong Nguyen",
        guests: ["Cong"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Hue Dao",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Nga Do",
        guests: ["Khe Tran"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Phuoc Do",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Hong Do",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Huy Do",
        guests: ["Lissa Do"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Trung Do",
        guests: ["Thuy Huynh"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Thuan Tran",
        guests: ["Chadwick Sprouse"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Tuyen Tran",
        guests: ["Jenny Lam"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Tan Tran",
        guests: ["Lam Pham"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Thieu Tran",
        guests: ["Trinh Tran"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Luyen Tran",
        guests: ["Michelle Brussasco"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Sen Dao",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Isabelle Pelaud",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Phuoc Pham",
        guests: ["Lai Dao"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Thuan Ngo",
        guests: ["Trang Dao"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Bui Ngo",
        guests: ["Dung Ngo"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Quang Do",
        guests: ["Quyen Bui"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Tuan Nguyen",
        guests: ["Hong Tram"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Nhi Vo",
        guests: ["Ha Nguyen"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Danh Nguyen",
        guests: ["Loan Chau"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Tu Le",
        guests: ["Khanh Tran"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Khai Tran",
        guests: ["Sharon Ngo"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "NgocLan Pham",
        guests: ["Hiep"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Colin Tran",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "QuynhNhu Ngo",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Khoa Nguyen",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Andrew Cao",
        guests: ["Chau Cao"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Minh Nguyen",
        guests: ["Linh Bui"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Katrina Huynh",
        guests: ["Maurice Le"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Thuy Nguyen",
        guests: ["Thai Nguyen"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Than Tran",
        guests: ["Trinh Pham"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Yen Lu",
        guests: ["KaiWing Lau", "Sam Lau"],
        eventCodes: ["Koi"],
    },

    {
        invitee: "Lorena Jacobo",
        guests: ["Mario Angulo"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Londra Page",
        guests: ["Dakota Page", "Nico Page"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Karina Angulo",
        guests: ["Ivan Delgado"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Consuelo Jacobo",
        guests: ["Joanna Martin"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Gizzeth Martin",
        guests: ["Isaac"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Maria Luisa Prieto",
        guests: ["Elizabeth Jacobo", "Martha Moran"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Laura Jacobo",
        guests: ["Jessrey Valencia Jacobo"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Carlos Jacobo",
        guests: ["Alejandra"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Alba Beltran",
        guests: [],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Chuy Beltran",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Luis Leon",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Marilu Jacobo",
        guests: [""],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Oscar Lara",
        guests: [""],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Wilfredo Jacobo",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Christopher Jacobo",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Lulu Jacobo",
        guests: ["Temo Pena"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Enrique Jacobo",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Pablo Jacobo",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Joeth Jacobo",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Diana Maria Jacobo",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Claudia Jacobo",
        guests: [""],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Marcelo Angulo",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Isabel Angulo",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Adriana Sainz",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Javier Sainz",
        guests: [""],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Maria Guadalupe Angulo",
        guests: ["Federico Castaneda"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Luciana Verdugo",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Irene Angulo",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },


    // Friends
    {
        invitee: "Nuna Cruz",
        guests: ["Eric Cruz"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Jessica Hsieh",
        guests: ["Michael Johansen"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Kirsten Yale",
        guests: ["Darren"], // TODO get Darren's last name
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Timothy Nguyen",
        guests: [],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Tom Nguyen",
        guests: [],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Ricky Lam",
        // guests: ["Trisha Nguyen"],
        guests: [],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Kathy Lam",
        guests: ["Kenny Loomis"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Justin Tran",
        guests: ["Linda Yam"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Megan Meitsen",
        guests: ["Bryce Meitsen"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Victory Le",
        guests: ["Sadie Le"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Bryan Cheung",
        guests: [],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Huy Pham",
        guests: [],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Kevin Macaraeg",
        guests: ["Chia Moua"],
        eventCodes: ["Svr", "Tea", "Koi"],
    },
    {
        invitee: "Lisa Diep",
        guests: ["Jason Diep"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Vince Chua",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Van Dang",
        guests: ["Chris Nguyen"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Ebenezer Obi",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Henny Nguyen",
        guests: [],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Clorinda Tellez",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Paulette Moore",
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Roger Liera",
        guests: ["Guest"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Maria Ramos",
        guests: ["Guest"],
        eventCodes: ["Tea", "Koi"],
    },
    {
        invitee: "Lisette Lopez",
        guests: ["Guest"],
        eventCodes: ["Tea", "Koi"],
    },
     {
        invitee: "Jennifer Zhu",
        guests: ["Jacky Zhu"],
        eventCodes: ["Koi"],
    },
    // {
    //     invitee: "Kevin Young", // TODO are we inviting Kevin? 
    //     guests: ["Guest"],
    //     eventCodes: ["Koi"],
    // },
    {
        invitee: "Son Ngo",
        guests: ["Alanya Olsen"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Ben Ha",
        guests: ["Susan Ha"], // TODO get Susan's last name
        eventCodes: ["Koi"],
    },
    {
        invitee: "Inda", // TODO get Inda's last name
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Itzel", // TODO get Itzel's last name
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Ana Peccin", 
        guests: ["Guest"],
        eventCodes: ["Koi"],
    },
    {
        invitee: "Tuan Van", 
        guests: ["Khanh Nguyen"], 
        eventCodes: ["Koi"],
    },
   

];

function normalizeName(name) {
    if (typeof name !== 'string') return '';
    return name.trim().toLowerCase();
}

async function submitRsvp(formData) {

    const formspreeEndpoint = "https://formspree.io/f/xvgajwrp"; 

    try {
        const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            document.getElementById('rsvp-form-section').style.display = 'none';
            document.getElementById('rsvp-confirmation-message').style.display = 'block';
            const guestNameInput = document.getElementById('guest-name-input');
            if (guestNameInput) guestNameInput.value = '';

        } else {
            const errorText = await response.text();
            alert(`There was an error submitting your RSVP: ${response.status} ${response.statusText}. Please try again or contact us directly.`);
            console.error('Formspree error:', response.status, response.statusText, errorText);
        }
    } catch (error) {
        alert("Network error. Please check your connection and try again.");
        console.error('Network error:', error);
    }
}


// --- NEW: Carousel Swiping Logic ---

function enableSwipeForCarousel(carouselSelector, radioButtonsName) {
    const carousel = document.querySelector(carouselSelector);
    if (!carousel) {
        console.warn(`Carousel with selector "${carouselSelector}" not found for swipe enable.`);
        return;
    }

    let touchstartX = 0;
    let touchendX = 0;
    const minSwipeDistance = 50; // Minimum pixels for a horizontal swipe to be registered

    function handleGesture() {
        const diffX = touchendX - touchstartX;

        if (Math.abs(diffX) > minSwipeDistance) { // Check if it's a significant horizontal swipe
            const radioButtons = carousel.querySelectorAll(`input[name="${radioButtonsName}"]`);
            if (radioButtons.length === 0) return;

            let currentIndex = -1;
            for (let i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    currentIndex = i;
                    break;
                }
            }

            if (currentIndex === -1) { // No slide checked, default to first
                radioButtons[0].checked = true;
                return;
            }

            if (diffX < 0) { // Swiped left (next slide)
                const nextIndex = (currentIndex + 1) % radioButtons.length;
                radioButtons[nextIndex].checked = true;
            } else { // Swiped right (previous slide)
                const prevIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
                radioButtons[prevIndex].checked = true;
            }
        }
    }

    carousel.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, { passive: true }); // passive: true to not block scrolling initially

    carousel.addEventListener('touchmove', e => {
        // We only want to prevent default if it's primarily a horizontal swipe
        // This is a common heuristic: if horizontal movement is greater than vertical, prevent default
        const currentTouchX = e.changedTouches[0].screenX;
        const currentTouchY = e.changedTouches[0].screenY;
        if (Math.abs(currentTouchX - touchstartX) > Math.abs(currentTouchY - e.changedTouches[0].screenY)) {
            e.preventDefault(); // Prevent vertical scrolling if it's a horizontal swipe
        }
    }, { passive: false }); // passive: false needed to allow preventDefault

    carousel.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    });
}

// --- Initialize Swiping for your Carousels on DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    // Top carousel
    enableSwipeForCarousel('.carousel:not(.carousel-bottom)', 'radio-buttons');

    // Bottom carousel
    enableSwipeForCarousel('.carousel-bottom', 'radio-buttons-bottom');
});