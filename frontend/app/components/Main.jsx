"use client";
import React, { useState, useEffect } from "react";
import { Mic, MicOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SpeechRecognitionPrototype = () => {
  const [isClient, setIsClient] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechText, setSpeechText] = useState("");
  const [signLanguageTranslation, setSignLanguageTranslation] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleListening = () => {
    setIsListening(!isListening);
    // TODO: Implement actual speech recognition API call
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Voice Input Section */}
        <Card className="border-2 border-blue-100">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-gray-800">
              Speech Recognition
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <button
              onClick={toggleListening}
              className={`
                p-6 rounded-full transition-all duration-300
                ${
                  isListening
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-blue/60 hover:bg-blue"
                }
              `}
            >
              {isListening ? (
                <MicOff className="w-12 h-12 text-white" />
              ) : (
                <Mic className="w-12 h-12 text-white" />
              )}
            </button>
          </CardContent>
        </Card>

        {/* Speech Output */}
        <Card>
          <CardHeader>
            <CardTitle>Recognized Speech</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-24 p-4 bg-gray-50 rounded-lg">
              {speechText || "Transcription will appear here..."}
            </div>
          </CardContent>
        </Card>

        {/* Sign Language Translation */}
        <Card>
          <CardHeader>
            <CardTitle>Sign Language Translation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-24 p-4 bg-gray-50 rounded-lg">
              {signLanguageTranslation || "Translation will appear here..."}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpeechRecognitionPrototype;
