localStorage.clear()

const employees = [
    {
      "id": 1,
      "firstName": "Aarav",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Project kickoff",
          "description": "Initiate the new project setup and assign roles.",
          "date": "2024-11-05",
          "category": "Project Management"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Database backup",
          "description": "Perform a full backup of the project database.",
          "date": "2024-11-02",
          "category": "Database Management"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "Client discussion",
          "description": "Coordinate with the client to review feedback.",
          "date": "2024-11-07",
          "category": "Client Communication"
        }
      ],
      "taskCount": {
        "active": 2,
        "new_task": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstName": "Ishita",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Feature research",
          "description": "Research potential features for the next release.",
          "date": "2024-11-06",
          "category": "Research"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Technical documentation",
          "description": "Update documentation for the recent code changes.",
          "date": "2024-11-01",
          "category": "Documentation"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Frontend bug fixing",
          "description": "Address UI bugs reported in the last sprint.",
          "date": "2024-11-08",
          "category": "Development"
        }
      ],
      "taskCount": {
        "active": 2,
        "new_task": 2,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 3,
      "firstName": "Karan",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": true,
          "title": "Data security audit",
          "description": "Conduct security checks for data integrity.",
          "date": "2024-11-04",
          "category": "Security"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Database query optimization",
          "description": "Enhance database queries for improved speed.",
          "date": "2024-11-09",
          "category": "Database"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Client presentation",
          "description": "Present final project results to the client.",
          "date": "2024-11-03",
          "category": "Client Communication"
        }
      ],
      "taskCount": {
        "active": 1,
        "new_task": 2,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 4,
      "firstName": "Meera",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "UI redesign",
          "description": "Implement design updates based on client feedback.",
          "date": "2024-11-10",
          "category": "Design"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Code review session",
          "description": "Review recent code submissions for errors.",
          "date": "2024-11-02",
          "category": "Development"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "Test case development",
          "description": "Create test cases for the latest features.",
          "date": "2024-11-07",
          "category": "Quality Assurance"
        }
      ],
      "taskCount": {
        "active": 2,
        "new_task": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 5,
      "firstName": "Vikram",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": true,
          "title": "Deployment configuration",
          "description": "Set up deployment environments for the project.",
          "date": "2024-11-05",
          "category": "Deployment"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "User testing sessions",
          "description": "Conduct user testing and gather feedback.",
          "date": "2024-11-08",
          "category": "Quality Assurance"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Third-party API integration",
          "description": "Integrate APIs for additional functionality.",
          "date": "2024-11-09",
          "category": "Development"
        }
      ],
      "taskCount": {
        "active": 2,
        "new_task": 2,
        "completed": 0,
        "failed": 1
      }
    }
];


const admin = [
    {
        "admin": {
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
      }      
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin)) //forms data into string
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees')) //parses the values to the array form
    const admin = JSON.parse(localStorage.getItem('admin')) //parses the values to the array form
    // console.log(employees,admin)
    return { employees, admin };
}