# Zoo-tube Frontend

## Overview
Zoo-tube is a modern music discovery platform that transforms Discord music sharing into an interactive streaming experience. Built with Astro.js, it offers a smooth, responsive interface for discovering and sharing music across different genres.

## ✨ Features
- Genre-based music discovery
- User profiles with shared tracks
- Smooth carousel navigation
- Responsive design
- Authentication with multiple providers
- Real-time music player
- Like system
- Upcoming: Live radio and chat features

## 🛠 Tech Stack
- **Astro.js** - Web framework
- **React** - Interactive components
- **Tailwind CSS** - Styling
- **Supabase** - Database services
- **Auth0** - Authentication
- **SwiperJS** - Carousel functionality
- **Node.JS** - Runtime environment

## 📋 Prerequisites
- Node.js (v16 or higher)
- npm/yarn
- Supabase account
- Auth0 account

## 🔧 Environment Variables
Create a `.env` file:
```env
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/supa-two.git
cd supa-two
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

## 📁 Project Structure
```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── pages/         # Route components
├── lib/           # Utilities and config
├── styles/        # Global styles
└── scripts/       # Client-side scripts
```

## 🎨 Key Components

### Genre Sliders
Smooth, responsive carousels for genre navigation using SwiperJS:
```javascript
const swiper = new Swiper('.genre-slider', {
  slidesPerView: 2.3,
  spaceBetween: 12,
  freeMode: true,
  // Responsive breakpoints...
});
```

### Dynamic User Pages
Individual pages for each user showing their shared tracks:
```typescript
// [username].astro
export function getStaticPaths() {
  return [
    { params: { username: 'user1' } },
    // ...more users
  ];
}
```

## 🔄 Upcoming Features

### Code Refactoring
 - organizing and creating more components
 - efficientcy 

### Radio Feature
- Synchronized video playback
- Live chat integration
- Multiple genre channels
- Real-time user presence

### Enhanced User Dashboard
- Liked tracks collection
- Sharing statistics
- Activity feed
- Custom playlists

## 📱 Responsive Design
- Mobile-first approach
- Smooth transitions
- Optimized images
- Adaptive layouts

## 🤝 Contributing
1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 🔍 Scripts
```json
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "astro": "astro"
}
```

## 📚 Documentation
- [Astro Documentation](https://docs.astro.build)
- [Supabase Documentation](https://supabase.io/docs)
- [Auth0 Documentation](https://auth0.com/docs)

## 🎯 Development Status
- ✅ Basic features implemented
- ✅ Authentication system
- ✅ Genre navigation
- ✅ User profiles
- 🚧 Like system (In Progress)
- 🚧 Radio feature (Planned)
- 🚧 Chat system (Planned)

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact
Tek Jones - tekthree@gmail.com

Project Link: [https://github.com/Tekthree/supa-two](https://github.com/Tekthree/supa-two)

## 🙏 Acknowledgments
- Discord communities for inspiration
- Astro.js team for the amazing framework
- Supabase team for backend services
- Auth0 team for authentication services