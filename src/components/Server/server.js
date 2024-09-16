const express = require("express");
const { google } = require("googleapis");
const OAuth2Data = require("./credentials.json"); // Add the path to your OAuth 2.0 credentials

const app = express();
const PORT = 3000;

const CLIENT_ID = OAuth2Data.web.client_id;
const CLIENT_SECRET = OAuth2Data.web.client_secret;
const REDIRECT_URI = OAuth2Data.web.redirect_uris[0];

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const SCOPES = ["https://www.googleapis.com/auth/blogger"];

app.get("/auth", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  res.redirect(url);
});

app.get("/oauth2callback", async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  res.send("Authentication successful! You can now use the Blogger API.");
});

app.get("/blogs", async (req, res) => {
  oauth2Client.setCredentials({
    refresh_token: "your-refresh-token",
  });

  const blogger = google.blogger({ version: "v3", auth: oauth2Client });
  const response = await blogger.blogs.get({
    blogId: "YOUR_BLOG_ID",
  });
  res.json(response.data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
