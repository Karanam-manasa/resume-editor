A web-based editor that lets users

1. **Upload** a `.pdf` or `.docx` resume  
2. **Edit** or rearrange sections (name, summary, experience, education, skills, etc.)  
3. **Save** the entire resume (as JSON) to the backend  
4. **Download** the finished resume locally as a `.json` file

## 📁 Project Structure
![image](https://github.com/user-attachments/assets/53d3e1c7-bf90-47a8-a587-ab4d42f4f811)

## 🚀 Features

### Frontend (React.js)
- Upload `.pdf` or `.docx` resume (simulated parsing using dummy content)
- Edit sections: Name, Experience, Education, Skills
- Add or remove entries dynamically
- Save resume data to the backend
- Download the resume as a `.json` file

### Backend (FastAPI)
- `POST /ai-enhance`: Returns a mocked improved version of the section content
- `POST /save-resume`: Saves the resume JSON (stored in memory or file)

## How to Run:
Download the repo git clone https://github.com/Karanam-manasa/resume-editor
Change the directory cd Resume Editer
Install the dependency npm install
Start a development server npm run dev
Open your browser and visit http://localhost:3000
