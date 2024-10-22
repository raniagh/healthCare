
# Healthcare Management System

![License](https://img.shields.io/badge/license-MIT-green)

## Description
This is a healthcare management web application built using **Next.js** with **TypeScript**, **Tailwind CSS** for styling, **shadcn** components, **react-hook-form** and **zod** for form handling and validation, **AppWrite** for file storage, and **Twilio** for SMS notifications.

## Features

- **Patient registration:** patients can register themselves in the system with personal and medical details
- **Appointment scheduling:** patients can book appointments with available doctors.
- **Implement complex forms:** built with react-hook-form and zod to handle validation and submission of detailed patient forms
- **SMS notification:** integrated with Twilio to send SMS notifications for appointment confirmations, reminders, and cancellations.
- **Admin Dashboard:** admin can view a list of appointments, schedule new appointments, and cancel pending appointments.
- **SEO:** includes metadata and Search Engine Optimization features.

## [Live Demo](https://healthcare-app-lac.vercel.app)
![img1](https://github.com/user-attachments/assets/e85c9f53-156a-4dc1-b717-9a0fe68aca34) ![img4](https://github.com/user-attachments/assets/dd446fc1-d257-499a-a513-877e38878d9a) ![img5](https://github.com/user-attachments/assets/f9e009e7-9b79-45bc-bd12-7b005ce983c5) ![img9](https://github.com/user-attachments/assets/01c4fad0-2c84-448e-b284-95acce05bf1b)


## What you need to run this code
<ul>
  <li>Node (18.16.1)</li>
  <li>NPM (9.7.4) or Yarn (1.22.4)</li>
  <li>AppWrite account</li>
  <li>Twilio account</li>
</ul>

## How to run this code

1. Clone this repository
2. Install dependencies:
   ```
   npm run dev
   # or
   yarn dev
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root of the project and add the following environment variables:
```
PROJECT_ID=your-appwrite-project-id
API_KEY=your-appwrite-project-api-key
DATABASE_ID=your-database-id
PATIENT_COLLECTION_ID=your-patient-collection-id
DOCTOR_COLLECTION_ID=your-doctor-collection-id
APPOINTMENT_COLLECTION_ID=your-appointment-collection-id
NEXT_PUBLIC_BUCKET_ID=your-bucket-id
NEXT_PUBLIC_ENDPOINT=your-appwrite-endpoint
NEXT_PUBLIC_ADMIN_PASSKEY=your-admin-passkey
SENTRY_AUTH_TOKEN=your-sentry-auth-token
```
4. Run the development server:
  ```
   npm run dev
   # or
   yarn dev
   ```
Open http://localhost:3000 to view the application.

## Technologies Used
- **Next.js**: a React framework for building fast web applications.
- **TypeScript**: a strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: an utility-first CSS framework for styling.
- **Shadcn**: pre-built UI components for seamless integration.
- **react-hook-form**: efficient, flexible form handling for React.
- **zod**: TypeScript-first schema declaration and validation.
- **AppWrite**: backend-as-a-service for file storage and authentification.
- **Twilio**: communication API for sending SMS notifications.
  
## Badges
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## License
This project is open-sourced under the MIT license.
## Contact
For any queries or suggestions, feel free to reach me out at ghzaielrania@gmail.com

