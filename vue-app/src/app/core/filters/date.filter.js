/**
 * Filter returns suitable date format
 * @param {Date} value date pushed to filter
 */
export default function dateFilter(value) {
  return new Date(value).toDateString();
}
