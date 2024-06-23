function calculateAll() {
    // Inputs
    var samplerBits = parseInt(document.getElementById('samplerBits').value);
    var samplerRate = parseInt(document.getElementById('samplerRate').value);
    var quantizerBits = parseInt(document.getElementById('quantizerBits').value);
    var quantizerRate = parseInt(document.getElementById('quantizerRate').value);
    var encoderBits = parseInt(document.getElementById('encoderBits').value);
    var encoderRate = parseInt(document.getElementById('encoderRate').value);
    var channelEncoderBits = parseInt(document.getElementById('channelEncoderBits').value);
    var channelEncoderRate = parseInt(document.getElementById('channelEncoderRate').value);
    var interleaverBits = parseInt(document.getElementById('interleaverBits').value);
    var interleaverRate = parseInt(document.getElementById('interleaverRate').value);

    // Calculations
    document.getElementById('samplingFrequency').innerHTML = "Sampling Frequency: " + samplerRate + " Hz";
    document.getElementById('quantizationLevels').innerHTML = "Number of Quantization Levels: " + Math.pow(2, quantizerBits);
    document.getElementById('sourceEncoderInputBitrate').innerHTML = "Bit Rate at Input of Source Encoder: " + (encoderBits * encoderRate) + " bits/s";
    document.getElementById('sourceEncoderOutputBitrate').innerHTML = "Bit Rate at Output of Source Encoder: " + (encoderBits * encoderRate / 2) + " bits/s"; // Assuming some compression ratio
    document.getElementById('channelEncoderOutputBitrate').innerHTML = "Bit Rate at Output of Channel Encoder: " + (channelEncoderBits * channelEncoderRate) + " bits/s";
    document.getElementById('interleaverOutputBitrate').innerHTML = "Bit Rate at Output of Interleaver: " + (interleaverBits * interleaverRate) + " bits/s";

    // Display results section
    document.getElementById('results').style.display = 'block';
}
