import { PageTitle, FavoriteCards } from '../components';

const FavoritesPage = () => {
  return (
    <div>
      <PageTitle title='Favorite items ❤' />
      <section className='w-full max-w-[1200px] mx-auto flex flex-col gap-6'>
        <FavoriteCards />
      </section>
    </div>
  );
};

export default FavoritesPage;
