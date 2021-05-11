import React from "react";
import emojiDict from "../emojipedia";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojiDict.map((item, key) => (
          <Entry
            key={item.id}
            emoji={item.emoji}
            name={item.name}
            meaning={item.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
