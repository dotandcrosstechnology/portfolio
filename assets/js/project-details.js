document.addEventListener('DOMContentLoaded', function() {
    const projectId = localStorage.getItem('selectedProjectId');
    const projectDetailsContainer = document.getElementById('projectDetailsContainer');

    if (projectId) {
        const project = portfolioData.find(p => p.id === parseInt(projectId));
        
        if (project) {
            projectDetailsContainer.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="${project.imageUrl}" class="img-fluid rounded" alt="${project.title}">
                    </div>
                    <div class="col-md-6">
                        <h1 class="display-4">${project.title}</h1>
                        <p class="lead">${project.shortDesc}</p>
                        
                        <div class="technologies mb-3">
                            ${project.technologies.map(tech => 
                                `<span class="tech-badge">${tech}</span>`
                            ).join('')}
                        </div>

                        <h3>Overview</h3>
                        <p>${project.overview}</p>

                        <h3>Features</h3>
                        <ul>
                            ${project.features.map(feature => 
                                `<li><strong>${feature.title}:</strong> ${feature.description}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }
    }
});