import React, { useState } from 'react';

import SearchBar from './SearchBar';
import GifList from './GifList';
import Gif from './Gif';

const giphy = require('giphy-api')({
  apiKey: 'wq45cGgvpkRmOFufH0Ee7b8DEdLnG69O',
  https: true
});

const App = () => {
  const [gifIdSelected, setGifIdSelected] = useState("mz1kJeDVueKC4");
  const [giIdList, setGiIdList] = useState(["d6Ni9aqSatPfq", "PXvCWUnmqVdks", "pYCZPDymIVjeo", "720g7C1jz13wI", "Tl2AK8HOHj7SU", "5tlq0pRndGu8U", "IWvuFVQICQIr6", "12nfFCZA0vyrSw"]);
  const fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      setGiIdList(res.data.map((gif) => gif.id));
    });
  };
  const changeSelectGif = (newSelectedGifId) => {
    setGifIdSelected(newSelectedGifId);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={gifIdSelected} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIdList={giIdList} changeSelectGif={changeSelectGif} />
      </div>
    </div>
  );
};

export default App;
