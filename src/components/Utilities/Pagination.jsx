const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    // if (page > 1) {
    //   setPage((prevState) => prevState - 1);
    //   scrollTop();
    // }
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-warna-primary text-2xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-warna-accent"
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>
      {(page) =>
        lastPage ? null : (
          <button
            onClick={handleNextPage}
            className="transition-all hover:text-warna-accent"
          >
            Next
          </button>
        )
      }
    </div>
  );
};
export default Pagination;
