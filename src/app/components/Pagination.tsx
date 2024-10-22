import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  section: string; // This defines the section name (e.g., 'how-to')
}

export const Pagination = ({ currentPage, totalPages, section }: PaginationProps) => {
  // Determine previous and next page numbers
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav aria-label="Pagination" className="flex justify-center items-center space-x-4 mt-8">
      {/* Previous Page Link */}
      {prevPage && (
        <Link 
          href={`/tips/${section}${prevPage > 1 ? `?page=${prevPage}` : ''}`} 
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          aria-label={`Go to page ${prevPage}`}
        >
          Previous
        </Link>
      )}

      {/* Current Page Indicator */}
      <span aria-live="polite" className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Page Link */}
      {nextPage && (
        <Link 
          href={`/tips/${section}${nextPage > 1 ? `?page=${nextPage}` : ''}`} 
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          aria-label={`Go to page ${nextPage}`}
        >
          Next
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
