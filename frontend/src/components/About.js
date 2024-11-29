// src/components/About.js
import React from 'react';

const About = () => (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }} id='todoabout'>
        <h2>About Us</h2>
        <h3>Title: About ToDo App</h3>
        <p><strong>Introduction</strong></p>
        <p><strong>The ToDo App is a user-friendly and efficient application designed to help you manage tasks effortlessly. Whether for personal use, work, or study, this app ensures you can keep track of your tasks in an organized and productive manner.</strong></p>

        <hr></hr>
        <p>Welcome to the ToDo App—a simple and efficient task management tool designed to help users stay organized. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, this app allows users to add, mark, and delete tasks effortlessly, all while ensuring their data is securely stored in a robust database.</p>

        <h3>Purpose</h3>
        <p><strong>Our purpose is to simplify task management for everyone. This app allows users to add, check off, and delete tasks easily, helping to streamline your day-to-day responsibilities and focus on what matters most.</strong></p>
        
        <h3>Key Features</h3>
        <ul>
            <li><strong>Add Tasks: </strong> Quickly add tasks with a click, including a timestamp to track when each task was created.</li>
            <li><strong>Mark as Completed: </strong> Stay organized by marking tasks as completed, helping you see your progress.</li>
            <li><strong>Delete Tasks:</strong>Clear tasks you no longer need, keeping your list relevant and manageable.</li>
            <li><strong>Data Persistence:</strong>All tasks are saved securely, so your list is always accessible.</li>
        </ul>

        <h3>Technologies Used</h3>
        <p><strong>The ToDo App is built using the modern MERN Stack (MongoDB, Express.js, React.js, Node.js), leveraging the best in JavaScript development to ensure speed, flexibility, and reliability.</strong></p>
         <h3>Meet the Developer</h3>
         <p><strong>Created by [Hatishwar], a passionate MERN Stack developer with a background in Civil Engineering. Driven by a love for building solutions that simplify everyday challenges, [Hatishwar] strives to bring practical, efficient web applications to life.</strong></p>
         <h3>Future Plans</h3>
         <p><strong>We’re committed to continuous improvement. Future updates will bring new features like task categorization, reminder notifications, and more customization options. Stay tuned for a ToDo App that evolves with your needs!</strong></p>
    </div>
);

export default About;
