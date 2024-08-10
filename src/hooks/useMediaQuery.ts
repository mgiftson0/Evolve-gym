import { useEffect, useState } from "react";

// This custom hook, useMediaQuery, checks if a given media query matches the current viewport
const useMediaQuery = (query: string) => {
  // State to store whether the media query matches or not
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a MediaQueryList object
    const media = window.matchMedia(query);

    // Update the state if the initial match state is different from our state
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Define a listener function to update the state when the match changes
    const listener = () => setMatches(media.matches);

    // Add an event listener for the "resize" event
    window.addEventListener("resize", listener);

    // Clean up function to remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]); // Re-run the effect if matches or query changes

  // Return whether the media query matches or not
  return matches;
};

export default useMediaQuery;
