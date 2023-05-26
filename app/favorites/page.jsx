import FavoriteCards from '../components/FavoriteCards';

const FavoritesPage = () => {
  return (
    <div>
      <h1 className='uppercase font-bold text-center py-10 text-2xl'>
        favorite items ❤
      </h1>
      <section className='w-full max-w-[1200px] mx-auto flex flex-col gap-6'>
        <FavoriteCards />
      </section>
    </div>
  );
};

export default FavoritesPage;
