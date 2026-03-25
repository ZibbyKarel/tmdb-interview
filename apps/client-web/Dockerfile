FROM node:22-bookworm-slim

WORKDIR /workspace

COPY package.json package-lock.json ./
RUN npm install

COPY apps ./apps
COPY libs ./libs
COPY .storybook ./.storybook
COPY jest.config.ts jest.setup.ts nx.json tsconfig.base.json tsconfig.json postcss.config.cjs orval.config.ts api-doc.json ./

RUN npx playwright install --with-deps chromium
RUN npm run verify:docker
RUN npm run build:client-web

EXPOSE 4200

CMD ["npm", "run", "start"]
