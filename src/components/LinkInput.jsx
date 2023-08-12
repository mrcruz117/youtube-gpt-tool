import { useState } from "react";
import { getTranscript } from "../apiActions";

export default function LinkInput() {
  const [link, setLink] = useState("");

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleGoClick = async () => {
    console.log("link: ", link);

    const res = getTranscript(link);

    // console.log("transcript: ", transcript);
  };

  return (
    <div>
      <input
        type="text"
        value={link}
        onChange={handleLinkChange}
        placeholder="Enter a link"
      />

      <button onClick={handleGoClick}>Go</button>
    </div>
  );
}
