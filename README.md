# 🎬 YouTube Video Player – React + TypeScript

A simple, clean, and production-ready YouTube Video Player application built for the **Tern Frontend Coding Test**.
The app lets users input a YouTube URL, automatically plays the video, persists playback position using timestamps, and includes a fun GIF page.
---
## 🚀 Objective
 Build a web app with:
 
 - A YouTube Video Player that:
    - Accepts a YouTube video URL
    - Autoplays the video
    - Allows the user to edit the URL

 - Three pages:
  
  - **Home** : URL input form

  - **Video Page** : Autoplay + resume logic

  - **GIF Page** : Funny GIF and Back button navigating to Video page


---
## 🖥️ Tech Stack

- 🌀 **React + TypeScript** – Modern frontend framework with static typing
- 🧭 **React Router** – Navigation and routing
- 🎛 **Lucide-React Icons** – Ready-to-use icon components
- 🌬 **Tailwind CSS** – Utility-first styling framework
- 🧩 **Clsx** – Conditional and dynamic class name management

---

## 🧪 Environment Details

| Tool    | Version      |
| ------- | ------------ |
| Node.js | v20.19.0     |
| OS      | Ubuntu 23.04 |

---

## 🌐 Features

 - **▶️ YouTube Video Playback** – Enter a YouTube URL on the Home page to navigate to the Video page and start playing instantly.

 - **⏱️ Smart Playback Resume** – The app remembers the exact video position based on real elapsed time.

     - Video timestamp is saved at 12:00 PM.

     - User leaves the page at 12:03 PM.

     - User returns at 12:10 PM.

     - Video automatically resumes from the correct position, accounting for the time passed while away.

 - **🔄 Persistent Video State Across Pages** – Whether you go to the GIF page or back to Home, the video continues from the expected timestamp when you return to the Video page.

 - **🎬 GIF Page Support** – Dedicated GIF page that can be accessed anytime without interrupting the saved video state.

 - **📱 Responsive & Smooth Navigation**  – Seamlessly switch between Home, Video, and GIF pages with a mobile-friendly interface.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── VideoPlayerForm/
│   ├── VideoPlayer/
│   ├── Gif/
│   ├── Navbar/
│   └── index.ts              
│
├── pages/
│   ├── Home/
│   ├── Video/
│   └── Gif/
│
├── utils/
│   ├── validateYoutubeUrl.ts
│   ├── extractVideoId.ts
│   └── constants.ts            
│
├── App.tsx
└── main.tsx

```

---

## 🚀 Run the Application

1️⃣ Install Dependencies

```bash
pnpm install
```

2️⃣ Start development server

```bash
pnpm run dev
```

App will be running at:  
👉 Frontend: `http://localhost:5173`

---

## App Overview

![Home Page](/public/HomePage.png)
![Video Page](/public/VideoPage.png)
![GIF Page](/public/GifPage.png)

## Working Interactive Demo

![App Demo](/public/VideoPlayer.gif)