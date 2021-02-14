const { Post } = require('../../database/models');

const { AuthenticationError } = require('apollo-server-express');

module.exports = {
  Mutation: {
    async createPost(_, { content, title }, { user = null }) {
      if (!user) {
        throw new AuthenticationError('You must login to create a post');
      }
      return Post.create({
        userId: user.id,
        content,
        title,
      });
    },
  },
};
