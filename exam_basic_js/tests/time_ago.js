/**SECTION: Show a "time ago" time */
// The goal here is simple enough:
// Create a function that will show the time in a different format, depending on when that time is (XX is actual time):
//   1. If the time is less than an hour ago, show "This was XX minutes ago"
//   2. If the time is less than 1 day ago, show "This was XX hours ago"
//   3. If the time is less than 7 days ago, show "This was X days ago"
//   4. If the time is older than that, show the actual date in format: day/month/year - hours:minutes
/**!SECTION */

/**SECTION: Task data */

const timeOne   = Date.now() -           44 * 60 * 1000;
const timeTwo   = Date.now() -       5 * 60 * 60 * 1000;
const timeThree = Date.now() - 4  * 24 * 60 * 60 * 1000;
const timeFour  = Date.now() - 44 * 24 * 60 * 60 * 1000;

/**!SECTION */

/** SECTION:  Work area */

// Your answer here. Delete this comment.

/** !SECTION */
  