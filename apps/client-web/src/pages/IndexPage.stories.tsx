import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  movieTopRatedListMockPage1,
  movieTopRatedListMockPage2,
} from '../../../../libs/data-access';
import { getMovieTopRatedListMockHandler } from '../../../../libs/data-access/mocks/handlers';
import { withMockResponses } from '../../../../libs/data-access/utils';
import { IndexPage } from './IndexPage';

const meta = {
  title: 'Pages/IndexPage',
  component: IndexPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IndexPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  decorators: [
    withMockResponses(
      getMovieTopRatedListMockHandler((info) => {
        const page = Number(
          new URL(info.request.url).searchParams.get('page') ?? '1'
        );

        return page === 2
          ? movieTopRatedListMockPage2
          : movieTopRatedListMockPage1;
      })
    ),
  ],
};
