const faker = require("faker");

function generateBlog() {
  const title = faker.random.words();
  const id = faker.random.uuid();
  const uri = title.split(" ").join("-") + "-" + id;
  return {
    body: JSON.stringify({
      ops: [
        {
          attributes: {align: "justify"},
          insert: faker.lorem.paragraph(),
        },
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: faker.lorem.paragraph()},
        {
          attributes: {align: "justify"},
          insert: "\n",
        },
        {insert: "\n"},
      ],
    }),
    createdAt: faker.date.past().toISOString(),
    isAnonymous: false,
    isPublished: false,
    publishedAt: faker.date.past().toISOString(),
    title: title,
    titleImage: faker.image.image(),
    updatedAt: faker.date.past().toISOString(),
    uri: uri,
    userId: faker.random.uuid(),
    id: id,
  };
}

const user = {
  id: "123093873448374",
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  admin: false,
  blogIds: [],
};

module.exports = () => {
  const data = {blog: [], user: []};
  for (let i = 0; i < 20; i++) {
    const blog = generateBlog();
    user.blogIds.push(blog.id);
    data.blog.push(blog);
  }

  data.user.push(user);
  return data;
};
