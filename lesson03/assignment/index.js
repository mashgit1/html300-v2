// Create the Employee class constructor
        class Employee {
            constructor(name, jobTitle, company, experience, school, major, email, linkedInUrl, codeLanguages) {
                this.name = name;
                this.jobTitle = jobTitle;
                this.company = company;
                this.experience = experience;
                this.school = school;
                this.major = major;
                this.email = email;
                this.linkedInUrl = linkedInUrl;
                this.codeLanguages = codeLanguages;
            }

            // Method to create HTML element for employee card
            createCardElement() {
                const card = document.createElement('div');
                card.classList.add('employee-card');

                card.innerHTML = `
                    <div class="employee-info">
                        <div class="employee-header">
                            <img src="img/headshot.jpg" alt="${this.name}">
                            <div class="employee-info-text">
                                <h2>${this.name}</h2>
                                <em>${this.jobTitle}</em>
                            </div>
                        </div>
                        <div class="employee-details">
                            <div class="gray-background">
                                <p><strong>Company:</strong> ${this.company}</p>
                                <p><strong>Experience:</strong> ${this.experience}</p>
                                <p><strong>School:</strong> ${this.school}</p>
                                <p><strong>Major:</strong> ${this.major}</p>
                                <p><strong>Email:</strong> ${this.email}</p>
                                <p class="logo-text"><img src="img/linkedin.svg" alt="LinkedIn logo">${this.linkedInUrl}</p>
                            </div>
                        </div>
                    </div>
                `;

                return card;
            }
        }

        // Function to fetch and process JSON data
        function fetchData() {
            fetch('data.json')
                .then(response => response.json())
                .then(processEmployees)
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        // Function to process employee data
        function processEmployees(employees) {
            const employeeList = document.getElementById('employee-list');
            employees.forEach(employeeData => {
                const employee = new Employee(
                    employeeData.name,
                    employeeData.jobTitle,
                    employeeData.company,
                    employeeData.experience,
                    employeeData.school,
                    employeeData.major,
                    employeeData.email,
                    employeeData.linkedInUrl,
                    employeeData.codeLanguages
                );
                employeeList.appendChild(employee.createCardElement()); // Append employee card element to employee list
            });
        }

        // Call the fetchData function to initiate the data loading process
        fetchData();