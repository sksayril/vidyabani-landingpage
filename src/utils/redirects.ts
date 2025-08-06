/**
 * Utility function to redirect to student.vidyavani.com
 * @param path - Optional path to append to the base URL
 */
export const redirectToStudentPortal = (path: string = '') => {
  const baseUrl = 'https://student.vidyavani.com';
  const fullUrl = path ? `${baseUrl}/${path.replace(/^\//, '')}` : baseUrl;
  
  // Open in new tab for better UX
  window.open(fullUrl, '_blank', 'noopener,noreferrer');
};

/**
 * Utility function to handle button clicks with redirect
 * @param path - Optional path to append to the base URL
 */
export const handleRedirectClick = (path: string = '') => {
  redirectToStudentPortal(path);
}; 