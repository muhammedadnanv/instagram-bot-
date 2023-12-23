const { IgApiClient } = require('instagram-private-api');

const username = 'your_instagram_username';
const password = 'your_instagram_password';

const ig = new IgApiClient();

// Function to log in to Instagram
async function login() {
  ig.state.generateDevice(username);
  await ig.account.login(username, password);
  console.log('Logged in successfully!');
}

// Function to like a post
async function likePost(mediaId) {
  try {
    await ig.media.like({
      mediaId,
    });
    console.log('Post liked successfully!');
  } catch (error) {
    console.error('Error liking post:', error);
  }
}

// Log in and like a post
login().then(() => {
  // Replace 'post_media_id' with the media ID of the post you want to like
  const postMediaId = 'post_media_id';
  likePost(postMediaId);
});
