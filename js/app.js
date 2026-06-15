console.log("Week 3 Started 🚀");

const heroTitle = document.getElementById("hero-title");

if (heroTitle) {
    heroTitle.textContent = "Welcome to CampusConnect";
}

const browseButton = document.getElementById("browse-btn");

if (browseButton) {
    browseButton.addEventListener("click", function () {
        alert("Browse Events button clicked!");
    });
}

let events =
    JSON.parse(
        localStorage.getItem("events")
    ) || [

        {
            id: 1,
            name: "Tech Fest 2026",
            category: "Fest",
            date: "15 Sept 2026",
            venue: "Main Auditorium"
        },

        {
            id: 2,
            name: "AI Workshop",
            category: "Workshop",
            date: "20 Sept 2026",
            venue: "Lab 3"
        },

        {
            id: 3,
            name: "Cricket Tournament",
            category: "Sports",
            date: "25 Sept 2026",
            venue: "Sports Ground"
        },

        {
            id: 4,
            name: "Photography Club Meet",
            category: "Club",
            date: "28 Sept 2026",
            venue: "Seminar Hall"
        }

    ];

const featuredEventsContainer =
    document.getElementById("featured-events");

if (featuredEventsContainer) {

    events.forEach(function (event) {

        featuredEventsContainer.innerHTML += `

            <article class="event-card">

                <span class="category-badge">
                    ${event.category}
                </span>

                <h3>${event.name}</h3>

                <p>
                    <strong>Date:</strong>
                    ${event.date}
                </p>

                <p>
                    <strong>Venue:</strong>
                    ${event.venue}
                </p>

            </article>

        `;

    });

}

function renderEvents(eventsList) {

    const container =
        document.getElementById("events-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    eventsList.forEach(function (event) {

        container.innerHTML += `

            <article class="event-card">

                <span class="category-badge">
                    ${event.category}
                </span>

                <h3>${event.name}</h3>

                <p>
                    <strong>Date:</strong>
                    ${event.date}
                </p>

                <p>
                    <strong>Venue:</strong>
                    ${event.venue}
                </p>

                 <a
                    href="event-detail.html"
                    class="btn-primary view-details-btn"
                    data-id="${event.id}"
                >
                    View Details
                </a>

            </article>

        `;

    });

}

renderEvents(events);
document.addEventListener(
    "click",
    function (e) {

        if (
            e.target.classList.contains(
                "view-details-btn"
            )
        ) {

            const eventId =
                Number(
                    e.target.dataset.id
                );

            const selectedEvent =
                events.find(
                    function (event) {

                        return (
                            event.id === eventId
                        );

                    }
                );

            localStorage.setItem(
                "selectedEvent",
                JSON.stringify(
                    selectedEvent
                )
            );

        }

    }
);

const allBtn = document.getElementById("all-btn");
const festBtn = document.getElementById("fest-btn");
const workshopBtn = document.getElementById("workshop-btn");
const sportsBtn = document.getElementById("sports-btn");
const clubBtn = document.getElementById("club-btn");

if (allBtn) {

    allBtn.addEventListener("click", function () {

        renderEvents(events);

    });

}

if (festBtn) {

    festBtn.addEventListener("click", function () {

        const festEvents = events.filter(function (event) {

            return event.category === "Fest";

        });

        renderEvents(festEvents);

    });

}

if (workshopBtn) {

    workshopBtn.addEventListener("click", function () {

        const workshopEvents = events.filter(function (event) {

            return event.category === "Workshop";

        });

        renderEvents(workshopEvents);

    });

}

if (sportsBtn) {

    sportsBtn.addEventListener("click", function () {

        const sportsEvents = events.filter(function (event) {

            return event.category === "Sports";

        });

        renderEvents(sportsEvents);

    });

}

if (clubBtn) {

    clubBtn.addEventListener("click", function () {

        const clubEvents = events.filter(function (event) {

            return event.category === "Club";

        });

        renderEvents(clubEvents);

    });

}

const addEventForm =
    document.getElementById("add-event-form");

if (addEventForm) {

    addEventForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const eventName =
                document.getElementById(
                    "event-name"
                ).value;

            const category =
                document.getElementById(
                    "category"
                ).value;

            const date =
                document.getElementById(
                    "date"
                ).value;

            const venue =
                document.getElementById(
                    "venue"
                ).value;

            const newEvent = {

                id: events.length + 1,

                name: eventName,

                category: category,

                date: date,

                venue: venue

            };

            events.push(newEvent);

            localStorage.setItem(
                "events",
                JSON.stringify(events)
            );

            console.log(events);

            alert("Event Added Successfully!");

            addEventForm.reset();

        }
    );

}
const registerBtn =
    document.getElementById(
        "register-btn"
    );

if (registerBtn) {

    registerBtn.addEventListener(
        "click",
        function () {

            let registrations =
                JSON.parse(
                    localStorage.getItem(
                        "registrations"
                    )
                ) || [];

            const selectedEvent =
                JSON.parse(
                    localStorage.getItem(
                        "selectedEvent"
                    )
                );

            if (!selectedEvent) {

                alert(
                    "Please open an event from Events page first."
                );

                return;

            }
            const alreadyRegistered =
                    registrations.find(function (registration) {

                        return registration.id === selectedEvent.id;

                    });

                if (alreadyRegistered) {

                    alert("You are already registered for this event!");

                    return;

                }

            registrations.push(
                selectedEvent
            );

            localStorage.setItem(
                "registrations",
                JSON.stringify(
                    registrations
                )
            );

            alert(
                "Registration Successful!"
            );

        }
    );

}

const registrationsList =
    document.getElementById(
        "registrations-list"
    );

if (registrationsList) {

    const registrations =
        JSON.parse(
            localStorage.getItem(
                "registrations"
            )
        ) || [];

    registrations.forEach(
        function (registration) {

            registrationsList.innerHTML += `

            <article class="event-card">

                <span class="category-badge">
                    ${registration.category}
                </span>

                <h3>
                    ${registration.name}
                </h3>

                <p>
                    <strong>Date:</strong>
                    ${registration.date}
                </p>

        <button
                    class="remove-registration-btn"
                    data-id="${registration.id}"
                >
                    Cancel Registration
                </button>

            </article>

        `;

        }
    );

}

const eventTitle =
    document.getElementById(
        "event-title"
    );

if (eventTitle) {

    const selectedEvent =
        JSON.parse(
            localStorage.getItem(
                "selectedEvent"
            )
        );

    if (selectedEvent) {

        document.getElementById(
            "event-title"
        ).textContent =
            selectedEvent.name;

        document.getElementById(
            "event-category"
        ).textContent =
            selectedEvent.category;

        document.getElementById(
            "event-date"
        ).textContent =
            selectedEvent.date;

        document.getElementById(
            "event-venue"
        ).textContent =
            selectedEvent.venue;

    }

}
document.addEventListener(
    "click",
    function (e) {

        if (
            e.target.classList.contains(
                "remove-registration-btn"
            )
        ) {

            const registrationId =
                Number(
                    e.target.dataset.id
                );

            let registrations =
                JSON.parse(
                    localStorage.getItem(
                        "registrations"
                    )
                ) || [];

            registrations =
                registrations.filter(
                    function (registration) {

                        return (
                            registration.id !==
                            registrationId
                        );

                    }
                );

            localStorage.setItem(
                "registrations",
                JSON.stringify(
                    registrations
                )
            );

            location.reload();

        }

    }
);
const searchInput =
    document.getElementById(
        "search-input"
    );

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchText =
                searchInput.value
                .toLowerCase();

            const filteredEvents =
                events.filter(
                    function (event) {

                        return event.name
                            .toLowerCase()
                            .includes(
                                searchText
                            );

                    }
                );

            renderEvents(
                filteredEvents
            );

        }
    );

}
const totalEventsElement =
    document.getElementById(
        "total-events"
    );

const registeredEventsElement =
    document.getElementById(
        "registered-events"
    );

if (
    totalEventsElement &&
    registeredEventsElement
) {

    const registrations =
        JSON.parse(
            localStorage.getItem(
                "registrations"
            )
        ) || [];

    totalEventsElement.textContent =
        events.length;

    registeredEventsElement.textContent =
        registrations.length;

}
const darkModeToggle =
    document.getElementById(
        "dark-mode-toggle"
    );

if (darkModeToggle) {

    darkModeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );

        }
    );

}