const courses = {
  "web-dev": {
    title: "Web Development for Beginners",
    description: "Learn HTML, CSS, and JavaScript from scratch.",
    videoUrls: [
      "https://www.youtube.com/embed/Z1Yd7upQsXY",
      "https://www.youtube.com/embed/UB1O30fR-EE"  
    ]
  },
  "data-science": {
    title: "Introduction to Data Science",
    description: "Work with Python, statistics, and data analysis.",
    videoUrls: [
      "https://www.youtube.com/embed/X3paOmcrTjQ",   
      "https://www.youtube.com/embed/6wREhdm6ju4"    
    ]
  },

  "full-stack": {
    title: "Full Stack Development",
    description: "Build frontend and backend apps using React and Node.js.",
    videoUrls: [
      "https://www.youtube.com/embed/nu_pCVPKzTk", 
      "https://www.youtube.com/embed/bMknfKXIFA8"  
    ]
  },
  "cloud": {
    title: "Cloud Computing Essentials",
    description: "Get started with AWS, Azure, and GCP basics.",
    videoUrls: [
      "https://www.youtube.com/embed/M988_fsOSWo", 
      "https://www.youtube.com/embed/2LaAJq1lB1Q"  
    ]
  },
  "Analytics": {
    title: "Data Analytics with Power BI",
    description: "Visualize insights using Excel, Power BI, and dashboards.",
    videoUrls: [
      "https://www.youtube.com/embed/AGrl‑H87pRU",   
      "https://www.youtube.com/embed/FwjaHCVNBWA"    
    ]
  },
   "uiux": {
    title: "UI/UX Design Fundamentals",
    description: "Master user‑centric design tools like Figma and Adobe XD.",
    videoUrls: [
      "https://www.youtube.com/embed/BU_afT-aIn0",   
      "https://www.youtube.com/embed/cvm_ECH94x4"    
    ]
  },
   "cyber": {
    title: "Cybersecurity Basics",
    description: "Learn about digital threats, hacking, and protection methods.",
    videoUrls: [
      "https://www.youtube.com/embed/inWWhr5tnEA",   
      "https://www.youtube.com/embed/jXHBshrAmSw"    
    ]
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    description: "Understand algorithms, neural networks, and automation.",
    videoUrls: [
      "https://www.youtube.com/embed/GwIo3gDZCVQ", 
      "https://www.youtube.com/embed/i_LwzRVP7bg"  
    ]
  },
  "mobile": {
    title: "Mobile App Development",
    description: "Develop Android/iOS apps using Flutter or React Native.",
    videoUrls: [
      "https://www.youtube.com/embed/fq4N0hgOWzU", 
      "https://www.youtube.com/embed/Hf4MJH0jDb4"  
    ]
  }
};


function viewCourseDetails(event, courseId) {
  event.preventDefault();
  localStorage.setItem("selectedCourse", courseId);
  window.location.href = "course-detail.html";
}


document.addEventListener("DOMContentLoaded", () => {
  const courseId = localStorage.getItem("selectedCourse");
  const course = courses[courseId];

  if (course && document.getElementById("courseDetail")) {
    document.getElementById("courseTitle").textContent = course.title;
    document.getElementById("courseDescription").textContent = course.description;

    
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = ""; 

    course.videoUrls.forEach((url, index) => {
      const iframe = document.createElement("iframe");
      iframe.width = "100%";
      iframe.height = "400";
      iframe.src = url;
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.title = `Video ${index + 1}`;
      iframe.style.marginBottom = "20px";
      videoContainer.appendChild(iframe);
    });
  }
});
