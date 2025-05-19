# SWR Random User Fetcher

A modern Next.js (App Router) project demonstrating real-world usage of **SWR** by Vercel for data fetching, caching, and revalidation — styled with Tailwind CSS and featuring dynamic UI elements inspired by shadCN UI.

---

## Features

- Fetches random user data from the [randomuser.me API](https://randomuser.me/)
- Uses **SWR** for fast, cached data fetching and seamless revalidation
- Refresh button to shuffle and fetch a new set of users instantly
- Skeleton loaders while data is loading for better UX
- Live "Last updated" timer showing seconds since last successful fetch
- Toast notifications powered by [Sonner](https://github.com/sonner-toast/sonner) for refresh feedback
- Responsive and clean UI inspired by shadCN design principles

---

## Tech Stack

- **Next.js 13** (App Router)
- **React 18**
- **SWR** for data fetching & caching
- **Tailwind CSS** for styling
- **Sonner** for toast notifications

---

## Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/swr-random-user-fetcher.git
   cd swr-random-user-fetcher
   ```

   **Or view the project live on GitHub:**  
   [https://github.com/TanishqKashla/swr-fetching](https://github.com/TanishqKashla/swr-fetching)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

- Click the **Shuffle** button to fetch a new set of random users.
- Observe the skeleton loaders while data is loading.
- See the toast notification confirming successful data refresh.
- Check the “Last updated” timer to track when data was last fetched.

---

## Project Structure

```
/app
  ├── layout.js         # Root layout with <Toaster /> for notifications
  ├── page.js           # Main page fetching & displaying users
  └── components/
      └── UserCard.js   # User card component styled with Tailwind
/lib
  └── fetcher.js        # Simple fetcher utility for SWR
```

---

## Learnings & Concepts Demonstrated

- Basic to intermediate use of SWR hooks (`useSWR`, `mutate`)
- Handling loading states with skeleton UIs
- Showing toast notifications with Sonner
- Calculating and displaying relative time
- Component-based UI with reusable `UserCard`
- Clean, responsive layout using Tailwind CSS
