let uniqueVideos;

try {
  const response = await fetch('http://localhost:5000/api/urls/allregga');
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
