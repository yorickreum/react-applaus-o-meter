class _Volumemeter {

    constructor( clipLevel, averaging, clipLag ) {
        let AudioContext = window.AudioContext || window.webkitAudioContext;
        window.audioContext = new AudioContext();
        window.processor = window.audioContext.createScriptProcessor(512);
        window.processor.onaudioprocess = this.volumeAudioProcess;
        window.processor.clipping = false;
        window.processor.lastClip = 0;
        window.processor.volume = 0;
        window.processor.clipLevel = clipLevel || 0.98;
        window.processor.averaging = averaging || 0.95;
        window.processor.clipLag = clipLag || 750;

        window.processor.connect(window.audioContext.destination);

        window.processor.checkClipping =
            function(){
                if (!this.clipping)
                    return false;
                if ((this.lastClip + this.clipLag) < window.performance.now())
                    this.clipping = false;
                return this.clipping;
            };

        window.processor.shutdown =
            function(){
                this.disconnect();
                this.onaudioprocess = null;
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
                }, this.gotStream, this.didntGetStream);
        } catch (e) {
            console.log('getUserMedia threw exception :' + e);
        }

    }

    didntGetStream() {
        console.log('Stream generation failed.');
    }

    gotStream(stream) {
        // Create an AudioNode from the stream.
        let mediaStreamSource = window.audioContext.createMediaStreamSource(stream);
        mediaStreamSource.connect(window.processor);
    }

    volumeAudioProcess( event ) {
        var buf = event.inputBuffer.getChannelData(0);
        var sum = 0;
        var x;

        // Do a root-mean-square on the samples: sum up the squares...
        for (var i=0; i<buf.length; i++) {
            x = buf[i];
            if (Math.abs(x)>=this.clipLevel) {
                this.clipping = true;
                this.lastClip = window.performance.now();
            }
            sum += x * x;
        }

        // ... then take the square root of the sum.
        var rms =  Math.sqrt(sum / buf.length);

        // Now smooth this out with the averaging factor applied
        // to the previous sample - take the max here because we
        // want "fast attack, slow release."
        this.volume = Math.max(rms, this.volume*this.averaging);
    }

    getVolume() {
        return window.processor.volume;
    }
}

const Volumemeter = new _Volumemeter();

export default Volumemeter