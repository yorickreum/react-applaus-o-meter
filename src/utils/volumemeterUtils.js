class VolumemeterUtils {

    static initiate(clipLevel, averaging, clipLag) {
        let AudioContext = window.AudioContext || window.webkitAudioContext;
        window.audioContext = new AudioContext();
        window.processor = window.audioContext.createScriptProcessor(512);
        window.processor.onaudioprocess = VolumemeterUtils.volumeAudioProcess;
        window.processor.clipping = false;
        window.processor.lastClip = 0;
        window.processor.volume = 0;
        window.processor.clipLevel = clipLevel || 0.98;
        window.processor.averaging = averaging || 0.95;
        window.processor.clipLag = clipLag || 750;

        console.log("AudioContext", window.audioContext);

        window.processor.connect(window.audioContext.destination);

        window.processor.checkClipping =
            function () {
                if (!window.processor.clipping)
                    return false;
                if ((window.processor.lastClip + window.processor.clipLag) < window.performance.now())
                    window.processor.clipping = false;
                return window.processor.clipping;
            };

        window.processor.shutdown =
            function () {
                VolumemeterUtils.disconnect();
                window.processor.onaudioprocess = null;
            };

        try {
            // monkeypatch getUserMedia
            navigator.getUserMedia =
                navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia;

            // ask for an audio input
            navigator.getUserMedia(
                {
                    "audio": {
                        "mandatory": {
                            "googEchoCancellation": "false",
                            "googAutoGainControl": "false",
                            "googNoiseSuppression": "false",
                            "googHighpassFilter": "false"
                        },
                        "optional": []
                    },
                }, VolumemeterUtils.gotStream, VolumemeterUtils.didntGetStream);
        } catch (e) {
            console.log('getUserMedia threw exception :' + e);
        }

    }

    static didntGetStream() {
        console.log('Stream generation failed.');
    }

    static gotStream(stream) {
        // Create an AudioNode from the stream.
        let mediaStreamSource = window.audioContext.createMediaStreamSource(stream);
        mediaStreamSource.connect(window.processor);
    }

    static volumeAudioProcess(event) {
        const buf = event.inputBuffer.getChannelData(0);
        let sum = 0;
        let x;

        // Do a root-mean-square on the samples: sum up the squares...
        for (let i = 0; i < buf.length; i++) {
            x = buf[i];
            if (Math.abs(x) >= window.processor.clipLevel) {
                window.processor.clipping = true;
                window.processor.lastClip = window.performance.now();
            }
            sum += x * x;
        }

        // ... then take the square root of the sum.
        const rms = Math.sqrt(sum / buf.length);

        // Now smooth this out with the averaging factor applied
        // to the previous sample - take the max here because we
        // want "fast attack, slow release."
        window.processor.volume = Math.max(rms, window.processor.volume * window.processor.averaging);
    }

    static getVolume() {
        if (window.processor) {
            return window.processor.volume;
        } else {
            return null;
        }
    }
}

export default VolumemeterUtils
