const videos = [
  {
    id: 5717,
    created_at: '2023-02-24 06:26:33.130898+00',
    title: "Nick Grant - '96 Bulls",
    username: 'DunnD',
    url: 'https://www.youtube.com/watch?v=qRHCMshfne4&list=LL&index=1173',
    video_id: 'qRHCMshfne4',
    channel_id: 1049841438919246000,
    message_timestamp: '2023-01-10T11:28:28.464Z',
    thumb: 'https://img.youtube.com/vi/qRHCMshfne4/default.jpg',
  },
  // Add more fallback videos here if needed
];

let uniqueVideos;

try {
  const response = await fetch('http://localhost:5000/api/urls/allmusic');
  const { data } = await response.json();
  data.sort(function (a, b) {
    return new Date(b.message_timestamp) - new Date(a.message_timestamp);
  });

  let strippedVideo = [];
  let seen = new Set();

  for (let object of data) {
    if (!seen.has(object.video_id)) {
      strippedVideo.push(object);
      seen.add(object.video_id);
    }
  }

  uniqueVideos = strippedVideo;
} catch (error) {
  console.error(`An error occurred while fetching the videos: ${error}`);
  uniqueVideos = videos;
}

export default uniqueVideos;
