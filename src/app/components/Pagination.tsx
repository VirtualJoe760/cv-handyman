import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  section: string; // This defines the section name (e.g., 'how-to')
}

export const Pagination = ({ currentPage, totalPages, section }: PaginationProps) => {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      {prevPage && (
        <Link href={`/tips/${section}?page=${prevPage}`}>
          <a className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Previous</a>
        </Link>
      )}

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      {nextPage && (
        <Link href={`/tips/${section}?page=${nextPage}`}>
          <a className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</a>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
