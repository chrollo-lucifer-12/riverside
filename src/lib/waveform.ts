export const extractAudioBufferFromVideo = async (videoUrl: string): Promise<AudioBuffer> => {
    const audioContext = new AudioContext();

    const response = await fetch(videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    console.log("audio buffer", audioBuffer);

    return audioBuffer;
};

export const getPcmData = (audioBuffer: AudioBuffer) => {
    const channelData = audioBuffer.getChannelData(0); // mono
    const samples = [];

    const sampleRate = 500;
    const step = Math.floor(channelData.length / sampleRate);

    for (let i = 0; i < channelData.length; i += step) {
        samples.push(channelData[i]);
    }

    console.log(samples);

    return samples;
};

export const drawOnCanvas = (
    samples: number[],
    canvas: HTMLCanvasElement,
    duration: number,
    currentTime: number
) => {
    const { width, height } = canvas;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, width, height);

    const totalBars = samples.length;
    const barWidth = width / totalBars;
    const progress = currentTime / duration;
    const playedBars = Math.floor(totalBars * progress);

    for (let i = 0; i < totalBars; i++) {
        const sample = samples[i];
        const x = i * barWidth;
        const magnitude = Math.max(0, Math.min(1, Math.abs(sample)));
        const barHeight = magnitude * height;
        const y = (height - barHeight) / 2;

        // Color based on playback
        ctx.fillStyle = i < playedBars ? "blue" : "#ccc"; // blue = played, gray = unplayed
        ctx.fillRect(x, y, barWidth, barHeight);
    }
};


