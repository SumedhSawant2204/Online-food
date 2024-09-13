import React, { useState } from 'react';
import AdminNav from './AdminNav';

const jobListings = [
  // (same job listings as before)
  {
    id: 1,
    title: 'Good Name',
    company: 'Axiom Corp.',
    timePosted: '1 day ago',
    jobType: '',
    location: 'London, UK',
    rate: '2564569878',
    category: '@gmail.com',
    categoryColor: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Good Name',
    company: 'Axiom Corp.',
    timePosted: '1 day ago',
    jobType: '',
    location: 'London, UK',
    rate: '2564569878',
    category: '@gmail.com',
    categoryColor: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 3,
    title: 'Name Name',
    company: 'Axiom Corp.',
    timePosted: '1 day ago',
    jobType: '',
    location: 'London, UK',
    rate: '2564569878',
    category: '@gmail.com',
    categoryColor: 'bg-green-100 text-green-600',
  },
  {
    id: 4,
    title: 'Hame Name',
    company: 'Axiom Corp.',
    timePosted: '1 day ago',
    jobType: '',
    location: 'London, UK',
    rate: '2564569878',
    category: '@gmail.com',
    categoryColor: 'bg-pink-100 text-pink-600',
  },
  {
    id: 5,
    title: 'New Name',
    company: 'Axiom Corp.',
    timePosted: '1 day ago',
    jobType: '',
    location: 'London, UK',
    rate: '2564569878',
    category: '@gmail.com',
    categoryColor: 'bg-blue-100 text-blue-600',
  },
  {
    id: 5,
    title: 'New Name',
    company: 'Axiom Corp.',
    timePosted: '1 day ago',
    jobType: '',
    location: 'London, UK',
    rate: '2564569878',
    category: '@gmail.com',
    categoryColor: 'bg-blue-100 text-blue-600',
  },
  // Add more jobs as needed...
];




const JobSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState(new Set()); // To track favorited jobs
  const jobsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(jobListings.length / jobsPerPage);

  // Get current jobs for pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);

  // Toggle favorite status
  const toggleFavorite = (jobId) => {
    setFavorites(prevFavorites => {
      const updatedFavorites = new Set(prevFavorites);
      if (updatedFavorites.has(jobId)) {
        updatedFavorites.delete(jobId);
      } else {
        updatedFavorites.add(jobId);
      }
      return updatedFavorites;
    });
  };

  // Pagination buttons handler
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <AdminNav />
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Search bar */}
        <div className="bg-white p-4 rounded-lg flex items-center justify-between shadow-md">
          <div className="flex space-x-4 w-full">
            <select className="bg-gray-200 px-4 py-2 rounded-lg w-1/4">
              <option>Location</option>
              <option>London</option>
              <option>New York</option>
              <option>Toronto</option>
            </select>
            <input
              type="text"
              className="w-full bg-gray-200 px-4 py-2 rounded-lg"
              placeholder="Search..."
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4">
            Search
          </button>
        </div>

        {/* Job Listings */}
        <div className="bg-white mt-8 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">
              Showing <strong>{indexOfFirstJob + 1}-{indexOfLastJob}</strong> of <strong>{jobListings.length}</strong> results
            </span>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sort By:</span>
              <select className="bg-gray-100 px-4 py-2 rounded-lg">
                <option>Relevance</option>
                <option>Date Posted</option>
              </select>
            </div>
          </div>

          <div>
            {currentJobs.map((job) => (
              <div
                key={job.id}
                className="grid grid-cols-12 gap-4 items-center border-b py-4"
              >
                {/* Avatar placeholder */}
                <div className="col-span-1">
                  <img
                    src={`https://ui-avatars.com/api/?name=${job.title}`}
                    alt={job.title}
                    className="w-10 h-10 rounded-full"
                  />
                </div>

                {/* Job Title and Details */}
                <div className="col-span-6">
                  <h2 className="font-semibold text-gray-800">{job.title}</h2>
                  <p className="text-sm text-gray-500">
                    {job.company} - {job.timePosted}
                  </p>
                </div>

                {/* Job Type and Location */}
                <div className="col-span-2 text-sm text-gray-500">
                  <p>{job.jobType}</p>
                  <p>{job.location}</p>
                </div>

                {/* Rate */}
                <div className="col-span-1 text-gray-800 font-semibold">
                  {job.rate}
                </div>

                {/* Category */}
                <div className="col-span-1">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${job.categoryColor}`}
                  >
                    {job.category}
                  </span>
                </div>

                {/* Favorite Icon */}
                <div className="col-span-1">
                  <button
                    onClick={() => toggleFavorite(job.id)}
                    className={`text-2xl ${favorites.has(job.id) ? 'text-yellow-500' : 'text-gray-400'}`}
                  >
                    ★
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav aria-label="Page navigation">
              <ul className="inline-flex -space-x-px">
                <li>
                  <button
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    &laquo;
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleClick(i + 1)}
                      className={`px-3 py-2 leading-tight ${
                        currentPage === i + 1
                          ? 'text-blue-600 bg-blue-50 border border-blue-300'
                          : 'text-gray-500 bg-white border border-gray-300'
                      } hover:bg-gray-100 hover:text-gray-700`}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    &raquo;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default JobSearch;
