import { useState, useEffect } from "react";

let speech;
if (window.webkitSpeechRecognition) {
  // eslint-disable-next-line
  const SpeechRecognition = webkitSpeechRecognition;
  speech = new SpeechRecognition();
  speech.continuous = true;
} else {
  speech = null;
}

const useVoice = ({ setTerm }) => {
  const [isListening, setIsListening] = useState(false);

  const listen = () => {
    setIsListening(!isListening);
    if (isListening) {
      speech.stop();
    } else {
      speech.start();
    }
  };

  useEffect(() => {
    if (!speech) {
      return;
    }
    speech.onresult = (event) => {
      setTerm(event.results[event.results.length - 1][0].transcript);
      setIsListening(false);
      speech.stop();
    };
  }, []);

  return {
    isListening,
    listen,
    voiceSupported: speech !== null,
  };
};

export { useVoice };
