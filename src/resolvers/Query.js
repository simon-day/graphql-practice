const Query = {
  users(parent, args, { prisma }, info) {
    const opArgs = {};

    if (args.query) {
      opArgs.where = {
        OR: [
          {
            name_contains: args.query,
          },
          {
            email_contains: args.query,
          },
        ],
      };
    }

    return prisma.query.users(opArgs, info);
  },
  posts(parent, args, { prisma }, info) {
    const opArgs = {};

    if (args.query) {
      opArgs.where = {
        OR: [
          {
            title_contains: args.query,
          },
          {
            body_contains: args.query,
          },
        ],
      };
    }

    return prisma.query.posts(opArgs, info);
  },
  comments(parent, args, { prisma }, info) {
    const opArgs = {};

    if (args.query) {
      opArgs.where = {
        OR: [
          {
            text_contains: args.query,
          },
        ],
      };
    }

    return prisma.query.comments(opArgs, info);
  },
  me() {
    return {
      id: 'abc123',
      name: 'Tom',
      email: 'tom@example.com',
      age: 28,
    };
  },
  post() {
    return {
      id: '1234',
      title: 'GraphQL',
      body: '',
      published: false,
    };
  },
};

export { Query as default };