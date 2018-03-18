module.exports = `
  type User {
    id: ID!
    inserted_at: String!
    updated_at: String!
  }

  type Query {
    viewer(token: String!): User
  }

  type AuthSession {
    user: User!
    accessToken: AccessToken!
  }

  type AccessToken {
    token: String!
    expires_at: String!
    valid: Boolean!
    inserted_at: String!
    updated_at: String!
  }

  type Mutation {
    createUser(password: String!): User
    authenticate(id: String!, password: String!): AuthSession
  }
`;
