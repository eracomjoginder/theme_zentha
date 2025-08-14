# Zentha Gaming Ecosystem Website

A fully responsive, dark modern gaming website built with Next.js 15 and Tailwind CSS 4. Features stunning animations, gaming characters, and a crypto-themed design.

## 🎮 Features

- **Dark Modern Theme**: Sleek, futuristic design with neon accents
- **Full Page Animations**: Smooth transitions and interactive elements
- **Gaming Characters**: Animated characters with glowing effects
- **Responsive Design**: Optimized for all device sizes
- **Interactive Navigation**: Smooth section transitions
- **Background Effects**: Animated particles and grid patterns
- **Crypto Integration**: Gaming ecosystem with blockchain concepts

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React 19** - Latest React features
- **CSS Animations** - Custom keyframe animations

## 🎨 Design Elements

### Color Scheme
- Primary Blue: `#00d4ff`
- Primary Purple: `#8b5cf6`
- Primary Pink: `#ec4899`
- Dark Background: `#0a0a0a`
- Card Background: `rgba(15, 15, 15, 0.8)`

### Sections
1. **Hero Section**: Introduction to Zentha with gaming character and energy sword
2. **About Section**: Cyberpunk character with Zentha ecosystem information
3. **Referral Section**: Reward system with trophy and gaming character

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zentha_theme
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎭 Animations

- **Floating Elements**: Smooth floating animations for characters and objects
- **Glow Effects**: Pulsing glow animations for interactive elements
- **Slide Transitions**: Smooth section transitions with slide effects
- **Particle Systems**: Animated background particles
- **Grid Movement**: Animated background grid patterns

## 🎮 Gaming Characters

### Hero Character
- Hooded warrior with glowing eyes
- Energy sword with lightning effects
- Dark armor with neon accents

### About Character
- Cyberpunk character with implants
- Glowing visor and circuit lines
- Futuristic armor design

### Referral Character
- Orange visor character
- Circuit-lined body
- Floating tech elements

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── HeroSection.js
│   │   ├── AboutSection.js
│   │   ├── ReferralSection.js
│   │   ├── Navigation.js
│   │   └── BackgroundEffects.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── tailwind.config.js
└── package.json
```

## 🎨 Customization

### Colors
Update the CSS variables in `globals.css` to change the color scheme:

```css
:root {
  --primary-blue: #00d4ff;
  --primary-purple: #8b5cf6;
  --primary-pink: #ec4899;
}
```

### Animations
Modify animation timings and effects in `tailwind.config.js`:

```javascript
animation: {
  'float': 'float 6s ease-in-out infinite',
  'glow': 'glow 3s ease-in-out infinite',
}
```

## 🌟 Features

- **Interactive Navigation**: Smooth section transitions
- **Animated Backgrounds**: Particle systems and grid patterns
- **Responsive Layout**: Mobile-first design approach
- **Performance Optimized**: Efficient animations and transitions
- **Modern UI/UX**: Gaming-focused interface design

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and Tailwind CSS
