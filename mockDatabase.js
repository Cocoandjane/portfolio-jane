class Database {
  projects = [
    {
      id: 1,
      name: "vanmarket_idsp",
      url:"https://vanmarket.herokuapp.com",
      images: ["https://imgur.com/01oWXvB.jpg", "https://imgur.com/pVPp0Bv.jpg", "https://imgur.com/uCcBfcu.jpg", "https://imgur.com/01oWXvB.jpg", "https://imgur.com/o3s377M.jpg"],
      completionDate: "June-2022",
      description: "This was my first interdisciplinary student projects (IDSP) project. It is an online-marketing app. In this app, you can browse people's listed products by swiping the cards and save the products to your wishlist, post your own products and edit or delete your posts, and create and edit your profile. With my partner Murad, We followed Agile Methodoloty buiding this app.", 
      partner:"Murad Qumizakis"
    },

    {
      id: 2,
      name: "moodjorts",
      url:"https://moodjorts-jane.herokuapp.com",
      images:["https://i.imgur.com/rq6DbD8.png"],
      completionDate: "July-2022",
      description: "This is one of the asignment we got in our semister two. During the semister, I only comepleted it to the pass point, but I came back to it during my summer vacation and had it completed about 80%. In this app, you can add images with URLs, make the images bigger/smaller, move the images left/right, and delete them. You can also undo/redo your actions except for dragging images. Yes, you can drag the images around as well."
    },

    {
      id: 3,
      name: "Picnic Event planing",
      url:"https://picnic-jane.herokuapp.com",
      images: ["https://i.imgur.com/clsb1Lg.png"],
      completionDate: "July-2022",
      description: "This app was build to make AJAX calls from front-end to back-end back and forth. In this app, you can see weather for the next seven days, you can see people attending event on different days, and you can vote yes or no for events.  ",
    }
  ]

  getAllProjects() {
    return this.projects
  }

  getProject(id) {
  for (let project of this.projects) {
    if(project.id === id) {
      return project
    }
  }
  }
}


module.exports = Database;
