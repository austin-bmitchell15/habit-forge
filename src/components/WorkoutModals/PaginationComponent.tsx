import React from 'react';
import { IconButton, Typography } from '@material-tailwind/react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Exercise } from '@/API';

interface PaginationProps {
  items: any[];
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  updatePagination: Function;
}

export default function PaginationComponent({
  items,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  updatePagination,
}: PaginationProps) {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Function to go to the previous page
  const prevPage = () => {
    const page = Math.max(1, currentPage - 1);
    setCurrentPage(page);
    updatePagination();
  };

  // Function to go to the next page
  const nextPage = () => {
    const page = Math.min(totalPages, currentPage + 1);
    setCurrentPage(page);
    updatePagination();
  };

  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex items-center">
        <IconButton
          size="sm"
          variant="outlined"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="gray" className="mx-4 font-normal">
          Page <strong className="text-gray-900">{currentPage}</strong> of{' '}
          <strong className="text-gray-900">{totalPages}</strong>
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  );
}
