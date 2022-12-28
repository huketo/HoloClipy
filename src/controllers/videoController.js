const fakeUser = {
  username: "huketo",
  loggedIn: true,
};

const videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 3,
    comments: 7,
    createdAt: "8 minutes ago",
    views: 129,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 4,
    comments: 1,
    createdAt: "13 minutes ago",
    views: 78,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", fakeUser, videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watchching ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editting ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;

  const newVideo = {
    title: title,
    rating: 0,
    comments: 0,
    createdAt: "0 minutes ago",
    views: 1,
    id: videos.length + 1,
  };
  videos.push(newVideo);

  return res.redirect("/");
};
