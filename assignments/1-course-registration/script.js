const courseData = {
  frontend: { name: "Full Stack Development", fee: 18000, duration: 12, eligibility: "Open to beginners with an interest in web development." },
  uiux: { name: "UI / UX Design", fee: 12000, duration: 8, eligibility: "Open to beginners with an interest in design." },
  dsa: { name: "Data Structures & Algorithms", fee: 15000, duration: 10, eligibility: "Recommended for CSE / IT students." },
  cloud: { name: "Cloud Fundamentals", fee: 14000, duration: 8, eligibility: "Basic programming knowledge is recommended." }
};

const form = document.querySelector("#registrationForm");
const courseInputs = [...document.querySelectorAll('input[name="courses"]')];
const courseCount = document.querySelector("#courseCount");
const summaryCourses = document.querySelector("#summaryCourses");
const summaryDuration = document.querySelector("#summaryDuration");
const summaryFee = document.querySelector("#summaryFee");
const summaryEligibility = document.querySelector("#summaryEligibility");

const formatCurrency = (amount) => `₹${amount.toLocaleString("en-IN")}`;

function updateSummary() {
  const selected = courseInputs.filter((input) => input.checked).map((input) => courseData[input.value]);
  const totalFee = selected.reduce((total, course) => total + course.fee, 0);
  const totalDuration = selected.reduce((total, course) => total + course.duration, 0);

  courseCount.textContent = `${selected.length} selected`;
  summaryCourses.textContent = selected.length ? selected.map((course) => course.name).join(", ") : "None yet";
  summaryDuration.textContent = selected.length ? `${totalDuration} weeks total` : "—";
  summaryFee.textContent = formatCurrency(totalFee);
  summaryEligibility.textContent = selected.length ? selected.map((course) => course.eligibility).join(" ") : "Select a course to see eligibility requirements.";
}

courseInputs.forEach((input) => input.addEventListener("change", updateSummary));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const error = document.querySelector("#courseError");
  const success = document.querySelector("#successMessage");
  const selected = courseInputs.filter((input) => input.checked);

  error.textContent = "";
  success.textContent = "";
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    if (!selected.length) error.textContent = "Please select at least one course.";
    return;
  }
  if (!selected.length) {
    error.textContent = "Please select at least one course.";
    return;
  }
  const name = document.querySelector("#fullName").value.trim();
  success.textContent = `Thanks, ${name}! Your registration details are ready to submit.`;
});

updateSummary();
