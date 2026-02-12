# 🌾 Crop Price Predictor

A modern, responsive web application for predicting crop prices using Random Forest machine learning algorithm.

**B.Tech CSE Capstone Project**

## ✨ Features

- 🎨 **Modern UI/UX** - Glassmorphism design with smooth animations
- 📱 **Mobile First** - Fully responsive across all devices
- 🎬 **Scroll Animations** - Apple-like frame-by-frame hero animation
- 🌿 **Crop Database** - Comprehensive information on supported crops
- 📊 **Prediction Interface** - Ready for ML model integration
- 👥 **Team Showcase** - Animated team member slider

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State**: React Hooks (minimal local state)
- **Animations**: CSS + Intersection Observer
- **Deployment**: Docker + Nginx

## 📁 Project Structure

```
client/
├── public/
│   ├── sequence/          # Frame animation images
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollFrameAnimation.jsx
│   │   ├── TeamSlider.jsx
│   │   ├── CropCard.jsx
│   │   ├── ScrollAnimations.jsx
│   │   └── index.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Crops.jsx
│   │   ├── Prediction.jsx
│   │   └── index.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── Dockerfile
├── nginx.conf
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
```

### Docker Deployment

```bash
# Build image
docker build -t crop-predictor .

# Run container
docker run -p 80:80 crop-predictor
```

## 📝 Pages

### Home (`/`)
- Scroll-based frame animation hero section
- Project overview with problem statement, objective, approach, outcome
- Statistics and key features
- Technology stack showcase
- Team slider

### Crops (`/crops`)
- Filterable grid of supported crops
- Hover animations on crop cards
- Detailed crop information
- Links to prediction page

### Prediction (`/prediction`)
- Placeholder UI for future ML integration
- Disabled form fields (crop, state, market, month)
- Skeleton loaders showing expected results
- Info about model training progress

## 🎨 Design System

### Colors
- **Primary**: Green (#22c55e - #14532d)
- **Background**: Gray gradients (#f8fafc - #e2e8f0)
- **Glass**: rgba(255, 255, 255, 0.15-0.7)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- Glassmorphism cards with backdrop-filter
- Smooth hover animations
- Scroll-triggered fade animations
- Apple-like motion design

## 🖼️ Frame Animation Setup

Place your frame sequence in `/public/sequence/`:
```
frame_0001.png
frame_0002.png
...
frame_0120.png
```

The animation will automatically generate placeholder frames if images are missing.

## 📱 Responsive Breakpoints

- **Mobile**: 360px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large**: 1280px+

## 🔮 Future Enhancements

- [ ] Backend API integration (Express.js)
- [ ] MongoDB database connection
- [ ] Random Forest ML model integration
- [ ] User authentication
- [ ] Historical price charts
- [ ] Real-time market data

## 👥 Team

- **Rahul Sharma** - ML Engineer
- **Priya Patel** - Frontend Developer  
- **Amit Kumar** - Backend Developer
- **Sneha Reddy** - Data Analyst

## 📄 License

This project is part of B.Tech CSE Capstone requirements.

---

Built with ❤️ using MERN Stack & Docker
