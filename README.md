# Okizoo Discord Music App

A basic module for building web applications with [Astro](https://astro.js.org/).

## Getting Started

1. Install the dependencies:


2. Run the development server:


3. Build the app for production:



## Scripts

The following scripts are available in this module:

- `dev`: Runs the development server.
- `start`: Runs the development server.
- `build`: Builds the production assets.
- `preview`: Previews the production build.
- `astro`: Runs the Astro CLI.

## Dependencies

This module depends on the following packages:

- `@astro-community/astro-embed-youtube`: A package for embedding YouTube videos in Astro projects.
- `@astrojs/netlify`: A package for working with Netlify in Astro projects.
- `@astrojs/tailwind`: A package for using Tailwind CSS in Astro projects.
- `astro`: The Astro CLI.
- `tailwindcss`: The Tailwind CSS library.


This code is a astrojs app that pulls YouTube URLs from Discord messages and catalogs them on a website. The main layout of the website is defined in the Layout component imported from '../layouts/Layout.astro'. The data for the YouTube videos to be displayed on the website is stored in galleryData which is imported from '../../public/galleryData'. The app uses the YouTube component from '@astro-community/astro-embed-youtube' to embed the videos on the website.

The code also imports the Discord.js library and creates a new Discord client. The client is configured to use several intents for accessing information from Discord. The Discord bot token is stored in the environment variable DISCORD_BOT_TOKEN.

The code also uses Supabase to retrieve the music data from a database. The Supabase client is created with the public URL and service role key stored in the environment variables PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY. The code then fetches all the data from the "music" table in the database and orders it by the "id" column.

The code then logs in to the Discord client using the token and fetches all messages from a specified text channel. The messages are filtered to find those that contain the string "youtu" and YouTube URLs are extracted from these messages. The extracted URLs are logged to the console.

Finally, the code defines the main layout of the website using the Layout component and embeds the videos using the YouTube component. The videos are displayed in a grid layout with information about the video and its creator displayed below each video.


- Fixed issues with supabase
- Fixed Youtube API

