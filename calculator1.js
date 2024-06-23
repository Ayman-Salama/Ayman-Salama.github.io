function calculateSampler() {
    var bits = document.getElementById('samplerBits').value;
    var rate = document.getElementById('samplerRate').value;
    var output = "Total Bits Transmitted = " + (bits * rate) + " bits/s";
    document.getElementById('samplerResult').innerHTML = output;
}

function calculateQuantizer() {
    var bits = document.getElementById('quantizerBits').value;
    var rate = document.getElementById('quantizerRate').value;
    var output = "Total Bits Transmitted = " + (bits * rate) + " bits/s";
    document.getElementById('quantizerResult').innerHTML = output;
}

function calculateEncoder() {
    var bits = document.getElementById('encoderBits').value;
    var rate = document.getElementById('encoderRate').value;
    var output = "Total Bits Transmitted = " + (bits * rate) + " bits/s";
    document.getElementById('encoderResult').innerHTML = output;
}

function calculateChannelEncoder() {
    var bits = document.getElementById('channelEncoderBits').value;
    var rate = document.getElementById('channelEncoderRate').value;
    var output = "Total Bits Transmitted = " + (bits * rate) + " bits/s";
    document.getElementById('channelEncoderResult').innerHTML = output;
}

function calculateInterleaver() {
    var bits = document.getElementById('interleaverBits').value;
    var rate = document.getElementById('interleaverRate').value;
    var output = "Total Bits Transmitted = " + (bits * rate) + " bits/s";
    document.getElementById('interleaverResult').innerHTML = output;
}
