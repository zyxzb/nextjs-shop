const Loading = () => {
  return (
    <div className='w-full h-full max-w-[1000px] mx-auto pt-[150px]'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
