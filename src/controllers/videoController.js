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
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.render("search");
export const upload = (req, res) => res.render("upload");
export const deleteVideo = (req, res) => res.render("delete_video");
