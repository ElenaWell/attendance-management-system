const students = [
  { id: 1001, name: "Naruto Uzumaki", year: 12, section: "Naruto", status: "Pending" },
  { id: 1002, name: "Sasuke Uchiha", year: 12, section: "Naruto", status: "Pending" },
  { id: 1003, name: "Sakura Haruno", year: 12, section: "Naruto", status: "Pending" },
  { id: 1004, name: "Kakashi Hatake", year: 12, section: "Naruto", status: "Pending" },
  { id: 1005, name: "Shikamaru Nara", year: 12, section: "Naruto", status: "Pending" },
  { id: 1006, name: "Hinata Hyuga", year: 12, section: "Naruto", status: "Pending" },
  { id: 1007, name: "Rock Lee", year: 12, section: "Naruto", status: "Pending" },
  { id: 1008, name: "Neji Hyuga", year: 12, section: "Naruto", status: "Pending" },

  { id: 2001, name: "Eren Yeager", year: 11, section: "Attack on Titan", status: "Pending" },
  { id: 2002, name: "Mikasa Ackerman", year: 11, section: "Attack on Titan", status: "Pending" },
  { id: 2003, name: "Armin Arlert", year: 11, section: "Attack on Titan", status: "Pending" },
  { id: 2004, name: "Levi Ackerman", year: 11, section: "Attack on Titan", status: "Pending" },
  { id: 2005, name: "Hange Zoe", year: 11, section: "Attack on Titan", status: "Pending" },
  { id: 2006, name: "Jean Kirstein", year: 11, section: "Attack on Titan", status: "Pending" },
  { id: 2007, name: "Connie Springer", year: 11, section: "Attack on Titan", status: "Pending" },
  { id: 2008, name: "Sasha Blouse", year: 11, section: "Attack on Titan", status: "Pending" },

  { id: 3001, name: "Tanjiro Kamado", year: 10, section: "Demon Slayer", status: "Pending" },
  { id: 3002, name: "Nezuko Kamado", year: 10, section: "Demon Slayer", status: "Pending" },
  { id: 3003, name: "Zenitsu Agatsuma", year: 10, section: "Demon Slayer", status: "Pending" },
  { id: 3004, name: "Inosuke Hashibira", year: 10, section: "Demon Slayer", status: "Pending" },
  { id: 3005, name: "Kyojuro Rengoku", year: 10, section: "Demon Slayer", status: "Pending" },
  { id: 3006, name: "Giyu Tomioka", year: 10, section: "Demon Slayer", status: "Pending" },
  { id: 3007, name: "Shinobu Kocho", year: 10, section: "Demon Slayer", status: "Pending" },
  { id: 3008, name: "Muichiro Tokito", year: 10, section: "Demon Slayer", status: "Pending" },

  { id: 4001, name: "Yuji Itadori", year: 9, section: "Jujutsu Kaisen", status: "Pending" },
  { id: 4002, name: "Megumi Fushiguro", year: 9, section: "Jujutsu Kaisen", status: "Pending" },
  { id: 4003, name: "Nobara Kugisaki", year: 9, section: "Jujutsu Kaisen", status: "Pending" },
  { id: 4004, name: "Satoru Gojo", year: 9, section: "Jujutsu Kaisen", status: "Pending" },
  { id: 4005, name: "Yuta Okkotsu", year: 9, section: "Jujutsu Kaisen", status: "Pending" },
  { id: 4006, name: "Maki Zenin", year: 9, section: "Jujutsu Kaisen", status: "Pending" },
  { id: 4007, name: "Toge Inumaki", year: 9, section: "Jujutsu Kaisen", status: "Pending" },
  { id: 4008, name: "Panda", year: 9, section: "Jujutsu Kaisen", status: "Pending" },
  { id: 4009, name: "Aoi Todo", year: 9, section: "Jujutsu Kaisen", status: "Pending" },

  { id: 5001, name: "Taro Sakamoto", year: 8, section: "Sakamoto Days", status: "Pending" },
  { id: 5002, name: "Shin Asakura", year: 8, section: "Sakamoto Days", status: "Pending" },
  { id: 5003, name: "Lu Xiaotang", year: 8, section: "Sakamoto Days", status: "Pending" },
  { id: 5004, name: "Heisuke Mashimo", year: 8, section: "Sakamoto Days", status: "Pending" },
  { id: 5005, name: "Nagumo", year: 8, section: "Sakamoto Days", status: "Pending" },
  { id: 5006, name: "Shishiba", year: 8, section: "Sakamoto Days", status: "Pending" },
  { id: 5007, name: "Osaragi", year: 8, section: "Sakamoto Days", status: "Pending" },
  { id: 5008, name: "Kindaka", year: 8, section: "Sakamoto Days", status: "Pending" },

  { id: 6001, name: "Monkey D. Luffy", year: 7, section: "One Piece", status: "Pending" },
  { id: 6002, name: "Roronoa Zoro", year: 7, section: "One Piece", status: "Pending" },
  { id: 6003, name: "Nami", year: 7, section: "One Piece", status: "Pending" },
  { id: 6004, name: "Usopp", year: 7, section: "One Piece", status: "Pending" },
  { id: 6005, name: "Sanji", year: 7, section: "One Piece", status: "Pending" },
  { id: 6006, name: "Tony Tony Chopper", year: 7, section: "One Piece", status: "Pending" },
  { id: 6007, name: "Nico Robin", year: 7, section: "One Piece", status: "Pending" },
  { id: 6008, name: "Jinbe", year: 7, section: "One Piece", status: "Pending" },

  { id: 7001, name: "Izuku Midoriya", year: 6, section: "My Hero Academia", status: "Pending" },
  { id: 7002, name: "Katsuki Bakugo", year: 6, section: "My Hero Academia", status: "Pending" },
  { id: 7003, name: "Shoto Todoroki", year: 6, section: "My Hero Academia", status: "Pending" },
  { id: 7004, name: "Ochaco Uraraka", year: 6, section: "My Hero Academia", status: "Pending" },
  { id: 7005, name: "Tenya Iida", year: 6, section: "My Hero Academia", status: "Pending" },
  { id: 7006, name: "Tsuyu Asui", year: 6, section: "My Hero Academia", status: "Pending" },
  { id: 7007, name: "Eijiro Kirishima", year: 6, section: "My Hero Academia", status: "Pending" },
  { id: 7008, name: "Momo Yaoyorozu", year: 6, section: "My Hero Academia", status: "Pending" }
];


// LOAD FROM LOCAL STORAGE

const savedStudents =
    localStorage.getItem("students");

if (savedStudents) {

    students.splice(
        0,
        students.length,
        ...JSON.parse(savedStudents)
    );

}
// LOAD ACTIVITY HISTORY

let activities =
    JSON.parse(localStorage.getItem("activities")) || [];

// DOM ELEMENTS



const studentList =
    document.getElementById("student-list");

const searchInput =
    document.getElementById("search-input");

const sectionFilter =
    document.getElementById("section-filter");

const yearFilter =
    document.getElementById("year-filter");

const totalStudents =
    document.getElementById("total-students");

const presentCount =
    document.getElementById("present-count");

const pendingCount =
    document.getElementById("pending-count")

const absentCount =
    document.getElementById("absent-count");

const currentDate =
    document.getElementById("current-date");

const currentTime =
    document.getElementById("current-time");

const activityList =
    document.getElementById("activity-list");

const adminToolsBtn =
    document.getElementById("admin-tools-btn");

const adminToolsMenu =
    document.getElementById("admin-tools-menu");

const exportAttendanceBtn =
    document.getElementById("export-attendance-btn");

const markAllPresentBtn =
    document.getElementById("mark-all-present-btn");

const markAllPendingBtn =
    document.getElementById("mark-all-pending-btn");

const resetSessionBtn =
    document.getElementById("reset-session-btn");

const confirmationModal =
    document.getElementById("confirmation-modal");

const modalTitle =
    document.getElementById("modal-title");

const modalMessage =
    document.getElementById("modal-message");

const cancelBtn =
    document.getElementById("cancel-btn");

const confirmBtn =
    document.getElementById("confirm-btn");

const logoutButton =
    document.getElementById("logout-btn");

// NEW ADDITION

const currentUser =
    JSON.parse(sessionStorage.getItem("currentUser"));


const loggedInUser =
    document.getElementById("logged-in-user");

loggedInUser.textContent =
    `Logged in as: ${currentUser.username}`;




// RBAC

const currentRole =
    currentUser.role;

console.log(currentRole); // gotta remove this later 

const dashboardSubtitle =
    document.getElementById("dashboard-subtitle");

if (currentRole === "admin") {

    dashboardSubtitle.textContent =
        "Administrator Dashboard";

} else if (currentRole === "teacher") {

    dashboardSubtitle.textContent =
        "Teacher Attendance Dashboard";

} else if (currentRole === "student") {

    dashboardSubtitle.textContent =
        "Student Attendance Dashboard";

}
    
      // Restricting admin tools for non-admin users
const adminTools =
    document.querySelector(".admin-tools");

    if (currentRole !== "admin") {

    adminTools.style.display = "none";

}






// DISPLAY STUDENTS


function displayStudents(studentArray) {

    studentList.innerHTML = "";

    studentArray.forEach(student => {

        const attendanceControl =
            currentRole === "student"
                ? `<span class="attendance-status ${student.status.toLowerCase()}">${student.status}</span>`
                : `
                    <select
                        class="status-dropdown ${student.status.toLowerCase()}"
                        data-id="${student.id}"
                    >
                        <option
                            value="Pending"
                            ${student.status === "Pending" ? "selected" : ""}
                        >
                            Pending
                        </option>

                        <option
                            value="Present"
                            ${student.status === "Present" ? "selected" : ""}
                        >
                            Present
                        </option>

                        <option
                            value="Absent"
                            ${student.status === "Absent" ? "selected" : ""}
                        >
                            Absent
                        </option>
                    </select>
                `;

        studentList.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.year}</td>
                <td>${student.section}</td>

                <td>
                    ${attendanceControl}
                </td>
            </tr>
        `;

    });

}


// POPULATE SECTION FILTER


const sections =
    [...new Set(students.map(student => student.section))];

sections.forEach(section => {

    sectionFilter.innerHTML += `
        <option value="${section}">
            ${section}
        </option>
    `;

});



// POPULATE YEAR FILTER


const years =
    [...new Set(students.map(student => student.year))];

years.sort((a, b) => b - a);

years.forEach(year => {

    yearFilter.innerHTML += `
        <option value="${year}">
            ${year}
        </option>
    `;

});



// DASHBOARD FUNCTIONS


function updateDashboard() {

    totalStudents.textContent =
        students.length;

    const present =
        students.filter(student =>
            student.status === "Present"
        ).length;

    const pending =
        students.filter(student =>
            student.status === "Pending"
        ).length;

    const absent =
        students.filter(student =>
            student.status === "Absent"
        ).length;

    presentCount.textContent =
        present;
    pendingCount.textContent =
        pending;
    absentCount.textContent =
        absent;

}

// SAVE TO LOCAL STORAGE

function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}
// SAVE ACTIVITY HISTORY

function saveActivities() {

    localStorage.setItem(
        "activities",
        JSON.stringify(activities)
    );

}

// FILTER STUDENTS


function filterStudents() {

    const searchValue =
        searchInput.value.toLowerCase();

    const selectedYear =
        yearFilter.value;

    const selectedSection =
        sectionFilter.value;

    const filteredStudents =
        students.filter(student => {

            const matchesSearch =
                student.name
                    .toLowerCase()
                    .includes(searchValue);

            const matchesYear =
                selectedYear === "All Years" ||
                student.year == selectedYear;

            const matchesSection =
                selectedSection === "All Sections" ||
                student.section === selectedSection;

            return (
                matchesSearch &&
                matchesYear &&
                matchesSection
            );

        });

    displayStudents(filteredStudents);

}


// UPDATE STUDENT STATUS

function updateStudentStatus(event) {

    const studentId =
        Number(event.target.dataset.id);

    const newStatus =
        event.target.value;

    const student =
        students.find(student =>
            student.id === studentId
        );

    if (student) {

        student.status = newStatus;
        
        event.target.className =
            `status-dropdown ${newStatus.toLowerCase()}`;
        
        addActivity(
            student.name,
            newStatus 
        );
        saveStudents();
    }

    updateDashboard();      
       
}
function updateAllStudents(status) {

    students.forEach(student => {

        student.status = status;

    });

    displayStudents(students);

    updateDashboard();

    saveStudents();

    addActivity(
        "",
        `All students marked ${status}.`
    );

}
function resetSession() {

    updateAllStudents("Pending");

    activities[0].description =
        "Attendance session reset.";

    saveActivities();

    renderActivities();

}
function exportAttendance() {

    let csv =
        "ID,Name,Year,Section,Status\n";

    students.forEach(student => {

        csv +=
            `${student.id},` +
            `${student.name},` +
            `${student.year},` +
            `${student.section},` +
            `${student.status}\n`;

    });

    const blob =
        new Blob([csv], { type: "text/csv" });

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    const today =
        new Date().toISOString().split("T")[0];

    link.href = url;

    link.download =
        `attendance-${today}.csv`;

    link.click();

    URL.revokeObjectURL(url);

    addActivity(
        "",
        "Attendance exported."
    );

}
// RENDER ACTIVITY HISTORY

function renderActivities() {

    if (activities.length === 0) {

        activityList.innerHTML = `
            <p class="empty-activity">
                Waiting for attendance updates...
            </p>
        `;

        return;

    }

    activityList.innerHTML = "";

    activities.forEach(activity => {

        const time =
            new Date(activity.timestamp)
                .toLocaleTimeString(
                    "en-US",
                    {
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                );

        activityList.innerHTML += `
            <div class="activity-item">

                <p class="activity-time">
                    ${time}
                </p>

                ${activity.title ? `
                    <p class="activity-name">
                        ${activity.title}
                    </p>
                ` : ""}


                <p class="activity-status">
                    ${activity.description}
                </p>

            </div>
        `;

    });

}
// FUNCTION FOR ACTIVITY HISTORY
function addActivity(studentName, status) {

    activities.unshift({

        timestamp: Date.now(),

        title: studentName,

        description: 
            studentName
                ?`Marked as ${status}`
                : status
                  

    });

    if (activities.length > 50) {

    activities.pop();

    }

    saveActivities();

    renderActivities();

}
// MODAL DISPLAY FUNCTION

function showConfirmation(title, message, action) {

    modalTitle.textContent = title;

    modalMessage.textContent = message;

    pendingAction = action;

    confirmationModal.style.display = "flex";

}

    // LOGOUT FUNCTION

logoutButton.addEventListener(
    "click",
    function () {

        showConfirmation(
            "Confirm Logout",
            "Are you sure you want to log out?",
            function () {

                sessionStorage.removeItem(
                    "currentUser"
                );

                window.location.href =
                    "login.html";

            }
        );

    }
);

// EVENT LISTENERS


searchInput.addEventListener(
    "input",
    filterStudents
);

sectionFilter.addEventListener(
    "change",
    filterStudents
);

yearFilter.addEventListener(
    "change",
    filterStudents
);

studentList.addEventListener(
    "change",
    function(event) {
        if (
            event.target.classList.contains("status-dropdown")
        
        )  {

            updateStudentStatus(event);

        }
    }

);
adminToolsBtn.addEventListener(
    "click",
    function () {

        adminToolsMenu.classList.toggle("open");

    }
);
document.addEventListener(
    "click",
    function (event) {

        if (
            !adminToolsBtn.contains(event.target) &&
            !adminToolsMenu.contains(event.target)
        ) {

            adminToolsMenu.classList.remove("open");

        }

    }
);
markAllPresentBtn.addEventListener(
    "click",
    function () {

        showConfirmation(
            "Mark All Present",
            "This will mark every student as Present.",
            function () {

                updateAllStudents("Present");

            }
        );

    }
);
markAllPendingBtn.addEventListener(
    "click",
    function () {

        showConfirmation(
            "Mark All Pending",
            "This will mark every student as Pending.",
            function () {

                updateAllStudents("Pending");

            }
        );

    }
);
resetSessionBtn.addEventListener(
    "click",
    function () {

        showConfirmation(
            "Reset Session",
            "This will set all students back to Pending.",
            resetSession
        );

    }
);
exportAttendanceBtn.addEventListener(
    "click",
    function () {

        exportAttendance();

    }
);

cancelBtn.addEventListener(
    "click",
    function () {

        confirmationModal.style.display = "none";

    }
);

confirmBtn.addEventListener(
    "click",
    function () {

        confirmationModal.style.display = "none";

        if (pendingAction) {

            pendingAction();

            pendingAction = null;

        }

    }
);
// GLOBAL VARIABLES

let pendingAction = null;

// DATE & TIME

function updateDateTime() {

    const now = new Date();

    currentDate.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );

    currentTime.textContent =
        now.toLocaleTimeString(
            "en-US",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );

}



// INITIAL LOAD


displayStudents(students);

updateDashboard();

renderActivities();

updateDateTime();

setInterval(
    updateDateTime,
    1000
);


