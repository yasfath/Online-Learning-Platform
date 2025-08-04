// progress.js
function updateProgress(courseId, value) {
  let progress = JSON.parse(localStorage.getItem("courseProgress")) || {};
  progress[courseId] = value;
  localStorage.setItem("courseProgress", JSON.stringify(progress));
}

function getProgress(courseId) {
  let progress = JSON.parse(localStorage.getItem("courseProgress")) || {};
  return progress[courseId] || 0;
}

function showProgressBar(courseId, progressBarElement) {
  const value = getProgress(courseId);
  progressBarElement.style.width = `${value}%`;
  progressBarElement.innerText = `${value}%`;
}
