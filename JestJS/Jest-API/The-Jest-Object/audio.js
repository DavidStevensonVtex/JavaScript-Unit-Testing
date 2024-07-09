const video = {
    // it's a getter!
    get play() {
      return true;
    },
  };
  
  module.exports = video;
  
  const audio = {
    _volume: false,
    // it's a setter!
    set volume(value) {
      this._volume = value;
    },
    get volume() {
      return this._volume;
    },
  };
  
  module.exports = audio;