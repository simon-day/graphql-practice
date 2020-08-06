import { Prisma } from 'prisma-binding';
import ENV from '../ENV';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: ENV.prismaSecret,
});

export { prisma as default };
